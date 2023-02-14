import { FastifyInstance } from 'fastify'
import dayjs from 'dayjs'
import { z } from 'zod'
import { prisma } from "./lib/prisma"

export async function appRoutes(app: FastifyInstance){

    app.get('/', async() => {
        return 'Hey'
    })

    //Criar habito
    app.post('/habits', async(request) => {
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })
        const { title, weekDays } = createHabitBody.parse(request.body) 

        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data: {
                title,
                created_at: new Date(),
                weekDays: {
                    create: weekDays.map(weekDay => {
                        return {
                            week_day: weekDay,
                        }
                    })
                    
                }
            }
        })
    })

    app.get('/day', async (request) => {
        const getDayParams = z.object({
            date: z.coerce.date()
        })

        const { date } = getDayParams.parse(request.query)

        const weekDay = dayjs(date).get('day')

        //todos hábitos possíveis naquele dia
        //hábitos que foram completados

        const possibleHabits = await prisma.habit.findMany({
            where: {
                created_at: {
                    lte: date,
                },
                weekDays:{
                    some: {
                        week_day: weekDay,
                    }
                }
            },
        })

        return {
            possibleHabits,
        }
    })

}


