import { BaseController } from '../core/base.controller';
import { IBaseController } from '../core/IBase.controller';
import { Request, Response } from 'express';
import { Series } from '../models/Series.model';
import { Document } from 'mongoose';

export class SeriesController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {
        Series.readList()
            .then((Series: Document[]) => res.status(200).send(Series))
            .catch(e => res.status(500).send(e.message));
    }
    public async getOne(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate Series params
        Series.read(req.params.id)
            .then((Series: Document) => res.status(200).send(Series))
            .catch(e => res.status(500).send(e.message));
    }
    public async create(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate Series body
        Series.create(req.body as Series)
            .then((Series: Document) => res.status(200).send(Series))
            .catch(e => res.status(409).send(e.message));
    }
    public async update(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate Series body
        Series.update(req.params._id, req.body as Series)
            .then((Series: Document) => res.status(200).send(Series))
            .catch(e => res.status(500).send(e.message));
    }
    public async delete(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate Series params
        Series.delete(req.params.id)
            .then((Series: Document) => res.status(200).send(Series))
            .catch(e => res.status(404).send(e.message));
    }
}
