import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';

import Header from "../Header/Header";
import Table from "../Table/Table";

export type User = {
    id: number;
    login: string;
    avatar_url: string;
}

export const UserList = () => {
    const [ users, setUsers ] = useState<User[]>([])
    const [ query, setQuery ] = useState<string>('octocat')
    const { data, isLoading } = useUser(query)

    useEffect(() => {
        if (data) {
            setUsers([...users, data])
        }
    }, [data])

    if (isLoading) {
        return (<p>Loading...</p>)
    }

    return (
        <>
            <Header onSubmit={setQuery} />
            <Table users={users}/>
        </>
    )
}