import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { ICheckinRegister } from '../@types/checkIn';

export default async function registerCheckin(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object<ICheckinRegister>({
    userId: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ msg: error.message, error: true });
  }

  next();
}