import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table"

interface DataTableToolbarProps<TData> {
    table: Table<TData>,
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {

    return (
        <div
            className="flex items-center justify-between"
        >
            <div
                className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2"
            >
                <Input
                    placeholder="Filter appointments..."
                    value={table.getColumn('fullName')?.getFilterValue() as string}
                    onChange={(event) => table.getColumn('fullName')?.setFilterValue(event.target.value)}
                    className="h-8 w-[150px] lg:w-[250px]"
                />
            </div>
        </div>
    );
}
