import Joi from 'joi';

export function categoryValidationHelper(user: any): any {
    const schema = {
        name: Joi.string().min(4).max(255).required(),
        slug: Joi.string().min(4).max(255),
        content: Joi.string().min(4).max(255),
    };

    return Joi.validate(user, schema);
}
