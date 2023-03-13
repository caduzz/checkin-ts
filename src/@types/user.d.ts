import { ICheckin } from "./checkin"

export interface IUser {
    id: string,
    email: string
    password?: string,
    name: string,

    checkin?: ICheckin
}

export interface IUserLogin {
    id: string,
    email: string,
    password: string
}

export interface IUserRegister {
    id: string,
    email: string
    password: string,
    name: string,
}

export interface IUserPromise {
    msg: string,
    error?: boolean,
    status: number
}