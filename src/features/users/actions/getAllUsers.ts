import { texasFinestApi } from '@/api/texasFinestApi'

export async function getAllUsers() {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) return
  const response = await texasFinestApi.get('/users', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response.data
}
