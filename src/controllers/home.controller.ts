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

    public getHomePage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getCategoriesPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getCategoryPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getProductPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getWishlistPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getCartPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getCheckoutPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getSearchPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getComparePage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getLoginPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getRegistrationPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public getContactPage(req: Request, res: Response): Response | Promise<Response> | void {}
    public get404Page(req: Request, res: Response): Response | Promise<Response> | void {}
}
