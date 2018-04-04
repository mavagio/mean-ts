# MEAN Stack with TypeScript
- MongoDB
- Angular 4
- Express
- Node

## Creating a new endpoint
- Define your endpoint route in apiRoutes.ts
- Add function to handle the endpoint in apiController.ts

## Creating a new model
- Add your model following the example to models folder

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