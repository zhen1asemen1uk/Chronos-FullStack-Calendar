const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const userModel = require('../../models/userModel');

module.exports = function () {
	return async function (req, res, next) {
		try {
			if (req.cookies.refreshToken) {
				//decoded login from cookies
				const { refreshToken } = req.cookies;
				const decodedToken = jwt.verify(
					refreshToken,
					JWT_REFRESH_SECRET
				);

				const user_id = req.params.user_id;
				const userForChange = await userModel.getUserByID(user_id);
				console.log(userForChange);
				if (userForChange) {
					if (decodedToken.login == userForChange.login) {
						return next();
					}
					return res.send(
						`You can't delete/update ${userForChange.login}!`
					);
				} else {
					return res.send(`Uncorrect user id`);
				}
			} else {
				return res.send(`Login please`);
			}
		} catch (error) {
			console.error(error);
			res.send(error);
		}
	};
};
