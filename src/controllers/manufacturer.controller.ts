import {BaseController} from "../core/base.controller";
import {IBaseController} from "../core/IBase.controller";
import {Request, Response} from "express";
import {Category} from "../models/category.model";
import {Manufacturer} from "../models/manufacturer.model";
import {Series} from "../models/series.model";

export class ManufacturerController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {
        const manufacturerArray = await Manufacturer.find({}).exec();

        res.status(200).send(manufacturerArray);
    }
    public async getOne(req: Request, res: Response): Promise<Response | void> {
        const manufacturerName = req.params.manufacturerName;

        try {
            const manufacturerItem = await Manufacturer.findOne({name: manufacturerName});

            return res.status(200).send(manufacturerItem);
        } catch (e) {
            return res.status(404).send('Manufacturer not found.');
        }
    }
    public async create(req: Request, res: Response): Promise<Response | void> {
        const { name, slug, content, categories, logoURL } = req.body;

        // TODO New manufacturer fields validation
        if (await Manufacturer.findOne({name})) {
            res.status(409).send('Manufacturer already exists.');
        }

        const newManufacturer = new Manufacturer({
            name,
            slug,
            content,
            category_list: categories,
            logo_url: logoURL
        });

        try {
            await newManufacturer.save();

            return res.status(200).send(newManufacturer);
        } catch (e) {
            return res.status(500).send(e);
        }
    }
    public async update(req: Request, res: Response): Promise<Response | void> {
        const manufacturerID = req.params.manufacturerID;
        const manufacturerBody = req.body;

        if (!await Manufacturer.findById(manufacturerID)) res.status(404).send('Manufacturer not found');

        delete manufacturerBody.views;
        delete manufacturerBody.timestamp;

        try {
            await Manufacturer.findByIdAndUpdate(manufacturerID, manufacturerBody);

            res.status(200).send(await Manufacturer.findById(manufacturerID));
        } catch (e) {
            res.status(500).send(e);
        }
    }
    public async delete(req: Request, res: Response): Promise<Response | void> {
        const manufacturerID = req.params.manufacturerID;

        try {
            await Manufacturer.findByIdAndRemove(manufacturerID);

            res.status(200).send('Manufacturer removed successfully')
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
