import { Router } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StatusCodes} from 'http-status-codes';
import {CidadesController} from './../controllers';


const router = Router();

router.get('/', (req, res)=>{
    return res.send('Olá, dev!');
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);

export {router};