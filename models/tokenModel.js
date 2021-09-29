const userSchema = require("./schema/userSchema");

module.exports = {
   async getTokenByID(user_id) {
      const user = await userSchema.findById({ _id: user_id });
      return user.tokens;
   }

   , async getToken(refreshToken) {
      return await userSchema.findOne({ refreshToken: refreshToken })
   }

   , async refreshToken(user_id, refTok) {
      const user = await userSchema.findById({ _id: user_id });
      user.tokens.push({ refreshToken: refTok });


      return await user.save();
      // return await dbConnection.getConnection(`
      // UPDATE tokens SET refreshToken='${refreshToken}'
      // WHERE user_id='${user_id}';`);
   }

   , async save(user_id, refTok) {
      const user = await userSchema.findById({ _id: user_id });
      user.tokens.push({ refreshToken: refTok });

      return await user.save();
      // return await dbConnection.getConnection(`
      // INSERT INTO tokens (user_id, refreshToken)
      // VALUES ('${user_id}','${refreshToken}');`);
   }
   , async delete(refreshToken) {
      return await userSchema.findOneAndDelete({ refreshToken: refreshToken });
      // return await dbConnection.getConnection(`
      // DELETE FROM tokens WHERE refreshToken='${refreshToken}';`);
   }

   , async getTokenAllInfo(refreshToken) {
      return await userSchema.findOne({ refreshToken: refreshToken });

      // return await dbConnection.getConnection(`
      // SELECT * FROM tokens WHERE refreshToken='${refreshToken}';`);
   }
}

