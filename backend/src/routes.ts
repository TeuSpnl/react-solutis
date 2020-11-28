import { Router } from "express";
import multer from 'multer';

import uploadConfig from './config/upload';
import AsylumsController from './controllers/AsylumsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/create-asylum', AsylumsController.index);
routes.get('/create-asylum/:id', AsylumsController.show);
routes.post('/create-asylum', upload.array('images'), AsylumsController.create);

export default routes;