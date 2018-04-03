import {Model} from 'mongoose';
import * as hostModel from '../models/hostModel';
import * as visitModel from '../models/visitModel';
import BaseCtrl from './baseController';
import VisitCtrl from './visitController';
import MailService from '../../mail-service';

const hostCtrl = new BaseCtrl<Model<hostModel.IHostLogModel>>(hostModel.default);
const visitCtrl = new VisitCtrl<Model<visitModel.IVisitLogModel>>(visitModel.default);

/**
 * Visitor functions
 * */
exports.register_a_visit = (req: any, res: any) => {
    console.log('registering');
    visitCtrl.insert(req, res);
};

exports.get_all_visits = (req: any, res: any) => {
    visitCtrl.getAll(req, res);
};
exports.remove_a_visit = (req: any, res: any) => {
    visitCtrl.delete(req, res);
};
exports.remove_all_visits = (req: any, res: any) => {
    visitCtrl.deleteAll(req, res);
};

exports.sort_date = (req: any, res: any) => {
    visitCtrl.getDate(req, res);
};

exports.filter_visits = (req: any, res: any) => {
    visitCtrl.filterVisits(req, res);
};

// Host functions
exports.register_a_host = (req: any, res: any) => {
    hostCtrl.insert(req, res);
};
exports.get_hosts = (req: any, res: any) => {
    hostCtrl.get(req, res);
};
exports.get_all_hosts = (req: any, res: any) => {
    hostCtrl.getAll(req, res);
};
exports.remove_a_host = (req: any, res: any) => {
    hostCtrl.delete(req, res);
};
exports.remove_all_hosts = (req: any, res: any) => {
    hostCtrl.deleteAll(req, res);
};

/**
 *  Email function
 * */

exports.send_email = (req: any, res: any) => {
    const mailOptions = {
        from: 'email.from@gmail.com',
        to: 'email.to@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'The email is sent',
    };
    console.log(MailService);
    MailService.sendMail(mailOptions);
    res.sendStatus(200);
};
