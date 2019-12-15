import express from 'express';
import { HomeController } from "../controllers/home.controller";
import { CategoryController } from '../controllers/category.controller';
import { ManufacturerController } from '../controllers/manufacturer.controller';
import { SeriesController } from '../controllers/series.controller';

export class BaseRoute {
    protected homeController: HomeController;
    protected categoryController: CategoryController;
    protected manufacturerController: ManufacturerController;
    protected seriesController: SeriesController;

    constructor(protected express: express.Application) {
        this.homeController = new HomeController();
        this.categoryController = new CategoryController();
        this.manufacturerController = new ManufacturerController();
        this.seriesController = new SeriesController();
    }
}
