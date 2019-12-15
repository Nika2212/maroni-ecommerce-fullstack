import { BaseController } from '../core/base.controller';
import { IBaseController } from '../core/IBase.controller';
import { Request, Response } from 'express';
import { Manufacturer } from '../models/manufacturer.model';
import { Document } from 'mongoose';

export class ManufacturerController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {
        Manufacturer.readList()
            .then((manufacturer: Document[]) => res.status(200).send(manufacturer))
            .catch(e => res.status(500).send(e.message));
    }
    public async getOne(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate manufacturer params
        Manufacturer.read(req.params.id)
            .then((manufacturer: Document) => res.status(200).send(manufacturer))
            .catch(e => res.status(500).send(e.message));
    }
    public async create(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate manufacturer body
        Manufacturer.create(req.body as Manufacturer)
            .then((manufacturer: Document) => res.status(200).send(manufacturer))
            .catch(e => res.status(409).send(e.message));
    }
    public async update(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate manufacturer body
        Manufacturer.update(req.params._id, req.body as Manufacturer)
            .then((manufacturer: Document) => res.status(200).send(manufacturer))
            .catch(e => res.status(500).send(e.message));
    }
    public async delete(req: Request, res: Response): Promise<Response | void> {
        // TODO Validate manufacturer params
        Manufacturer.delete(req.params.id)
            .then((manufacturer: Document) => res.status(200).send(manufacturer))
            .catch(e => res.status(404).send(e.message));
    }
}
