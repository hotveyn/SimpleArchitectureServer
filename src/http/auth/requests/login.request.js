import vine from "@vinejs/vine";
import {RequestValidator} from "../../../core/request.js";

export const LoginRequest = new RequestValidator({
    login: vine.string(),
    password: vine.string()
});
