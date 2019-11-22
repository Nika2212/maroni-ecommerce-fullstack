import express from 'express';
import { HomeController } from "../controllers/home.controller";
import { UserController } from "../controllers/user.controller";
import {CategoryController} from "../controllers/category.controller";
import {ManufacturerController} from "../controllers/manufacturer.controller";
import {SeriesController} from "../controllers/series.controller";
import {TagController} from "../controllers/tag.controller";

export class BaseRoute {
    protected homeController: HomeController;
    protected categoryController: CategoryController;
    protected userController: UserController;
    protected manufacturerController: ManufacturerController;
    protected seriesController: SeriesController;
    protected tagController: TagController;

    constructor(protected express: express.Application) {
        this.homeController = new HomeController();
        this.categoryController = new CategoryController();
        this.userController = new UserController();
        this.manufacturerController = new ManufacturerController();
        this.seriesController = new SeriesController();
        this.tagController = new TagController();
    }
}
