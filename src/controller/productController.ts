import { Request, Response} from 'express'
import productService from '../service/productService'


class ProductController {
    async create(req: Request, res: Response) {
        console.log('para fins didáticos', req)
        productService.createProductList(req.body)

        return res.status(201).send()
    }
}

export default new ProductController()