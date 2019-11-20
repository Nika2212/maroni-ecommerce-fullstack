import Joi from 'joi';

export function loginValidationHelper(user: any): any {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    };

    return Joi.validate(user, schema);
}
