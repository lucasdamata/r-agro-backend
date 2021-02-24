import {Router} from 'express'
import FormController from './controllers/FormController'

const routes = Router()

//index, show, create, upadte, delete 

routes.post('/forms', FormController.create)
routes.get('/forms/:id', FormController.show)
routes.get('/forms', FormController.index)
routes.post('/forms/id', FormController.delete)

export default routes;