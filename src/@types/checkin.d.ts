type CheckinType = 'entry' | 'exit'

export interface ICheckin {
    id: string,
    type: string,
    date: Date,
    userId: string
}

export interface ICheckinRegister {
    type: CheckinType,
    userId: string
}

export interface ICheckinPromise {
    msg: string,
    error: boolean,
    status: number
}