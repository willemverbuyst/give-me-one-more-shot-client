import axios, { AxiosRequestConfig } from 'axios'

import { API_URL } from '../constants'

const config: AxiosRequestConfig = { baseURL: API_URL }

export const axiosInstance = axios.create(config)
