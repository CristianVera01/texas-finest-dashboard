import { ConfirmDialog } from "@/components/confirm-dialog"
import { Appointment, StatusAppointment } from "../interfaces/Appointment"
import { IconProgressCheck } from "@tabler/icons-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useChangeAppointmentStatusMutation } from "../hooks/useChangeAppointmentStatusMutation"

interface Props {
    currentRow?: Appointment
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const AppointmentsActionCancelledDialog = ({ currentRow, open, onOpenChange }: Props) => {

    const { changeAppointmentStatusMutation } = useChangeAppointmentStatusMutation();
    const { mutate: setAppointmentAsCancelled } = changeAppointmentStatusMutation;

    const handleSetAsCancelled = () => {
        setAppointmentAsCancelled({
            appointmentId: currentRow!.id!.toString(),
            status: StatusAppointment.CANCELLED,
        })

        onOpenChange(false)
    }

    return (
        <ConfirmDialog
            open={open}
            onOpenChange={onOpenChange}
            handleConfirm={handleSetAsCancelled}
            title={
                <span className='text-red-600'>
                    <IconProgressCheck
                        className='mr-1 inline-block stroke-red-600   '
                        size={18}
                    />{' '}
                    Set appointment as cancelled
                </span>
            }
            desc={
                <div className='space-y-4'>
                    <p className='mb-2'>
                        Are you sure you want to set{' '}
                        <span className='font-bold'>{currentRow?.firstName} {currentRow?.lastName}</span>{' '}
                        appointment as cancelled?
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
