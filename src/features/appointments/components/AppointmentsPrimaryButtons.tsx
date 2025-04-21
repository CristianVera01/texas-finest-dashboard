import { IconCalendarPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useAppointments } from '../context/appointments-context'

export const AppointmentsPrimaryButtons = () => {
  const { setOpen } = useAppointments()
  return (
    <div className='flex gap-2'>
      <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Add Appointment</span> <IconCalendarPlus size={18} />
      </Button>
    </div>
  )
}
