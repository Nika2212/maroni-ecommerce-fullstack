import { Request, Response } from 'express';

export interface IBaseController {
    index(req: Request, res: Response): Response | Promise<Response> | void;
    create(req: Request, res: Response): Response | Promise<Response> | void;
    store(req: Request, res: Response): Response | Promise<Response> | void;
    show(req: Request, res: Response): Response | Promise<Response> | void;
    edit(req: Request, res: Response): Response | Promise<Response> | void;
    update(req: Request, res: Response): Response | Promise<Response> | void;
    destroy(req: Request, res: Response): Response | Promise<Response> | void;
}
