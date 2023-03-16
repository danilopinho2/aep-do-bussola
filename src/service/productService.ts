import { writeFile, readFile } from 'fs/promises'

class productService {

    async createProductList(data) {
        try {
            console.log("Criando lista de produtos")
            await writeFile('products.json', JSON.stringify(data))
        } catch (err) {
            throw new Error("Falha ao salvar a lista de produtos")
        }
    }

    async readProductList() {
        const readProducts = await readFile("products.json", "utf-8")

        return JSON.parse(readProducts)
    }

    async readProductsStock() {
        const readList = await this.readProductList()

        const readStock = readList.map( item => {
            let objeto = {
                nome: item.nome,
                qtde: item.qtde,
                preco: item.preco,
                valor_estoque: item.qtde * item.preco
            }
            return objeto
        })

        return readStock
    }
}

export default new productService()