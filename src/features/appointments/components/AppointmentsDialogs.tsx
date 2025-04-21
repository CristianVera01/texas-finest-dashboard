import { useAppointments } from '../context/appointments-context'
import { AppointmentsActionDialog } from './AppointmentsActionDialog'
import { AppointmentsActionCompletedDialog } from './AppointmentsActionCompletedDialog'

export const AppointmentsDialogs = () => {
  const { open, setOpen, currentRow } = useAppointments()

  return (
    <>
      <AppointmentsActionDialog
        key='appointment-add'
        open={open === 'add'}
        onOpenChange={() => setOpen('add')}
      />
      <AppointmentsActionCompletedDialog
        key='appointment-completed'
        open={open === 'completed'}
        onOpenChange={() => setOpen('completed')}
        currentRow={currentRow!}
      />
    </>
  )
}
