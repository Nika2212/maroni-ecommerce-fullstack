import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ApiRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        // Category Resource Routes
        this.express.route('/api/admin/category/get').get(this.categoryController.get.bind(this));
        this.express.route('/api/admin/category/get/:categoryName').get(this.categoryController.getOne.bind(this));
        this.express.route('/api/admin/category/create').post(this.categoryController.create.bind(this));
        this.express.route('/api/admin/category/update/:categoryID').put(this.categoryController.update.bind(this));
        this.express.route('/api/admin/category/delete/:categoryID').put(this.categoryController.delete.bind(this));
        // Manufacturer Resource Routes
        this.express.route('/api/admin/manufacturer/get').get(this.manufacturerController.get.bind(this));
        this.express.route('/api/admin/manufacturer/get/:manufacturerName').get(this.manufacturerController.getOne.bind(this));
        this.express.route('/api/admin/manufacturer/create').post(this.manufacturerController.create.bind(this));
        this.express.route('/api/admin/manufacturer/update/:manufacturerID').put(this.manufacturerController.update.bind(this));
        this.express.route('/api/admin/manufacturer/delete/:manufacturerID').delete(this.manufacturerController.delete.bind(this));
        // Series Resource Routes
        this.express.route('/api/admin/series/get').get(this.seriesController.get.bind(this));
        this.express.route('/api/admin/series/get/:seriesName').get(this.seriesController.getOne.bind(this));
        this.express.route('/api/admin/series/create').post(this.seriesController.create.bind(this));
        this.express.route('/api/admin/series/update/:seriesID').put(this.seriesController.update.bind(this));
        this.express.route('/api/admin/series/delete/:seriesID').delete(this.seriesController.delete.bind(this));

        return this;
    }
}
