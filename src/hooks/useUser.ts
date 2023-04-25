import { UseQueryResult, useQuery } from "react-query";
import { User } from "../components/UserList/UserList";

export const useUser = (query: string): UseQueryResult<User, unknown> => {
    return useQuery(['user', query], async () => {
        const response = await fetch(`https://api.github.com/users/${query}`);
        return response.json();
    });
}