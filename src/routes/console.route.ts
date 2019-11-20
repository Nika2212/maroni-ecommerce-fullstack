import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ConsoleRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        return this;
    }
}
