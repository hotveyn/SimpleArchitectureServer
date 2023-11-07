import {ApiError} from "../lib/api-error.service.js";

export function endOfTimesMiddleware(data, req, res, next) {
    if (data instanceof ApiError) {
        return res.status(data.code).json({
            code: data.code,
            success: false,
            message: data.message
        });
    }

    if (data instanceof Error) {
        return res.status(500).json({
            code: data.code,
            success: false,
            message: "Internal server error"
        });
    }

    res.status(data.code).json(data);
}