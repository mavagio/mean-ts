import Base from './baseController';

export default class TestClass<T extends any> extends Base<T> {
    constructor(model: T) {
        super(model);
    }

    public insert = (req: any, res: any) => {
        const newReqBody = {
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
        };
        const obj = new this.model(newReqBody);

        obj.save((err: any, item: any) => {
            if (err) {
                return console.error(err);
            }
            res.status(200).json(item);
        });
    }
}
