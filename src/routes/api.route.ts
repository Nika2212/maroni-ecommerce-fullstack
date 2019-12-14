import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ApiRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/api/admin/category/create').post(this.categoryController.create.bind(this));

        return this;
    }
}
