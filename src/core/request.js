import vine from "@vinejs/vine";

export class RequestValidator {
    schema;

    constructor(schema) {
        this.schema = schema;
        return this.validate.bind(this)
    }

    async validate(req, res, next) {
        try {
            const output = await vine.validate({
                schema: vine.object(this.schema),
                data: req.body
            })

            next()
        } catch (e) {
            res.status(400).json({
                code: 400,
                success: false,
                message: "Validation failed",
                errors: e.messages
            });
        }
    }
}