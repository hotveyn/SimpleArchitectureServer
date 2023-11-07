import { JWTService } from "../lib/jwt.service.js";
import { ApiError } from "../lib/api-error.service.js";

export async function userAuthMiddleware(req, res, next) {
	const authHeaders = req.headers
	
	if (!authHeaders.authorization) return res.status(401).json(unauthorizedBody)
	
	
	const splitedAuthHeader = authHeaders.authorization.split(' ')
	
	const bearer = splitedAuthHeader[0]
	const token = splitedAuthHeader[1]
	
	if (bearer !== "Bearer" && !token) return res.status(401).json(ApiError.unauthorized())
	
	const jwtService = new JWTService();
	
	try {
		const { payload, protectedHeader } = await jwtService.verifyUserAuthToken(token);
		req.user = {
			id: payload.id,
			login: payload.login
		}
	} catch (e) {
		return res.status(401).json(ApiError.unauthorized())
	}
	
	next()
}

const unauthorizedBody = {
	code: 401,
	success: false,
	message: "Unauthorized"
}
