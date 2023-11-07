export class ResponseService {
	
	static success(data) {
		return {
			code: 200,
			success: true,
			data
		}
	}
	static created(data) {
		return {
			code: 201,
			success: true,
			data
		}
	}
}
