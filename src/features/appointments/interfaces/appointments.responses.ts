import { Appointment } from "./Appointment"

export interface NewAppointmentResponse {
    message: string
    appointment: Appointment
    success: boolean
}

export interface ChangeStatusAppointmentResponse {
    message: string
    success: boolean
    appointment: Appointment
}