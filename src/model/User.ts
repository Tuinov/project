import { NextFunction, Router } from 'express';
import { Request, Response } from 'express';
import { db } from '../config/db'
import { Model } from './Model.js';

export class User extends Model {
    tableName = "person";

    
 
}