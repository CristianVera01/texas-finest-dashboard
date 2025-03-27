import { Button } from "@/components/ui/button"
import { IconCalendarPlus } from "@tabler/icons-react"

export const AppointmentsPrimaryButtons = () => {
    return (
        <div
            className="flex gap-2"
        >
            <Button
                className="space-x-1" onClick={() => { }}
            >
                <span>Add Appointment</span> <IconCalendarPlus size={18} />
            </Button>
        </div>
    )
}
