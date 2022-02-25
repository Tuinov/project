import { NextFunction, Router } from 'express';
import { Request, Response } from 'express';
import { db } from '../config/db.js'
import { Model } from './Model.js';

export class Product extends Model {
    tableName = "prdcts";

    
}