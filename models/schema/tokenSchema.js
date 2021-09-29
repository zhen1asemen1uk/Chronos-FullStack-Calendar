const { Schema, model } = require('mongoose');

const tokens = new Schema({
   user_id:{type:user_id},
   title: { type: String, required: true },
   desc: { type: String},
   date: { type: Date}
});

module.exports = model('tokenSchema', tokens);