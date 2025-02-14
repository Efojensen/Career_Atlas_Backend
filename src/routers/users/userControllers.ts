import { db } from '../../db';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { seekersTable } from '../../db/seekersSchema';

export async function createNewUser(req:Request, res:Response) {
    const data = req.userData;
    try {
        data.password = await bcrypt.hash(data.password, 10)
        const [newUser] = await db.insert(seekersTable)
            .values(data)
            .returning()

        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}