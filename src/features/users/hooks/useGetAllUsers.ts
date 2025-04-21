import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../actions/getAllUsers"

export function useGetAllUsers() {

    const getUsersQuery = useQuery({
        queryKey: ['users'],
        queryFn: async () => await getAllUsers(),
    })

    return {
        getUsersQuery
    }

}