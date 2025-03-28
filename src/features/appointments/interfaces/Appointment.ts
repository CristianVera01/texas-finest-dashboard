export enum Status {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
    RESCHEDULED = 'RESCHEDULED',
    COMPLETED = 'COMPLETED',
    NOT_SHOWN = 'NOT_SHOWN'
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
    status: Status;
    createdAt: string;
    updatedAt: string;
}