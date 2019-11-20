import { BaseController } from "../core/base.controller";
import { IBaseController } from "../core/IBase.controller";
import { Request, Response } from 'express';

export class UserController extends BaseController implements IBaseController {
    public index(req: Request, res: Response): Response | Promise<Response> | void {}
    public create(req: Request, res: Response): Response | Promise<Response> | void {}
    public update(req: Request, res: Response): Response | Promise<Response> | void {}
    public show(req: Request, res: Response): Response | Promise<Response> | void {}
    public store(req: Request, res: Response): Response | Promise<Response> | void {}
    public edit(req: Request, res: Response): Response | Promise<Response> | void {}
    public destroy(req: Request, res: Response): Response | Promise<Response> | void {}
}
