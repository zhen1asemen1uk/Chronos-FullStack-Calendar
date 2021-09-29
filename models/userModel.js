const userSchema = require("./schema/userSchema");


module.exports = {
   async getAllUser() {
      return await new userSchema.find({});
   }
   ,
   async getUser(login, email) {
      return await userSchema.find({ login, email });

   }
   ,
   async addUser(login, password, email, avatar, activationLink) {
      // const user = await new userSchema({ login, password, email, avatar, activationLink });
      const user = await new userSchema({ login, password, email, avatar, activationLink });
      // console.log(user.inserOne);
      console.log(user  );

      return await userSchema.save();
   }
   ,
   async loginUser(login) {
      return await dbConnection.getConnection(`
      SELECT * FROM users WHERE login = "${login}" OR email = "${login}";`);
   }
   ,
   async activateUser_check(link) {
      return await userSchema.findOne({ activationLink: link });
   }
   ,
   async activateUser_updateVerify(link) {
      return await dbConnection.getConnection(`
      UPDATE users SET verify='true' WHERE activationLink='${link}';`);
   }
   ,
   async updateActivationLink(id, link) {
      return await dbConnection.getConnection(`
      UPDATE users SET activationLink='${link}' WHERE id='${id}';`);
   }
   ,
   async checkVerifyUser(login) {
      return await dbConnection.getConnection(`
      SELECT verify FROM users WHERE login='${login}' OR email='${login}';`)
   }
   ,
   async getUserByID(user_id) {
      return await new userSchema.findById(user_id);
   }
   ,
   async resetPass_userId(id, pass) {
      let user = await userSchema.findOne({ id });
      console.log(user);
      user.password = pass;
      console.log(user);

      return userSchema.save();
   }
   ,
   async addUser_ADMIN(login, password, email, avatar, status, verify, activationLink) {
      const user = await new userSchema({ login, password, email, avatar, status, verify, activationLink });
      console.log(user);

      return await userSchema.save();
   }
   ,
   async deleteUserByID(user_id) {
      return await dbConnection.getConnection(`
      DELETE FROM users WHERE id=${user_id};`);
   }
   ,
   async updateLoginByID(id, login) {
      let user = await userSchema.findOne({ _id: id });
      console.log(user);
      user.login = login;
      console.log(user);

      return userSchema.save();
   }
   ,
   async updateEmailByID(id, email) {
      let user = await userSchema.findOne({ _id: id });
      console.log(user);
      user.email = email;
      user.verify = false;
      console.log(user);

      return userSchema.save();
   }
   ,
   async updatePasswordByID(id, password) {
      let user = await userSchema.findOne({ _id: id });
      console.log(user);
      user.password = password;
      console.log(user);

      return userSchema.save();
   }
   ,
   async updateAvatarByID(id, avatar) {
      let user = await userSchema.findOne({ _id: id });
      console.log(user);
      user.avatar = avatar;
      console.log(user);

      return userSchema.save();
   }

}
