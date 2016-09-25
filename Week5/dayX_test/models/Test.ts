import * as mongoose from 'mongoose';

// interface

let testSchema = new mongoose.Schema ({
  title: {type: String}
})

export let Test = mongoose.model("Test", testSchema)
