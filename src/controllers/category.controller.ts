import { BaseController } from "../core/base.controller";
import { IBaseController } from "../core/IBase.controller";
import { Request, Response } from "express";
import { Category } from "../models/category.model";
import { Manufacturer } from "../models/manufacturer.model";
import { Series } from "../models/series.model";

export class CategoryController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {
        const categoryArray = await Category.find({}).exec();

        res.status(200).send(categoryArray);
    }
    public async getOne(req: Request, res: Response): Promise<Response | void> {
        const categoryName = req.params.categoryName;

        try {
            const categoryItem = await Category.findOne({name: categoryName});

            return res.status(200).send(categoryItem);
        } catch (e) {
            return res.status(404).send('Category not found.');
        }
    }
    public async create(req: Request, res: Response): Promise<Response | void> {
        const { name, slug, content } = req.body;

        // TODO New category fields validation
        if (await Category.findOne({name})) {
            res.status(409).send('Category already exists.');
        }

        const newCategory = new Category({
            name,
            slug,
            content
        });

        await newCategory.save();

        return res.status(200).send(newCategory);
    }
    public async update(req: Request, res: Response): Promise<Response | void> {
        const categoryID = req.params.categoryID;
        const categoryBody = req.body;

        // TODO Validate category fields

        if (!await Category.findById(categoryID)) res.status(404).send('Category not found');

        delete categoryBody.views;
        delete categoryBody.timestamp;

        try {
            await Category.findByIdAndUpdate(categoryID, categoryBody);

            res.status(200).send(await Category.findById(categoryID));
        } catch (e) {
            res.status(500).send(e);
        }
    }
    public async delete(req: Request, res: Response): Promise<Response | void> {
        const categoryID = req.params.categoryID;

        try {
            await Category.findByIdAndRemove(categoryID);

            res.status(200).send('Category removed successfully')
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
