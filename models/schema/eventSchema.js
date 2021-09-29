const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;
console.log(ObjectId);

const event = new Schema({
   _id: ObjectId,
   user_id:{type:user_id},
   title: { type: String, required: true },
   desc: { type: String},
   date: { type: Date}
});

module.exports = model('eventSchema', event);