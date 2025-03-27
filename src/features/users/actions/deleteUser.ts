import { GeneralSuccessResponse } from '@/interfaces/GeneralSuccessResponse'
import { texasFinestApi } from '@/api/texasFinestApi'

export async function deleteUser(id: string) {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) return

  const response = await texasFinestApi.delete<GeneralSuccessResponse>(
    `/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  return response.data
}
