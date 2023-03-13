import { Request, Response } from "express"
import { ICheckinRegister } from "../@types/checkIn";
import CheckinService from "../services/checkIn"

export default class CheckinController {
    private req: Request;
    private res: Response;
    private service: CheckinService;
  
    constructor(req: Request, res: Response, ) {
      this.req = req;
      this.res = res;
      this.service = new CheckinService();
    }
    
    entry = async () => {
        const data: ICheckinRegister = {type: 'entry', ...this.req.body}

        const { msg, error, status } = await this.service.checkin_register(data)
        this.res.json({ msg, error }).status(status)
    }
    exit = async () => {
        const data: ICheckinRegister = {type: 'exit', ...this.req.body}

        const { msg, error, status } = await this.service.checkin_register(data)
        
        this.res.json({ msg, error }).status(status)
    }
    list = async () => {
        const { userId } = this.req.body
        const checkIn = await this.service.checkin_list(userId)
        this.res.json({checkIn})
    }
}