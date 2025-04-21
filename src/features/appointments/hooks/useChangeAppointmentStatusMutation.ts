import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeAppointmentStatus } from '../actions/changeAppointmentStatus'
import { Appointment, StatusAppointment } from '../interfaces/Appointment'
import { toast } from '@/hooks/use-toast';

export function useChangeAppointmentStatusMutation() {

    const queryClient = useQueryClient();

  const changeAppointmentStatusMutation = useMutation({
    mutationFn: async ({ appointmentId, status }: { appointmentId: string; status: StatusAppointment }) =>
      await changeAppointmentStatus(appointmentId, status),
    onSuccess: (data) => {
        queryClient.setQueryData(['appointments'], (oldData: Appointment[]) => {
          if (!oldData) return []

          const updatedData = oldData.map((appointment) =>
            appointment.id === data.appointment.id ? { ...appointment, status: data.appointment.status } : appointment
          )
          return updatedData
        })

        toast({
          title: 'Appointment Status Changed',
          description: data.message,
        })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  return { changeAppointmentStatusMutation }
}
