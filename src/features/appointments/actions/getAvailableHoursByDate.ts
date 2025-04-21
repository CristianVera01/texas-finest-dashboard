import { texasFinestApi } from "@/api/texasFinestApi";

export async function getAvailableHoursByDate(date: string) {

    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) throw new Error("Access token is not set.");

    const response = await texasFinestApi.get<string[]>(`/appointments/availability/hours/${date}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data;

}