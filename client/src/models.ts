export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}

export type Patient = {
  birthdate: string
  BSN: string
  email: string
  familyName: string
  gender: Gender
  givenName: string
}
