import { RequestValidator } from "../../../core/request.js";
import vine from "@vinejs/vine";


export const RegistrationRequest = new RequestValidator({
	login: vine.string(),
	password: vine.string()
})
