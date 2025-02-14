import _ from 'lodash';
import { z, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export function validateData(schema: z.ZodObject<any, any>){
    return (req: Request, res: Response, next: NextFunction) => {
        try{
            req.intel = _.pick(schema.parse(req.body), Object.keys(schema.shape));
            next();
        }catch (e){
            if (e instanceof ZodError){
                const errorMsgs = e.errors.map((issue: any) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`
                }));
                res.status(400).json({'error': 'invalidData', details: errorMsgs })
            } else{
                res.status(500).json({'msg': 'Internal server error'})
            }
        }
    }
}