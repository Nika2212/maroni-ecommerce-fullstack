import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function authenticationMiddleware(req: Request, res: Response, next: Function) {
    const token: string = <string>req.headers['X-Access-Token'];

    if (!token) res.status(401).send('Access denied, no token provided.');

    try {
        // @ts-ignore
        req['user'] = jwt.verify(token, process.env.SERVER_KEY);
        next();
    } catch (e) {
        res.status(400).send('Invalid token.')
    }
}
