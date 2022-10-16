import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { Patient } from '../models'
import { SERVER_ERROR } from '../constants'
import { axiosInstance } from '../axiosInstance'
import { queryKeys } from '../reactQuery/constants'

const notifyError = (message: string) => toast.error(message)

export const getPatients = async (): Promise<Patient[] | null> => {
  try {
    const { data } = await axiosInstance.get('/patients')

    if (data) return data

    notifyError('no data in response')
    return null
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      // eslint-disable-next-line no-console
      console.error(error.response?.data)
    } else {
      // eslint-disable-next-line no-console
      console.log(SERVER_ERROR)
    }
    notifyError('something went wrong')

    return null
  }
}

export const useGetPatients = () => {
  const { data } = useQuery([queryKeys.PATIENTS], getPatients)
  const patients = data || []
  return patients
}
