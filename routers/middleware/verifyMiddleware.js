const userController = require('../../controllers/userController');

module.exports = function () {
	return async function (req, res, next) {
		try {
			if (!req.body.login) {
				return res.send(`Error empty login!`);
			}
			const login = req.body.login;
			let user = await userController.checkVerifyUser(login);

			if (user && user.verify === true) {
				return next();
			}

			return res.send(`Login email or password incorrect`);
		} catch (error) {
			console.error(error);
			res.send(`Error verify middlewear!`);
		}
	};
};
