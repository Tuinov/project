import { db } from '../config/db'

export abstract class Model {
    tableName = '';

    getAll = async () => {
        const result = await db.query(`SELECT * FROM ${this.tableName}`);
        return result.rows;
    }

    getOne = async (id: number) => {
        const result = await db.query(`SELECT * FROM ${this.tableName} where id = $1`, [id]);
        return result.rows[0];
    }

    // create = async (reqBody: {}) => {
    //     const field = Object.keys(reqBody);
    //     const values = Object.values(reqBody);
    //     const result = await db.query(`INSERT INTO ${this.tableName} (${field}) values ($1, $2) RETURNING *`, values)
    //     const newPerson = result.rows[0]
    //     return newPerson;
    // }

    delete = async (id: number) => {
        const result = await db.query(`DELETE FROM ${this.tableName} where id = $1`, [id]);
        return result.rowsCount
    }

    update = async (reqBody: any) => {
        const { id, name, surname } = reqBody;

        const result = await db.query(`UPDATE ${this.tableName} SET name = $1, surname = $2 where id = $3 RETURNING *`,
         [name, surname, id]);
         return result.rows[0];
        //  res.status(200).json(user.rows[0]); увидел на ютубе

    }
}