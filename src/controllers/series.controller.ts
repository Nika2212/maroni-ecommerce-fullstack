import {BaseController} from "../core/base.controller";
import {IBaseController} from "../core/IBase.controller";
import {Request, Response} from "express";
import {Category} from "../models/category.model";
import {Manufacturer} from "../models/manufacturer.model";
import {Series} from "../models/series.model";

export class SeriesController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {
        const seriesArray = await Series.find({}).exec();

        res.status(200).send(seriesArray);
    }
    public async getOne(req: Request, res: Response): Promise<Response | void> {
        const seriesName = req.params.seriesName;

        try {
            const seriesItem = await Series.findOne({name: seriesName});

            return res.status(200).send(seriesItem);
        } catch (e) {
            return res.status(404).send('Series not found.');
        }
    }
    public async create(req: Request, res: Response): Promise<Response | void> {
        const { name, slug, content, category, manufacturer } = req.body;

        // TODO New series fields validation
        if (await Series.findOne({name})) {
            res.status(409).send('Series already exists.');
        }

        const newSeries = new Series({
            name,
            slug,
            content,
            manufacturer,
            category
        });

        try {
            await newSeries.save();

            return res.status(200).send(newSeries);
        } catch (e) {
            return res.status(500).send(e);
        }
    }
    public async update(req: Request, res: Response): Promise<Response | void> {
        const seriesID = req.params.seriesID;
        const seriesBody = req.body;

        // TODO Validate category fields

        if (!await Series.findById(seriesID)) res.status(404).send('Series not found');

        delete seriesBody.views;
        delete seriesBody.items;
        delete seriesBody.timestamp;

        try {
            await Series.findByIdAndUpdate(seriesID, seriesBody);

            res.status(200).send(await Series.findById(seriesID));
        } catch (e) {
            res.status(500).send(e);
        }
    }
    public async delete(req: Request, res: Response): Promise<Response | void> {
        const seriesID = req.params.seriesID;

        try {
            await Manufacturer.findByIdAndRemove(seriesID);

            res.status(200).send('Series removed successfully')
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
