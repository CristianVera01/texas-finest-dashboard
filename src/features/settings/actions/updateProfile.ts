import { texasFinestApi } from '@/api/texasFinestApi'
import { UpdateProfileResponse } from '@/features/interfaces/api-responses'

export interface UpdateProfileParams {
  firstName: string
  lastName: string
  userId: string
}

export async function updateProfile(params: UpdateProfileParams) {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    throw new Error('No access token found.')
  }

  const response = await texasFinestApi.put<UpdateProfileResponse>(
    `/auth/update-profile/${params.userId}`,
    {
      firstName: params.firstName,
      lastName: params.lastName,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  return response.data;
}
