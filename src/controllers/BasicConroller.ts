
import { db } from '../config/db'
import { Model } from '../model/Model';
import { User } from '../model/User'
import { NextFunction, Request, Response } from "express";
import { get, controller, use, bodyValidator, post } from './decorators';


export class BasicController {

    model: Model

    constructor(model: Model) {
        this.model = model;
    }

    
    @get('/all')
    async getAll (req: Request, res: Response) {
        const users = await this.model.getAll();
        res.json(users)
    }

    getOne = async (req: Request, res: Response) => {
        let id: number = +req.params.id;
        console.log('id', id);
        const userOne = await this.model.getOne(id);
        res.json(userOne)
    }


    async create(req: Request, res: Response) {
        const newItem = await this.model.create(req.body);
        res.json(newItem)
    }

    
    delete = async (req: Request, res: Response) => {
        let id: number = +req.params.id;
        const result = await this.model.delete(id);
        // const user = await db.query('DELETE FROM person where id = $1', [id]);
        res.status(200).json(result)
    }

    
    update = async (req: Request, res: Response) => {
        // const { id, name, surname } = req.body;
        // const user = await db.query('UPDATE person SET name = $1, surname = $2 where id = $3 RETURNING *',
        //     [name, surname, id]);
        const result = await this.model.update(req.body);

        res.json(result);
    }
}