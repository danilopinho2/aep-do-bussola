import express from 'express'

import routes from './routes'

import mongoose from 'mongoose'


class App {
    
    public express: express.Application

   
    public constructor() {

        this.express = express()

        this.middleware()
    
        this.routes()
        // 32 - chamando o método database e garantindo que ele será executado sempre que a classe for instanciada
        //this.database()

    }

    public middleware(): void {
        this.express.use(express.json())
    }

    
    public async database() {
        try {
            
            mongoose.set("strictQuery", true)
            
            await mongoose.connect('mongodb+srv://thiagobussola:teste123@cluster0.yr6yk6b.mongodb.net/?retryWrites=true&w=majority')
            console.log('Connect database success')

        } catch (err) {
            console.error('Connect database fail, error', err)
        }
    }

    public routes(): void {
        this.express.use(routes)
    }
}

export default new App().express