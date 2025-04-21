import { texasFinestApi } from '@/api/texasFinestApi'
import { UserCreateResponse } from '../interfaces/UsersApiResponses'

export interface UserCreate {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  role: string
  isActive: boolean
  password: string
}

export async function createUserFromPanel(user: UserCreate) {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) return

  const response = await texasFinestApi.post<UserCreateResponse>(
    '/users',
    {
      ...user,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  return response.data
}
