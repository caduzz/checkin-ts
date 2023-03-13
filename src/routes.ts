import { Router } from "express";

//Controllers
import CheckinController from "./controllers/checkIn";
import UserController from "./controllers/user";

//middlewares
import registerUser from "./middlewares/registerUser";
import registerCheckin from "./middlewares/registerCheckin";

const routes = Router()

//Checkin Controller
routes.post('/checkin/entry', registerCheckin, (req, res) => new CheckinController(req, res).entry())
routes.post('/checkin/exit', registerCheckin, (req, res) => new CheckinController(req, res).exit())
routes.post('/checkin/list',(req, res) => new CheckinController(req, res).list())

//User Controller
routes.post('/login', (req, res) => new UserController(req, res).login())
routes.post('/register', registerUser, (req, res) => new UserController(req, res).register())

export default routes;