import { BaseController } from "../core/base.controller";
import { IBaseController } from "../core/IBase.controller";
import { Request, Response } from "express";
import { Category } from "../models/category.model";
import { Manufacturer } from "../models/manufacturer.model";
import { Series } from "../models/series.model";

export class CategoryController extends BaseController implements IBaseController {
    public index(req: Request, res: Response): Response | Promise<Response> | void {}
    public create(req: Request, res: Response): Response | Promise<Response> | void {}
    public update(req: Request, res: Response): Response | Promise<Response> | void {}
    public show(req: Request, res: Response): Response | Promise<Response> | void {}
    public store(req: Request, res: Response): Response | Promise<Response> | void {}
    public edit(req: Request, res: Response): Response | Promise<Response> | void {}
    public destroy(req: Request, res: Response): Response | Promise<Response> | void {}

    public async createCategory(req: Request, res: Response): Promise<Response | void> {
        const { name, slug, content } = req.body;
        // Validate Request Body
        // Check For Existence
        const newCategory = new Category({
            name,
            slug,
            content
        });
        await newCategory.save();
        res.status(200).send({
            _id: newCategory._id,
            name: newCategory.get('name'),
            slug: newCategory.get('slug'),
            content: newCategory.get('content'),
            status: newCategory.get('status'),
            trash: newCategory.get('trash'),
            views: newCategory.get('views'),
            timestamp: newCategory.get('timestamp')
        });
    }
    public async getCategories(req: Request, res: Response): Promise<Response | void> {
        res.status(200).send(
            await Category.find({}).exec()
        );
    }
    public async updateCategory(req: Request, res: Response): Promise<Response | void> {}
    public async removeCategory(req: Request, res: Response): Promise<Response | void> {
        const categoryId = req.params.categoryId;
        const category = await Category.findById(categoryId);

        if (category) {
            category.remove();
            res.status(200).send('Category Removed.')
        } else {
            res.status(404).send('Category not found.')
        }
    }
}
