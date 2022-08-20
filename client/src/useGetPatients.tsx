import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { axiosInstance } from './axiosInstance'
import { SERVER_ERROR } from './constants'
import { ApiError, Patient } from './models'
import { queryKeys } from './reactQuery/constants'

const notifyError = (message: string) => toast.error(message)

export const getPatients = async (): Promise<Patient[] | null> => {
  try {
    const { data }: AxiosResponse<any | ApiError> = await axiosInstance.get(
      '/patients'
    )

    if (data) return data

    notifyError('no data in response')
    return null
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      console.error(error.response?.data)
    } else {
      console.log(SERVER_ERROR)
    }
    notifyError('something went wrong')

    return null
  }
}

export const useGetPatients = () => {
  const { data } = useQuery([queryKeys.PATIENTS], getPatients)
  const patients = data ? data : []
  return patients
}
