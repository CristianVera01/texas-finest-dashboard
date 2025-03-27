import { texasFinestApi } from '@/api/texasFinestApi'
import { LoginResponse } from '../../interfaces/AuthApiResponses'

export const login = async (email: string, password: string) => {
  const { data } = await texasFinestApi.post<LoginResponse>('/auth/login', {
    email,
    password,
  })

  return data
}
