
import { BasicController } from './BasicConroller.js';
import { NextFunction, Request, Response } from "express";
import { get, controller, use, bodyValidator, post } from './decorators';
import { Order } from '../model/Order';


@controller('/order')
class OrderController extends BasicController {

    // constructor() {
    //     super(new Order())
    // }

    static model = new Order();


    @get('/all')
    async getAll(req: Request, res: Response) {

        const products = await OrderController.model.getAll();
        res.json(products)
    }

    @post('/create')
    async create (req: Request, res: Response) {
        // console.log(req.sessionID);
        
        const newItem = await OrderController.model.create(req.body);
        // console.log(req.body);
        

        res.json(newItem)
    }

}