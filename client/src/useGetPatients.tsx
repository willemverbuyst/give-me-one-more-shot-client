import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'
import { SERVER_ERROR } from './constants'
import { ApiError, Patient } from './models'
import { queryKeys } from './reactQuery/constants'

export const getPatients = async (): Promise<Patient[] | null> => {
  try {
    const { data }: AxiosResponse<any | ApiError> = await axiosInstance.get(
      '/patients'
    )

    if (data) return data

    // Make toast
    console.log({ TOAST: 'no data' })
    return null
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      console.error(error.response?.data)
    } else {
      console.log(SERVER_ERROR)
    }
    console.log({ TOAST: 'something went wrong' })

    return null
  }
}

export const useGetPatients = () => {
  const { data } = useQuery([queryKeys.PATIENTS], getPatients)

  const schools = data ? data : []

  return schools
}
