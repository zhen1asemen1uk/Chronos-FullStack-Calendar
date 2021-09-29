const userSchema = require("./schema/userSchema");

module.exports = {
   async getAllUser() {
      return await userSchema.find({});
   }
   ,
   async getUser(login, email) {
      return await userSchema.find({ login, email });

   }
   ,
   async addUser(login, password, email, avatar, activationLink) {
      const user = await new userSchema({ login, password, email, avatar, activationLink });
      return await user.save();
   }
   ,
   async loginUser(login) {
      return await userSchema.findOne({ login: login });

      // return await dbConnection.getConnection(`
      // SELECT * FROM users WHERE login = "${login}" OR email = "${login}";`);
   }
   ,
   async activateUser_check(link) {
      return await userSchema.findOne({ activationLink: link });
   }
   ,
   async activateUser_updateVerify(link) {
      return await userSchema.findOneAndUpdate({ activationLink: link }, { verify: true });
   }
   ,
   async updateActivationLink(id, link) {
      return await userSchema.findOneAndUpdate({ _id: id }, { activationLink: link, verify: false });
      // return await dbConnection.getConnection(`
      // UPDATE users SET activationLink='${link}' WHERE id='${id}';`);
   }
   ,
   async checkVerifyUser(login) {
      return await userSchema.findOne({ login });
      // return await dbConnection.getConnection(`
      // SELECT verify FROM users WHERE login='${login}' OR email='${login}';`)
   }
   ,
   async getUserByID(user_id) {
      return await userSchema.findById({ _id: user_id });
   }
   ,
   async resetPass_userId(id, pass) {
      return await userSchema.findOneAndUpdate({ _id: id }, { password:pass});
   }
   ,
   async addUser_ADMIN(login, password, email, avatar, status, verify, activationLink) {
      const user = await new userSchema({ login, password, email, avatar, status, verify, activationLink });
      console.log(user);

      return await userSchema.save();
   }
   ,
   async deleteUserByID(user_id) {
      return await userSchema.findOneAndDelete({ _id: user_id });
   }
   ,
   async updateLoginByID(id, login) {
      return await userSchema.findByIdAndUpdate({ _id: id }, { login: login });
   }
   ,
   async updateEmailByID(id, email) {
      return await userSchema.findOneAndUpdate({ _id: id }, { email: email });
   }
   ,
   async updatePasswordByID(id, password) {
      return await userSchema.findOneAndUpdate({ _id: id }, { password: password });
   }
   ,
   async updateAvatarByID(id, avatar) {
      return await userSchema.findByIdAndUpdate({ _id: id }, { avatar: avatar });
   }

}
