import { BaseController } from '../core/base.controller';
import { IBaseController } from '../core/IBase.controller';
import { Request, Response } from 'express';
import { Category } from '../models/category.model';
import { Document } from 'mongoose';

export class CategoryController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {
        Category.readList()
            .then((category: Document[]) => res.status(200).send(category))
            .catch(e => res.status(500).send(e.message));
    }
    public async getOne(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate category params
        Category.read(req.params.id)
            .then((category: Document) => res.status(200).send(category))
            .catch(e => res.status(500).send(e.message));
    }
    public async create(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate category body
        Category.create(req.body as Category)
            .then((category: Document) => res.status(200).send(category))
            .catch(e => res.status(409).send(e.message));
    }
    public async update(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate category body
        Category.update(req.params.id, req.body as Category)
            .then(() => Category.read(req.params.id).then((category: Document) => res.status(200).send(category)))
            .catch(e => res.status(500).send(e.message));
    }
    public async delete(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate category params
        Category.delete(req.params.id)
            .then((category: Document) => res.status(200).send(category))
            .catch(e => res.status(404).send(e.message));
    }
}
