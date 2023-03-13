import { PrismaClient } from "@prisma/client";
import { ICheckin, ICheckinPromise, ICheckinRegister } from "../@types/checkIn";

export default class CheckinService {
    private prisma: PrismaClient;
    private msgReturn: (msg: string, error: boolean, status: number) => ICheckinPromise

    constructor () {
        this.prisma = new PrismaClient()
        this.msgReturn = (msg: string, error: boolean, status: number) : 
            ICheckinPromise => {return {msg, error, status}}
    }

    checkin_register = async (data:ICheckinRegister) : Promise<ICheckinPromise> => {
        const user = await this.prisma.user.findUnique({
            where: {
                id: data.userId
            }
        })


        if(user === null)return this.msgReturn(`Crie uma conta para fazer checkin`, true, 200)

        const checkIn = await this.prisma.checkIn.create({data})

        if(checkIn){
            return this.msgReturn(`Sucesso ao criar checkin`, false, 200)
        }else{
            return this.msgReturn('Erro ao criar checkin', true, 400)
        }
    }
    checkin_list = async ( userId: string ) : Promise<ICheckin[]> => {
        const checkIn = this.prisma.checkIn.findMany({where: {userId}})
        return checkIn
    }
}