import { createLazyFileRoute } from '@tanstack/react-router'
import { Appointments } from '@/features/appointments'

export const Route = createLazyFileRoute('/_authenticated/appointments/')({
  component: Appointments,
})
