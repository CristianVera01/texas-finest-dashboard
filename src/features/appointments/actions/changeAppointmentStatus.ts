import { texasFinestApi } from '@/api/texasFinestApi'
import { StatusAppointment } from '../interfaces/Appointment'
import { ChangeStatusAppointmentResponse } from '../interfaces/appointments.responses'

export async function changeAppointmentStatus(
  appointmentId: string,
  status: StatusAppointment
) {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    throw new Error('Access token is required')
  }

  const response = await texasFinestApi.put<ChangeStatusAppointmentResponse>(
    `appointments/${appointmentId}/status/${status}`, {},
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )

  return response.data
}
