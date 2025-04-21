import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import LongText from '@/components/long-text'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { User } from '@/features/auth/interfaces/User'

const roleMapping: Record<string, string> = {
  ROLE_ADMINISTRATOR: 'Administrator',
  ROLE_OWNER: 'Owner',
  ROLE_BARBER: 'Barber',
  ROLE_TATTOOER: 'Tattooer',
}

export const columns: ColumnDef<User>[] = [
  {
    // id: 'firstName',
    accessorKey: 'firstName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Full Name' />
    ),
    cell: ({ row }) => {
      const { firstName, lastName } = row.original
      const fullName = `${firstName} ${lastName}`
      return <LongText className='max-w-36'>{fullName}</LongText>
    },
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

      const { phoneNumber } = row.original;

      return <div>{phoneNumber}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const { isActive } = row.original
      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={`${isActive ? 'bg-green-600' : 'bg-destructive'} text-white`}>
            {
              isActive ? 'Active' : 'Inactive'
            }
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
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Role' />
    ),
    cell: ({ row }) => (
      <div className='flex items-center gap-x-2'>
        <span className='text-sm capitalize'>{roleMapping[row.getValue('role') as string]}</span>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
  },
]
