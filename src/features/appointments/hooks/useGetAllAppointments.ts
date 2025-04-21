import { useQuery } from '@tanstack/react-query'
import { getAllAppointments } from '../actions/getAllAppointments'

export function useGetAllAppointments() {
  const useGetAllAppointmentsQuery = useQuery({
    queryKey: ['appointments'],
    queryFn: getAllAppointments,
  })

  return { useGetAllAppointmentsQuery }
}
