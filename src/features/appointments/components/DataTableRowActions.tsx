import { Row } from "@tanstack/react-table";
import { useAppointments } from "../context/appointments-context"
import { Appointment } from "../interfaces/Appointment";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { IconCancel, IconProgressCheck } from "@tabler/icons-react";

interface DataTableRowActionsProps {
    row: Row<Appointment>
}

export const DataTableRowActions = ({ row }: DataTableRowActionsProps) => {

    const { setOpen, setCurrentRow } = useAppointments();

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='ghost'
                        className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
                    >
                        <DotsHorizontalIcon className='h-4 w-4' />
                        <span className='sr-only'>Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-[160px]'>
                    <DropdownMenuItem
                        onClick={() => {
                            setCurrentRow(row.original)
                            setOpen('completed')
                        }}
                        className="!text-green-600"
                    >
                        Completed
                        <DropdownMenuShortcut>
                            <IconProgressCheck size={16} />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => {
                            setCurrentRow(row.original)
                            setOpen('cancel')
                        }}
                        className='!text-red-500'
                    >
                        Cancel
                        <DropdownMenuShortcut>
                            <IconCancel size={16} />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
