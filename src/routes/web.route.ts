import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class WebRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/').get(this.homeController.getHomePage.bind(this));
        this.express.route('/categories').get(this.homeController.getCategoriesPage.bind(this));
        this.express.route('/categories/:categoryName').get(this.homeController.getCategoryPage.bind(this));
        this.express.route('/:productName').get(this.homeController.getProductPage.bind(this));
        this.express.route('/:productName').get(this.homeController.getProductPage.bind(this));
        this.express.route('/wishlist').get(this.homeController.getWishlistPage.bind(this));
        this.express.route('/cart').get(this.homeController.getCartPage.bind(this));
        this.express.route('/compare').get(this.homeController.getComparePage.bind(this));
        this.express.route('/checkout').get(this.homeController.getCheckoutPage.bind(this));
        this.express.route('/search/:keyword').get(this.homeController.getSearchPage.bind(this));
        this.express.route('/login').get(this.homeController.getLoginPage.bind(this));
        this.express.route('/registration').get(this.homeController.getRegistrationPage.bind(this));
        this.express.route('/contact').get(this.homeController.getContactPage.bind(this));
        this.express.route('/404').get(this.homeController.get404Page.bind(this));

        return this;
    }
}
