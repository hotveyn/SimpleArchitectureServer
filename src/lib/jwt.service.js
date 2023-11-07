import { SignJWT } from "jose";

export class JWTService {
	alg = 'HS256'

	constructor(secret = process.env.JWT_SECRET || '1234') {
		this.secret = secret;
	}


	async signUserAuthToken(payload) {
		const encodedSecret = new TextEncoder().encode(this.secret)
		return await new SignJWT(payload)
			.setProtectedHeader({ alg: this.alg })
			.setIssuedAt()
			.setIssuer('server')
			.setAudience('auth:user')
			.setExpirationTime('60d')
			.sign(encodedSecret)
	}
}