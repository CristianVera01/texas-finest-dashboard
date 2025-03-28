import { useAppointments } from '../context/appointments-context'
import { AppointmentsActionDialog } from './AppointmentsActionDialog'

export const AppointmentsDialogs = () => {
  const { open, setOpen } = useAppointments()

  return (
    <>
      <AppointmentsActionDialog
        key='appointment-add'
        open={open === 'add'}
        onOpenChange={() => setOpen('add')}
      />
    </>
  )
}
