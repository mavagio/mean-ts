import Base from './baseController';
import MailService from '../../mail-service';

export default class Visit<T extends any> extends Base<T> {
    constructor(model: T) {
        super(model);
    }

    public insert = (req: any, res: any) => {
        const newReqBody = {
            entryId: req.body.id,
            picture: req.body.picture,
            name: req.body.name,
            email: req.body.email,
            date: new Date(req.body.date),
            host: req.body.host,
        };

        const obj = new this.model(newReqBody);
        obj.save((err: any, item: any) => {
            if (err) {
                return console.error(err);
            }

            const mailOptions = {
                from: 'working.space.inc@gmail.com',
                to: req.body.host.email,
                subject: 'Email subject',
                text: `${req.body.name} Email text.`,
            };

            if (req.body.comment !== undefined) {
                mailOptions.text = `${mailOptions.text} \n User comment: ${req.body.comment}`;
            }

            MailService.sendMail(mailOptions);

            res.status(200).json(item);
        });
    }

    public get = (req: any, res: any) => {
        this.model.findOne({entryId: req.params.entryId}, (err: any, obj: any) => {
            if (err) {
                return console.error(err);
            }
            res.json(obj);
        });
    }
}
