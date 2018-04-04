import {Model} from 'mongoose';
import * as testModel from '../models/testModel';
import TestCtrl from './testController';

const testCtrl = new TestCtrl<Model<testModel.ITestModel>>(testModel.default);

// The getAll is inherited from base controller
exports.test_get = (req: any, res: any) => {
    testCtrl.getAll(req, res);
};

// The function insert is unique for testController
exports.test_post = (req: any, res: any) => {
    testCtrl.insert(req, res);
};
