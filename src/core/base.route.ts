import express from 'express';
import { HomeController } from "../controllers/home.controller";
import { UserController } from "../controllers/user.controller";
import {CategoryController} from "../controllers/category.controller";

export class BaseRoute {
    protected homeController: HomeController;
    protected categoryController: CategoryController;
    protected userController: UserController;

    constructor(protected express: express.Application) {
        this.homeController = new HomeController();
        this.categoryController = new CategoryController();
        this.userController = new UserController();
    }
}
