import mongoose from 'mongoose'
var Schema = mongoose.Schema;

export const collectionSchema = new Schema({
        _id: Schema.Types.ObjectId,
        name: String
    });
export const collection= mongoose.model('investors', collectionSchema)
