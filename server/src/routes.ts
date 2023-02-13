import { FastifyInstance } from 'fastify'
import { prisma } from "./lib/prisma"

export async function appRoutes(app: FastifyInstance){

    app.get('/', () => {
        return 'Hey'
    })

    //Criar habito
    app.post('/habits', async() => {



        
    })

}