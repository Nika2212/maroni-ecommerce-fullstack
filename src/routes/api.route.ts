import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ApiRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/admin/category/get').get(this.categoryController.getCategories.bind(this));
        this.express.route('/admin/category/create').post(this.categoryController.createCategory.bind(this));
        this.express.route('/admin/category/update/:categoryId').post(this.categoryController.updateCategory.bind(this));
        this.express.route('/admin/category/remove/:categoryId').post(this.categoryController.removeCategory.bind(this));
        this.express.route('/admin/manufacturer/get').get(this.manufacturerController.getManufacturers.bind(this));
        this.express.route('/admin/manufacturer/get/manufacturer/:categoryId').get(this.manufacturerController.getManufacturerListByCategory.bind(this));
        this.express.route('/admin/manufacturer/get/category/:manufacturerId').get(this.manufacturerController.getManufacturerCategoryList.bind(this));
        this.express.route('/admin/manufacturer/create').post(this.manufacturerController.createManufacturer.bind(this));
        this.express.route('/admin/manufacturer/update/:manufacturerId').post(this.manufacturerController.updateManufacturer.bind(this));
        this.express.route('/admin/manufacturer/remove/:manufacturerId').post(this.manufacturerController.removeManufacturer.bind(this));
        this.express.route('/admin/manufacturer/append/category').post(this.manufacturerController.appendManufacturerToCategory.bind(this));
        this.express.route('/admin/series/get').get(this.seriesController.getSeries.bind(this));
        this.express.route('/admin/series/create').post(this.seriesController.createSeries.bind(this));
        this.express.route('/admin/series/update/:seriesId').post(this.seriesController.updateSeries.bind(this));
        this.express.route('/admin/series/remove/:seriesId').post(this.seriesController.removeSeries.bind(this));
        this.express.route('/admin/series/append/category').get(this.seriesController.appendSeriesToCategory.bind(this));
        this.express.route('/admin/series/append/manufacturer').get(this.seriesController.appendSeriesToManufacturer.bind(this));
        this.express.route('/admin/tag/get').get(this.tagController.getTags.bind(this));
        this.express.route('/admin/tag/create').get(this.tagController.createTag.bind(this));
        this.express.route('/admin/tag/update/:tagId').get(this.tagController.updateTag.bind(this));
        this.express.route('/admin/tag/remove/:tagId').get(this.tagController.removeTag.bind(this));

        return this;
    }
}
