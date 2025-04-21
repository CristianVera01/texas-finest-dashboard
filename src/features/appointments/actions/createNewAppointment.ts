import { texasFinestApi } from "@/api/texasFinestApi"
import { NewAppointmentResponse } from "../interfaces/appointments.responses"

export interface NewAppointment {
  appointmentDate: string
  appointmentTime: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

export async function createNewAppointment(appointment: NewAppointment) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) throw new Error("Access token is not set.");

    const response = await texasFinestApi.post<NewAppointmentResponse>('/appointments', {
        ...appointment,
    }, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data;
}
