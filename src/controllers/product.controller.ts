import { BaseController } from '../core/base.controller';
import { IBaseController } from '../core/IBase.controller';
import { Request, Response } from "express";
import { Product } from '../models/product.model';
import { ProductVariant } from '../models/productVariant.model';


export class ProductController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {

    }
    public async getOne(req: Request, res: Response): Promise<Response | void> {
    }
    public async create(req: Request, res: Response): Promise<Response | void> {
        const { name, category, manufacturer, series, shortDescription, description, specification, tags } = req.body;
        const { price, oldPrice, color, sku, quantity, thumbnailURL, thumbnailURLS } = req.body;

        if (await Product.findOne({name})) res.status(409).send('Product already exists.');

        const newProduct = new Product({
            name,
            category,
            manufacturer,
            series,
            short_description : shortDescription,
            description,
            specification,
            tags
        });

        try {
            await newProduct.save();
        } catch (e) {
            return res.status(500).send(e);
        }

        const newProductVariant = new ProductVariant({
            product: newProduct._id,
            price,
            oldPrice,
            color,
            sku,
            quantity,
            thumbnail_url: thumbnailURL,
            preview_thumbnail_urls: thumbnailURLS
        });

        try {
            await newProductVariant.save()
        } catch (e) {
            return res.status(500).send(e);
        }

        return res.status(200).send(newProduct);
    }
    public async update(req: Request, res: Response): Promise<Response | void> {
    }
    public async delete(req: Request, res: Response): Promise<Response | void> {
    }
}
