import { ConfirmDialog } from "@/components/confirm-dialog"
import { Appointment } from "../interfaces/Appointment"
import { IconProgressCheck } from "@tabler/icons-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Props {
    currentRow?: Appointment
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const AppointmentsActionCompletedDialog = ({ currentRow, open, onOpenChange }: Props) => {

    const handleSetAsCompleted = () => {
    }

    return (
        <ConfirmDialog
            open={open}
            onOpenChange={onOpenChange}
            handleConfirm={handleSetAsCompleted}
            title={
                <span className='text-green-600'>
                    <IconProgressCheck
                        className='mr-1 inline-block stroke-green-600   '
                        size={18}
                    />{' '}
                    Set appointment as completed
                </span>
            }
            desc={
                <div className='space-y-4'>
                    <p className='mb-2'>
                        Are you sure you want to set{' '}
                        <span className='font-bold'>{currentRow?.firstName} {currentRow?.lastName}</span>{' '}
                        appointment as completed?
                    </p>

                    <Alert variant='destructive'>
                        <AlertTitle>Warning!</AlertTitle>
                        <AlertDescription>
                            Please be carefull, this operation can not be rolled back.
                        </AlertDescription>
                    </Alert>
                </div>
            }
            confirmText='Confirm'
            destructive
        />
    )
}
