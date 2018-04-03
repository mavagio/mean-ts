import * as mongoose from 'mongoose';
import { Schema, Model, Document } from 'mongoose';

export interface IVisitorLog {
    entryId   : string
    
}

const VisitorLogSchema: Schema = new Schema({
    entryId     : String,
    name        : String,
    email       : String
  });

export interface IVisitorLogModel extends IVisitorLog, Document {}
const VisitorLogModel = 
      mongoose.model<IVisitorLogModel>('VisitorLog', VisitorLogSchema);

export default VisitorLogModel;
