const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;
console.log(ObjectId);

const user = new Schema({
   _id: ObjectId,
   login: { type: String, required: true },
   password: { type: String, min: 6, required: true },
   email: { type: String, required: true },
   avatar: { type: String, default: './user' },
   activationLink: { String },
   status: { type: String, default: 'user' },
   verify: { type: Boolean, default: false },
   date: { type: Date, default: Date.now }
   
});

module.exports = model('userSchema', user);