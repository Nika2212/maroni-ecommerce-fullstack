import {BaseController} from "../core/base.controller";
import {IBaseController} from "../core/IBase.controller";
import {Request, Response} from "express";
import {Category} from "../models/category.model";
import {Manufacturer} from "../models/manufacturer.model";
import {Series} from "../models/series.model";

export class ManufacturerController extends BaseController implements IBaseController {
    public index(req: Request, res: Response): Response | Promise<Response> | void {}
    public create(req: Request, res: Response): Response | Promise<Response> | void {}
    public update(req: Request, res: Response): Response | Promise<Response> | void {}
    public show(req: Request, res: Response): Response | Promise<Response> | void {}
    public store(req: Request, res: Response): Response | Promise<Response> | void {}
    public edit(req: Request, res: Response): Response | Promise<Response> | void {}
    public destroy(req: Request, res: Response): Response | Promise<Response> | void {}

    public async getManufacturers(req: Request, res: Response): Promise<Response | void> {
        res.status(200).send(await Manufacturer.find({}).exec());
    }
    public async createManufacturer(req: Request, res: Response): Promise<Response | void> {
        const { name, slug, content } = req.body;
        // Validate Request Body
        // Check For Existence
        const newManufacturer = new Manufacturer({
            name,
            slug,
            content
        });
        await newManufacturer.save();
        res.status(200).send({
            _id: newManufacturer._id,
            name: newManufacturer.get('name'),
            slug: newManufacturer.get('slug'),
            content: newManufacturer.get('content'),
            status: newManufacturer.get('status'),
            trash: newManufacturer.get('trash'),
            views: newManufacturer.get('views'),
            timestamp: newManufacturer.get('timestamp')
        });
    }
    public async updateManufacturer(req: Request, res: Response): Promise<Response | void> {}
    public async removeManufacturer(req: Request, res: Response): Promise<Response | void> {
        const manufacturerId = req.params.manufaturerId;
        const manufacturer = Manufacturer.findById(manufacturerId);

        if (manufacturer) {
            manufacturer.remove();
            res.status(200).send('Category Removed.')
        } else {
            res.status(404).send('Category not found.')
        }
    }
    public async appendManufacturerToCategory(req: Request, res: Response): Promise<Response | void> {
        const categoryId = req.body.categoryId;
        const manufacturerId = req.body.manufacturerId;
        const manufacturer = await Manufacturer.findByIdAndUpdate({_id: manufacturerId}, {"$push" : {"category_list" : categoryId}});

        await manufacturer.save();

        res.status(200).send({
            _id: manufacturer._id,
            slug: manufacturer.get('slug'),
            content: manufacturer.get('content'),
            status: manufacturer.get('status'),
            trash: manufacturer.get('trash'),
            views: manufacturer.get('views'),
            category_list: manufacturer.get('category_list'),
            timestamp: manufacturer.get('timestamp')
        });
    }
    public async getManufacturerListByCategory(req: Request, res: Response): Promise<Response | void> {
        const categoryId = req.params.categoryId;
        const manufacturers = await Manufacturer.find({category_list: categoryId});

        res.status(200).send(manufacturers);
    }
    public async getManufacturerCategoryList(req: Request, res: Response): Promise<Response | void> {
        const manufacturerId = req.params.manufacturerId;
        const categories = await Manufacturer.findById(manufacturerId).populate('category_list');

        res.status(200).send(categories);
    }
}
