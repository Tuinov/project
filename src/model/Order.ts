import { db } from '../config/db.js';
import { Model } from './Model.js';
import { StatusOrder } from '../controllers/decorators/StatusOrder.js';
import expressSession from 'express-session'

export class Order extends Model {
    tableName = "orders";

    create = async (reqBody: [{id: number}] ) => {

        let values = [StatusOrder.Accept, new Date()];
        let newOrder = await db.query(`INSERT INTO ${this.tableName} (status, time) values ($1, $2) RETURNING *`, values)
        const idOrders: number = +newOrder.rows[0].id;
        
        reqBody.forEach((item) => {
            db.query(`INSERT INTO order_items (id_order, id_product) values ($1, $2) RETURNING *`,
                [idOrders, item.id]);
        })

        return this.getOrder(idOrders);
    }

    getOrder = async (idOrders: number) => {
        let result = await db.query(`select * from orders where id = ${idOrders}`);
        
        let prod = await db.query(`select prdcts.id, prdcts.name, prdcts.description, prdcts.price, prdcts.category, prdcts.category,
        prdcts.image, order_items.quantity from order_items
        left JOIN prdcts  ON order_items.id_product = prdcts.id
        where order_items.id_order = ${idOrders}`);

        let order = result.rows[0];
        order.products = prod.rows;
        return order;
    }


}