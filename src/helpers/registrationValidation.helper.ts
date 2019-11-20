import Joi from 'joi';

export function registrationValidationHelper(user: any): any {
    const schema = {
        name: Joi.string().min(4).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    };

    return Joi.validate(user, schema);
}
