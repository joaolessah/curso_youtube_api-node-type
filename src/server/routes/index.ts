import { Router } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StatusCodes} from 'http-status-codes';
import {CidadesController} from './../controllers';


const router = Router();

router.get('/', (req, res)=>{
    return res.send('Olá, dev!');
});

router.post('/cidades', 

    CidadesController.createValidation,
    CidadesController.create);


export {router};