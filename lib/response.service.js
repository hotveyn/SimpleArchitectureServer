export class ResponseService {
	
	static success(res, data) {
		res.json({
			success: true,
			code: 200,
			data
		})
	}
}
