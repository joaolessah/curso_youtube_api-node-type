import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';

interface IQueryProps{
    page?: number,
    limit?: number,
    filter?: string
}

export const getAllValidation = validation((getSchema)=>({
    query: getSchema<IQueryProps>( yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional(),
        filter: yup.string().optional()
    }))
}));


// só entra aqui depois do handle request
export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response)=>{

    console.log(req.query);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');

};