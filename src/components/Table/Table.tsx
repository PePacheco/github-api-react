import './Table.css';
import '../../hooks/useUser'
import { User } from '../UserList/UserList';

type TableProps = {
    users: User[];
};

function Table({ users }: TableProps) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>User Image</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>
                            <img src={user.avatar_url} alt={user.login} className="user-image" />
                        </td>
                        <td>{user.login}</td>
                        <td>
                            <button className="details-button">See Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
