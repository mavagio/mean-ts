import mongoose = require('mongoose');
import { User } from './user';
import { Schema, Model, Document } from 'mongoose';

export interface IVisitLog {
  host        : User,
  entryId     : string,
  picture     : string,
  name        : string,
  email       : string,
  date        : Date
}

const VisitLogSchema: Schema = new Schema({
    host        : Object,
    entryId     : String,
    picture     : String,
    name        : String,
    email       : String,
    date        : Date
  });

export interface IVisitLogModel extends IVisitLog, Document {}
const VisitLogModel = 
      mongoose.model<IVisitLogModel>('VisitLog', VisitLogSchema);

export default VisitLogModel;