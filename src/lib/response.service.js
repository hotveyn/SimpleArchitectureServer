export class ResponseService {
	
	static success(data) {
		return {
			code: 200,
			success: true,
			data
		}
	}
}
