import { texasFinestApi } from '@/api/texasFinestApi'
import { UserUpdateResponse } from '../interfaces/UsersApiResponses'

export interface UpdateUser {
  id: string
  firstName: string
  lastName: string
  password: string
  isActive: boolean
  role: string
}

export async function updateUser(
  user: UpdateUser
): Promise<UserUpdateResponse | null> {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) return null

  const response = await texasFinestApi.put<UserUpdateResponse>(
    `/users/${user.id}`,
    {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      isActive: user.isActive,
      role: user.role,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  return response.data
}
