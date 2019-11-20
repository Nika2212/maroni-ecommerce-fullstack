import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ApiRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/admin/category/create').post(this.categoryController.createCategory.bind(this));
        this.express.route('/admin/category/manufacturer/create').post(this.categoryController.createManufacturer.bind(this));
        this.express.route('/admin/category/series/create').post(this.categoryController.createSeries.bind(this));
        this.express.route('/admin/category/append/mtc').post(this.categoryController.appendManufacturerToCategory.bind(this));
        this.express.route('/admin/category/append/stm').post(this.categoryController.appendSeriesToManufacturer.bind(this));
        this.express.route('/admin/category/append/stc').post(this.categoryController.appendSeriesToCategory.bind(this));
        this.express.route('/admin/category/get/manufacturer/:categoryId').get(this.categoryController.getManufacturerListByCategory.bind(this));
        this.express.route('/admin/category/get/category/:manufacturerId').get(this.categoryController.getManufacturerCategoryList.bind(this));

        return this;
    }
}
