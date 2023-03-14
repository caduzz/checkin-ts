import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IUserRegister, IUserPromise } from '../@types/user';

export default async function registerUser(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object<IUserRegister>({
    id: Joi
      .string()
      .required(),
    email: Joi
      .string()
      .email()
      .required()
      .messages({
        'string.email': `Porfavor informe um \`email\` valido`
      }),
    name: Joi.string()
      .required(),
    password: Joi
      .string()
      .required(),

  })

  const { error } = schema.validate(req.body)

  if (error) {
    const err: IUserPromise = { msg: error.message, error: true, status: 200 }
    return res.status(err.status).json(err)
  }

  next();
}