import express from 'express';
import { HomeController } from "../controllers/home.controller";
import { CategoryController } from '../controllers/category.controller';

export class BaseRoute {
    protected homeController: HomeController;
    protected categoryController: CategoryController;

    constructor(protected express: express.Application) {
        this.homeController = new HomeController();
        this.categoryController = new CategoryController();
    }
}
