import {BaseController} from "../core/base.controller";
import {IBaseController} from "../core/IBase.controller";
import {Request, Response} from "express";
import {Category} from "../models/category.model";
import {Manufacturer} from "../models/manufacturer.model";
import {Series} from "../models/series.model";

export class SeriesController extends BaseController implements IBaseController {
    public index(req: Request, res: Response): Response | Promise<Response> | void {}
    public create(req: Request, res: Response): Response | Promise<Response> | void {}
    public update(req: Request, res: Response): Response | Promise<Response> | void {}
    public show(req: Request, res: Response): Response | Promise<Response> | void {}
    public store(req: Request, res: Response): Response | Promise<Response> | void {}
    public edit(req: Request, res: Response): Response | Promise<Response> | void {}
    public destroy(req: Request, res: Response): Response | Promise<Response> | void {}

    public async createSeries(req: Request, res: Response): Promise<Response | void> {
        const { name, slug, content, manufacturerId, categoryId } = req.body;
        // Validate Request Body
        // Check For Existence Manufacturer & Category If Appends
        const category = await Category.findById(categoryId).exec();
        const manufacturer = await Manufacturer.findById(manufacturerId).exec();
        console.log(category, manufacturer);
        const newSeries = new Series({
            name,
            slug,
            content,
            category: category._id,
            manufacturer: manufacturer._id,
        });
        await newSeries.save();
        res.status(200).send({
            _id: newSeries._id,
            name: newSeries.get('name'),
            slug: newSeries.get('slug'),
            content: newSeries.get('content'),
            views: newSeries.get('views'),
            trash: newSeries.get('trash'),
            items: newSeries.get('items'),
            manufacturer: newSeries.get('manufacturer'),
            category: newSeries.get('category'),
            timestamp: newSeries.get('timestamp')
        });
    }
    public async appendSeriesToManufacturer(req: Request, res: Response): Promise<Response | void> {}
    public async appendSeriesToCategory(req: Request, res: Response): Promise<Response | void> {}
    public async getSeries(req: Request, res: Response): Promise<Response | void> {}
    public async updateSeries(req: Request, res: Response): Promise<Response | void> {}
    public async removeSeries(req: Request, res: Response): Promise<Response | void> {
        const seriesId = req.params.manufaturerId;
        const series = Manufacturer.findById(seriesId);

        if (series) {
            series.remove();
            res.status(200).send('Category Removed.')
        } else {
            res.status(404).send('Category not found.')
        }
    }
}
