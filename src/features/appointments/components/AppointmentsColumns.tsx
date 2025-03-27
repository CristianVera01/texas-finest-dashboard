import { ColumnDef } from "@tanstack/react-table";
import { Appointment } from "../interfaces/Appointment";
import { DataTableColumnHeader } from "@/features/users/components/data-table-column-header";
import LongText from "@/components/long-text";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Appointment>[] = [
    {
        accessorKey: 'fullName',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Full Name" />
        ),
        cell: ({ row }) => {
            const { firstName, lastName } = row.original;
            const fullName = `${firstName} ${lastName}`;
            return <LongText className="max-w-36">{fullName}</LongText>;
        },
        meta: {
            className: "w-36"
        },
        enableHiding: false,
        enableSorting: false,
    },
    {
        accessorKey: 'email',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
        cell: ({ row }) => (
            <div className="w-fit text-nowrap">{row.getValue('email')}</div>
        ),
        enableSorting: false,
    },
    {
        accessorKey: 'phoneNumber',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Phone Number" />
        ),
        cell: ({ row }) => <div>{row.getValue('phoneNumber')}</div>,
        enableSorting: false,
    },
    {
        accessorKey: 'date',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date" />
        ),
        cell: ({ row }) => <div>{row.getValue('date')}</div>,
        enableSorting: false,
    },
    {
        accessorKey: 'time',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Time" />
        ),
        cell: ({ row }) => <div>{row.getValue('time')}</div>,
        enableSorting: false,
    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <Badge variant="outline">
                        {row.getValue('status')}
                    </Badge>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding: false,
        enableSorting: false,
    },

];