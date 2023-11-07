
export class ApiError extends Error{

    constructor(code, error) {
        super(error);
        this.code = code;
        this.error = error;
        this.success = false;
    }

    static forbidden(){
        return new ApiError(403, "Forbidden")
    }

    static unauthorized(){
        return new ApiError(401, "Unauthorized")
    }
    
    static internal(){
        return new ApiError(500, "Internal server error")
    }
    
    static notFound(){
        return new ApiError(404, "Not Found", false)
    }
}
