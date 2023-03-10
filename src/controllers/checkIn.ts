import { Request, Response } from "express"
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
        const { msg, status } = await this.service.checkin_register({
            type: "entry", 
            userId: '936ac666-b60c-49aa-ae2b-aad2eab36215'
        })
        this.res.json({ msg }).status(status)
    }
    exit = async () => {
        const { msg, status } = await this.service.checkin_register({
            type: "exit", 
            userId: '936ac666-b60c-49aa-ae2b-aad2eab36215'
        })
        
        this.res.json({ msg }).status(status)
    }
    list = async () => {
        const checkIn = await this.service.checkin_list('936ac666-b60c-49aa-ae2b-aad2eab36215')
        this.res.json({checkIn})
    }
}