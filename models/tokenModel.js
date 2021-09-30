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
      return await userSchema.findByIdAndUpdate({ _id: user_id }, { refreshToken: refTok });
   }

   , async save(user_id, refTok) {
      return await userSchema.findByIdAndUpdate({ _id: user_id }, { refreshToken: refTok });
   }

   , async delete(refreshToken) {
      return await userSchema.findOneAndReplace({ refreshToken: refreshToken });
      // return await dbConnection.getConnection(`
      // DELETE FROM tokens WHERE refreshToken='${refreshToken}';`);
   }

   , async getTokenAllInfo(refreshToken) {
      return await userSchema.findOne({ refreshToken: refreshToken });
   }
}

