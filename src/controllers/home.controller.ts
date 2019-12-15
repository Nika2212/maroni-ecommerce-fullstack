import { BaseController } from "../core/base.controller";
import { IBaseController } from "../core/IBase.controller";
import { Request, Response } from 'express';

export class HomeController extends BaseController implements IBaseController {
    public async get(req: Request, res: Response): Promise<Response | void> {}
    public async getOne(req: Request, res: Response): Promise<Response | void> {}
    public async create(req: Request, res: Response): Promise<Response | void> {}
    public async update(req: Request, res: Response): Promise<Response | void> {}
    public async delete(req: Request, res: Response): Promise<Response | void> {}

    public getHomePage(req: Request, res: Response): Response | Promise<Response> | void {
        res.status(200).render('temp/seeder');
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

    public getAdminProductPage(req: Request, res: Response): void {
        return res.render('admin/product.html');
    }
    public getAdminAssignPage(req: Request, res: Response): void {
        return res.render('admin/assign.html');
    }
}
