export enum Role {
    ROLE_ADMINISTRATOR = "ROLE_ADMINISTRATOR",
    ROLE_OWNER = "ROLE_OWNER",
    ROLE_BARBER = "ROLE_BARBER",
    ROLE_TATTOOER = "ROLE_TATTOOER"
}

export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    countryCode: string
    phoneNumber: string
    isActive: boolean;
    createAt: Date
    updateAt: Date
    role: Role;
}