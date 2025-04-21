import { useQuery } from "@tanstack/react-query";
import { getAvailableHoursByDate } from "../actions/getAvailableHoursByDate";
import { useState } from "react";

export function useGetAvailableHoursByDateLazy() {

    const [date, setDate] = useState<string | null>(null);

    const useGetAvailableHoursByDateLazy = useQuery({
        queryKey: ["availableHoursByDate", date],
        queryFn: () => getAvailableHoursByDate(date!),
        enabled: !!date,
    });

    const loadDate = (date: string) => {
        setDate(date);
    }

    return { loadDate, ...useGetAvailableHoursByDateLazy };

}