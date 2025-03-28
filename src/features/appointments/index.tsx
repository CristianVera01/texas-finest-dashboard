import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/AppointmentsColumns'
import { AppointmentsPrimaryButtons } from './components/AppointmentsPrimaryButtons'
import { AppointmentsTable } from './components/AppointmentsTable'
import { useGetAllAppointments } from './hooks/useGetAllAppointments'
import AppointmentsProvider from './context/appointments-context'
import { AppointmentsDialogs } from './components/AppointmentsDialogs'

export const Appointments = () => {
  const { useGetAllAppointmentsQuery } = useGetAllAppointments()

  return (
    <AppointmentsProvider>
      <Header fixed>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Appointments</h2>
            <p className='text-muted-foreground'>
              Manage your appointments here.
            </p>
          </div>
          <AppointmentsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          {!useGetAllAppointmentsQuery.isLoading &&
            useGetAllAppointmentsQuery.data && (
              <AppointmentsTable
                data={useGetAllAppointmentsQuery.data}
                columns={columns}
              />
            )}
        </div>
      </Main>
      <AppointmentsDialogs />
    </AppointmentsProvider>
  )
}
