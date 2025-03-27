'use client'

import { useState } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { User } from '@/features/auth/interfaces/User'
import { useDeleteUserMutation } from '../hooks/useDeleteUserMutation'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow: User
}

const roleMapping: Record<string, string> = {
  ROLE_ADMINISTRATOR: 'Administrator',
  ROLE_OWNER: 'Owner',
  ROLE_BARBER: 'Barber',
  ROLE_TATTOOER: 'Tattooer',
}

export function UsersDeleteDialog({ open, onOpenChange, currentRow }: Props) {
  const [value, setValue] = useState('')
  const { deleteUserMutation } = useDeleteUserMutation();

  const handleDelete = () => {
    if (value.trim() !== currentRow.firstName) return

    deleteUserMutation.mutate(currentRow.id);
    onOpenChange(false)
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDelete}
      disabled={value.trim() !== currentRow.firstName}
      title={
        <span className='text-destructive'>
          <IconAlertTriangle
            className='mr-1 inline-block stroke-destructive'
            size={18}
          />{' '}
          Delete User
        </span>
      }
      desc={
        <div className='space-y-4'>
          <p className='mb-2'>
            Are you sure you want to delete{' '}
            <span className='font-bold'>{currentRow.firstName} {currentRow.lastName}</span>?
            <br />
            This action will permanently remove the user with the role of{' '}
            <span className='font-bold'>
              {roleMapping[currentRow.role as string]}
            </span>{' '}
            from the system. This cannot be undone.
          </p>

          <Label className='my-2'>
            First Name:
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Enter first name to confirm deletion.'
            />
          </Label>

          <Alert variant='destructive'>
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              Please be carefull, this operation can not be rolled back.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText='Delete'
      destructive
    />
  )
}
