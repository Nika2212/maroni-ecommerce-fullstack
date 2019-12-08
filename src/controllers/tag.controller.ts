import {BaseController} from "../core/base.controller";
import {IBaseController} from "../core/IBase.controller";
import {Request, Response} from "express";

export class TagController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {}
    public async getOne(req: Request, res: Response): Promise<Response | void> {}
    public async create(req: Request, res: Response): Promise<Response | void> {}
    public async update(req: Request, res: Response): Promise<Response | void> {}
    public async delete(req: Request, res: Response): Promise<Response | void> {}
}
