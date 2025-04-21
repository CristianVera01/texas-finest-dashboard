import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/hooks/use-toast'
import {
  createNewAppointment,
  NewAppointment,
} from '../actions/createNewAppointment'
import { Appointment } from '../interfaces/Appointment'

export function useCreateAppointmentMutation() {
  const queryClient = useQueryClient()

  const createAppointmentMutation = useMutation({
    mutationFn: async (appointment: NewAppointment) =>
      await createNewAppointment(appointment),
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message
        toast({
          title: 'Error',
          description: errorMessage,
          variant: 'destructive',
        })
      } else {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        })
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['appointments'], (oldData: Appointment[]) => {
        if (!oldData) return []

        return [...oldData, data!.appointment]
      })

      toast({
        title: 'Appointment Created',
        description: data!.message,
      })
    },
  })

  return { ...createAppointmentMutation }
}
