import { Product } from '../model/Product'
import { BasicController } from './BasicConroller.js';
import { NextFunction, Request, Response } from "express";
import { get, controller, use, bodyValidator, post } from './decorators';


@controller('/product')
class ProductController extends BasicController {
    
    static model = new Product();

    @get('/all')
    async getAll(req: Request, res: Response) {
        const products = await ProductController.model.getAll();
        res.json(products)
    }

    // constructor() {
    //     super(new Product())
    // }

    // @get('/all')
    // async getAll(req: Request, res: Response) {
    //     const products = await this.model.getAll();
    //     res.json(products)
    // }

}