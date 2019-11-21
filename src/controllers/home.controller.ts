import { BaseController } from "../core/base.controller";
import { IBaseController } from "../core/IBase.controller";
import { Request, Response } from 'express';

export class HomeController extends BaseController implements IBaseController {
    public index(req: Request, res: Response): Response | Promise<Response> | void {}
    public create(req: Request, res: Response): Response | Promise<Response> | void {}
    public update(req: Request, res: Response): Response | Promise<Response> | void {}
    public show(req: Request, res: Response): Response | Promise<Response> | void {}
    public store(req: Request, res: Response): Response | Promise<Response> | void {}
    public edit(req: Request, res: Response): Response | Promise<Response> | void {}
    public destroy(req: Request, res: Response): Response | Promise<Response> | void {}

    public getHomePage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Home Page');
    }
    public getCategoriesPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Categories Page');
    }
    public getCategoryPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Category Page');
    }
    public getProductPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Product Page');
    }
    public getWishlistPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Wishlist Page');
    }
    public getCartPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Cart Page');
    }
    public getCheckoutPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Checkout Page');
    }
    public getSearchPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Search Page');
    }
    public getComparePage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Compare Page');
    }
    public getLoginPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Login Page');
    }
    public getRegistrationPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Registration Page');
    }
    public getContactPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('Contact Page');
    }
    public get404Page(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).send('404 Page');
    }

    public getAdminPage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).render('admin/index')
    }
}
