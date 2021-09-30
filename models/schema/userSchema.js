const { Schema, model } = require('mongoose');

const user = new Schema({
   login: { type: String, required: true, unique: true },
   password: { type: String, min: 6, required: true },
   email: { type: String, required: true, unique: true },
   avatar: { type: String, default: './user' },
   activationLink: { type: String },
   status: { type: String, default: 'user' },
   verify: { type: Boolean, default: false },
   createdAt: { type: Date, default: Date.now },
   events: [{
      title: { type: String, required: true },
      desc: { type: String },
      date: { type: Date }
   }],
   tokens: {
      refreshToken: { type: String },
      accessToken: { type: String }
   }
});

module.exports = model('users', user);