import { PrismaClient } from "@prisma/client";
import { IUserPromise, IUserLogin, IUserRegister } from "../@types/user";

import bcrypt from 'bcryptjs';


export default class UserService {
    private prisma: PrismaClient;
    private msgReturn: (msg: string, error: boolean, status: number) => IUserPromise
  
    constructor() {
      this.prisma = new PrismaClient();

      this.msgReturn = (msg: string, error: boolean, status: number) : IUserPromise => {
            return {msg, error, status}
      }
    }
    
    create_user = async ({ email, name, password }:IUserRegister): Promise<IUserPromise> => {
        const salt = await bcrypt.genSalt(10);

        password = await bcrypt.hash(password, salt);

        const user = await this.prisma.user.create({data: {email, name, password}})

        if(user){
            return {msg: 'User Create Sucess', error: false, status: 200}
        }else {
            return {msg: 'Erro To Create User', error: false, status: 404}
        }
    }
    login_user = async ({ email, password }:IUserLogin) : Promise<IUserPromise> => {
        const user = await this.prisma.user.findUnique({where: { email }})

        if(user){
            return this.msgReturn('User Login', false, 200)
        }else {
            return this.msgReturn('User Not Find', true, 404)
        }
    }
}