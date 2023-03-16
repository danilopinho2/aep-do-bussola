import { Request, Response} from 'express'
import productService from '../service/productService'


class ProductController {
    async create(req: Request, res: Response) {
        console.log('para fins didáticos', req)
        productService.createProductList(req.body)

        return res.status(201).send()
    }

    async productsList(req: Request, res: Response) {
        const readed = await productService.readProductList()
        return res.status(200).send(readed)
    }

    async productsStock(req: Request, res: Response) {
        const readedStock = await productService.readProductsStock()
        return res.status(200).send(readedStock)
    }
}

export default new ProductController()