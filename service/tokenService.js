const tokenController = require(`../controllers/tokenController`);
require('dotenv').config();

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const jwt = require('jsonwebtoken');

class TokenService {
	constructor() {}

	generationToken(id, login, email, status, verify, avatar) {
		try {
			const payload = {
				id,
				login,
				email,
				status,
				verify,
				avatar,
			};

			const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
				expiresIn: '30m',
			});
			const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
				expiresIn: '30d',
			});

			return {
				accessToken,
				refreshToken,
			};
		} catch (error) {
			console.error(error);
		}
	}

	async validateAccessToken(accessToken) {
		try {
			const userData = jwt.verify(accessToken, JWT_ACCESS_SECRET);

			return userData;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async vadateRefreshToken(refreshToken) {
		try {
			const userData = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
			return userData;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async saveToken(id, refToken) {
		try {
			const tokenData = await tokenController.getTokenByID(id);

			if (tokenData.length > 0) {
				return await tokenController.refreshToken(id, refToken);
			}

			return await tokenController.save(id, refToken);
		} catch (error) {
			console.error(error);
		}
	}

	async removeToken(refreshToken) {
		return await tokenController.delete(refreshToken);
	}
}

module.exports = new TokenService();
