import { writeFile } from 'fs/promises'

class productService {

    async createProductList(data) {
        try {
            console.log("Criando lista de produtos")
            await writeFile('products.json', JSON.stringify(data))
        } catch (err) {
            throw new Error("Falha ao salvar a lista de produtos")
        }
    }
}

export default new productService()