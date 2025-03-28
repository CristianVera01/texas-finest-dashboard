import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Appointment } from '../interfaces/Appointment'

type AppointmentsDialogType = 'add' | 'edit' | 'delete'

interface AppointmentsContextType {
  open: AppointmentsDialogType | null
  setOpen: (str: AppointmentsDialogType | null) => void
  currentRow: Appointment | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Appointment | null>>
}

const AppointmentsContext = React.createContext<AppointmentsContextType | null>(
  null
)

interface Props {
  children: React.ReactNode
}

export default function AppointmentsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<AppointmentsDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Appointment | null>(null)

  return (
    <AppointmentsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </AppointmentsContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppointments = () => {
  const appointmentsContext = React.useContext(AppointmentsContext)

  if (!appointmentsContext) {
    throw new Error(
      'useAppointments has to be used within <AppointmentsContext>'
    )
  }

  return appointmentsContext
}
