import mongoose = require('mongoose');
import { Schema, Model, Document } from 'mongoose';

export interface IHostLog {
    entryId   : string,
    name        : string,
    email       : string
}

const HostLogSchema: Schema = new Schema({
    entryId     : String,
    name        : String,
    email       : String
  });

export interface IHostLogModel extends IHostLog, Document {}
const HostLogModel = 
    mongoose.model<IHostLogModel>('HostLog', HostLogSchema);

export default HostLogModel;