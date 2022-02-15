import { useEffect, useState } from "react";

const URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        axios.get(URL).then(response => setUsers(response.data));
    }, [])

    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });

    return (
        <ul>
            {renderedUsers}
        </ul>
    );
}
 
export default Users;