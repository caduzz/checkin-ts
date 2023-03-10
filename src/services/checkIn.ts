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
        const checkIn = await this.prisma.checkIn.create({data})
        
        if(checkIn){
            return this.msgReturn(`Sucess To Create Checkin - ${data.type}`, false, 200)
        }else{
            return this.msgReturn('Erro To Create Checkin', false, 400)
        }
    }
    checkin_list = async ( userId: string ) : Promise<ICheckin[]> => {
        const checkIn = this.prisma.checkIn.findMany({where: {userId}})
        return checkIn
    }
}