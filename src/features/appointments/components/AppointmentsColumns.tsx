import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import LongText from '@/components/long-text'
import { DataTableColumnHeader } from '@/features/users/components/data-table-column-header'
import { Appointment } from '../interfaces/Appointment'
import { DataTableRowActions } from './DataTableRowActions'
import { cn } from '@/lib/utils'
import { callTypes } from '../data/data'

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: 'fullName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Full Name' />
    ),
    cell: ({ row }) => {
      const { firstName, lastName } = row.original
      const fullName = `${firstName} ${lastName}`
      return <LongText className='max-w-36'>{fullName}</LongText>
    },
    meta: {
      className: 'w-36',
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Email' />
    ),
    cell: ({ row }) => (
      <div className='w-fit text-nowrap'>{row.getValue('email')}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Phone Number' />
    ),
    cell: ({ row }) => {
      const { phoneNumber, countryCode } = row.original
      return (
        <div>
          {countryCode} {phoneNumber}
        </div>
      )
    },
    enableSorting: false,
  },
  {
    accessorKey: 'appointmentDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Appointment Date' />
    ),
    cell: ({ row }) => <div>{row.getValue('appointmentDate')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'appointmentTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Appointment Time' />
    ),
    cell: ({ row }) => <div>{row.getValue('appointmentTime')} HRS</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {

      const { status } = row.original
      const statusColor = callTypes.get(status)

      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={cn('capitalize', statusColor)}
          >
            {row.getValue('status')}
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
  }
]
