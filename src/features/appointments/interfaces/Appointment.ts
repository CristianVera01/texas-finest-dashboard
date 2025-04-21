export enum StatusAppointment {
    PENDING = 'PENDING',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED'
}

export interface Appointment {
    id: number;
    appointmentDate: string;
    appointmentTime: string;
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    status: StatusAppointment;
    createdAt: string;
    updatedAt: string;
}