import { texasFinestApi } from '@/api/texasFinestApi'
import { Appointment } from '../interfaces/Appointment'

export const getAllAppointments = async () => {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) return

  const response = await texasFinestApi.get<Appointment[]>('/appointments', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response.data
}
