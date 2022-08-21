import dayjs from 'dayjs'

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}

export interface ApiError {
  message: string
}

export interface Patient {
  id: string
  birthdate: string
  BSN: string
  email: string
  familyName: string
  gender: Gender
  givenName: string
}

export interface MonthDetails {
  firstDateOfTheMonth: dayjs.Dayjs
  firstDayOfTheWeek: number // Sunday === 0
  lastDateOfTheMonth: number
  nameOfMonth: string
  month: string
  year: string
}
