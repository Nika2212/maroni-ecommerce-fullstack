import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ApiRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/api/admin/category/create').post(this.categoryController.create.bind(this));
        this.express.route('/api/admin/category/get/:id').get(this.categoryController.getOne.bind(this));
        this.express.route('/api/admin/category/get').get(this.categoryController.get.bind(this));
        this.express.route('/api/admin/category/update/:id').put(this.categoryController.update.bind(this));
        this.express.route('/api/admin/category/delete/:id').delete(this.categoryController.delete.bind(this));

        this.express.route('/api/admin/manufacturer/create').post(this.manufacturerController.create.bind(this));
        this.express.route('/api/admin/manufacturer/get/:id').get(this.manufacturerController.getOne.bind(this));
        this.express.route('/api/admin/manufacturer/get').get(this.manufacturerController.get.bind(this));
        this.express.route('/api/admin/manufacturer/update/:id').put(this.manufacturerController.update.bind(this));
        this.express.route('/api/admin/manufacturer/delete/:id').delete(this.manufacturerController.delete.bind(this));

        this.express.route('/api/admin/series/create').post(this.seriesController.create.bind(this));
        this.express.route('/api/admin/series/get/:id').get(this.seriesController.getOne.bind(this));
        this.express.route('/api/admin/series/get').get(this.seriesController.get.bind(this));
        this.express.route('/api/admin/series/update/:id').put(this.seriesController.update.bind(this));
        this.express.route('/api/admin/series/delete/:id').delete(this.seriesController.delete.bind(this));

        return this;
    }
}
