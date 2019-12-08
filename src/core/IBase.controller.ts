import { Request, Response } from 'express';

export interface IBaseController {
    get(req: Request, res: Response): Promise<Response | void>
    getOne(req: Request, res: Response): Promise<Response | void>
    create(req: Request, res: Response): Promise<Response | void>
    update(req: Request, res: Response): Promise<Response | void>
    delete(req: Request, res: Response): Promise<Response | void>
}
