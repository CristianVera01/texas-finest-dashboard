import { useAppointments } from '../context/appointments-context'
import { AppointmentsActionDialog } from './AppointmentsActionDialog'
import { AppointmentsActionCompletedDialog } from './AppointmentsActionCompletedDialog'
import { AppointmentsActionCancelledDialog } from './AppointmentsActionCancelledDialog'

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
      <AppointmentsActionCancelledDialog
        key='appointment-cancelled'
        open={open === 'cancel'}
        onOpenChange={() => setOpen('cancel')}
        currentRow={currentRow!}
      />
    </>
  )
}
