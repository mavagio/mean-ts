# MEAN Stack with TypeScript
- MongoDB
- Angular 4
- Express
- Node

## Creating a new endpoint
- Define your endpoint route in `server/src/api/routes/apiRoutes.ts`, example:
```TypeScript
app.route('/api/test/').get(apiController.test_get);
```
- Add function to handle the endpoint in `server/src/api/controllers/apiController.ts`, example:
```TypeScript
exports.test_get = (req: any, res: any) => {
    testCtrl.getAll(req, res);
};
```

## Creating a new model
- Add the new model to `server/src/api/models`, example:
```TypeScript
import mongoose = require('mongoose');
import {Schema, Document} from 'mongoose';

export interface ITest {
    name: string;
    email: string;
    type: number;
}

const TestSchema: Schema = new Schema({
    name: String,
    email: String,
    type: Number,
});

export interface ITestModel extends ITest, Document {
}

const TestModel = mongoose.model<ITestModel>('Test', TestSchema);

export default TestModel;
```
- Add controller for your model to `server/src/api/controllers`,
 the controller has to inherit from `baseController`, example:
```TypeScript
import Base from './baseController';

export default class TestClass<T extends any> extends Base<T> {
    constructor(model: T) {
        super(model);
    }

    public insert = (req: any, res: any) => {
        const obj = new this.model(req.body);
        obj.save((err: any, item: any) => {
            if (err) {
                return console.error(err);
            }
            res.status(200).json(item);
        });
    }
}
```