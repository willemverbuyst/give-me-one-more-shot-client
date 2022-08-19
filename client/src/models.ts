export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}

export type Patient = {
  id: string
  birthdate: string
  BSN: string
  email: string
  familyName: string
  gender: Gender
  givenName: string
}
