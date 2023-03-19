import { Router } from 'express'
import productController from './controller/productController'


const routes = Router()


routes.post('/products', productController.create)
routes.get('/products', productController.productsList)
routes.get('/products-stock', productController.productsStock)


export default routes