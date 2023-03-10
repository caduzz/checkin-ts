import { Request, Response } from "express"
import { IUserLogin, IUserRegister } from "../@types/user"
import UserService from "../services/user"

export default class UserController {
    private req: Request;
    private res: Response;
    private service: UserService;
  
    constructor(req: Request, res: Response, ) {
      this.req = req;
      this.res = res;
      this.service = new UserService();
    }
    
    login = async () => {
        const data:IUserLogin = this.req.body
        
        const { msg, status } = await this.service.login_user(data)
        console.log(msg)
        this.res.json({msg}).status(status)
    }
    register = async () => {
        const data:IUserRegister = this.req.body
        
        const { msg, status } = await this.service.create_user(data)
        console.log(msg)
        this.res.json({msg}).status(status)
    }
}