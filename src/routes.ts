import { Router } from "express";

import CheckinController from "./controllers/checkIn";
import UserController from "./controllers/user";

const routes = Router()

//Checkin Controller
routes.post('/checkin/entry', (req, res) => new CheckinController(req, res).entry())
routes.post('/checkin/exit',(req, res) => new CheckinController(req, res).exit())
routes.get('/checkin/list',(req, res) => new CheckinController(req, res).list())

//User Controller
routes.post('/login', (req, res) => new UserController(req, res).login())
routes.post('/register', (req, res) => new UserController(req, res).register())

export default routes;