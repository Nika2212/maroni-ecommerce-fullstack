import { BaseController } from '../core/base.controller';
import { IBaseController } from '../core/IBase.controller';
import { Request, Response } from 'express';
import { Category } from '../models/category.model';
import { Document } from 'mongoose';

export class CategoryController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {}
    public async getOne(req: Request, res: Response): Promise<Response | void> {}
    public async create(req: Request, res: Response): Promise<Response | void> {
        // TODO Validation request body
        Category.createCategory(req.body)
            .then((category: Document) => res.status(200).send(category))
            .catch(e => res.status(409).send(e.message));
    }
    public async update(req: Request, res: Response): Promise<Response | void> {}
    public async delete(req: Request, res: Response): Promise<Response | void> {}
}
