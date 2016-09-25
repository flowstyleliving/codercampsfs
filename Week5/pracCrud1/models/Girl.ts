import * as mongoose from 'mongoose';

export interface IGirlModel extends app.i.IGirl, mongoose.Document {}

let girlSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number},
  ethnicity: {type: String},
  attraction: {type: Number},
  aligned: {type: Boolean}
})

export let Girl = mongoose.model<IGirlModel>("Girl", girlSchema);
