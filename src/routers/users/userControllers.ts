import { db } from '../../db';
import { Request, Response } from 'express';
import { seekersTable } from '../../db/seekersSchema';

export async function createNewUser(req:Request, res:Response) {
    try {
        const [newUser] = await db.insert(seekersTable)
            .values(req.userData)
            .returning()

        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}