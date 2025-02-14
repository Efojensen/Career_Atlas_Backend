import bcrypt from 'bcryptjs';
import { db } from '../../db';
import { Request, Response } from "express";
import { employersTable } from '../../db/employersSchema';

export async function createEmployer(req: Request, res: Response){
    const empData = req.compData;
    try{
        empData.password = await bcrypt.hash(empData.password, 10);
        const [result] = await db.insert(employersTable)
            .values(empData)
            .returning()

        res.status(201).json(result);
    } catch (e){
        res.status(500).json(e)
    }
}