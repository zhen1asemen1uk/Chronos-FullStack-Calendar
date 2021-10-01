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
      const user = await userSchema.findOne({ _id: user_id });
      user.tokens.refreshToken = refTok;

      return user.save();
   }

   , async save(user_id, refTok) {
      const user = await userSchema.findOne({ _id: user_id });
      user.tokens.refreshToken = refTok;

      return user.save();
   }

   , async delete(refreshToken) {
      return await userSchema.findOneAndUpdate({
         tokens: { refreshToken: refreshToken }
      }, {
         $set: { tokens: { refreshToken: "" } }
      });
   }

   , async getTokenAllInfo(refreshToken) {
      return await userSchema.findOne({ refreshToken: refreshToken });
   }
}

