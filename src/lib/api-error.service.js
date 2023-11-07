
export class ApiError extends Error{

    constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message;
    }

    static forbidden(){
        return new ApiError(403, "Forbidden")
    }

    static unauthorized(){
        return new ApiError(401, "Unauthorized")
    }
}