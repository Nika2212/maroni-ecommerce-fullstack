import jwt from 'jsonwebtoken';

export function jwtGenerateHelper(_id: string, email: string): string {
    return jwt.sign({ _id, email }, process.env.SERVER_KEY);
}
