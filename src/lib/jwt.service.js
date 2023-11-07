import { SignJWT, jwtVerify } from "jose";

export class JWTService {
	alg = 'HS256'
	secret;
	encodedSecret;
	
	constructor(secret = process.env.JWT_SECRET || '1234') {
		this.secret = secret;
		this.encodedSecret = new TextEncoder().encode(this.secret);
	}
	
	
	async signUserAuthToken(payload) {
		return await new SignJWT(payload)
			.setProtectedHeader({ alg: this.alg })
			.setIssuedAt()
			.setIssuer('server')
			.setAudience('auth:user')
			.setExpirationTime('60d')
			.sign(this.encodedSecret)
	}
	
	async verifyUserAuthToken(jwt) {
		return await jwtVerify(jwt, this.encodedSecret, {
			issuer: 'server',
			audience: 'auth:user'
		})
	}
}
