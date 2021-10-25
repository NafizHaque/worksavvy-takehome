import { useEffect, useState } from 'react';

import UserList from './UserList';

const Home = () => {

    const[users, setUsers] = useState (null);


    useEffect( () => {
        fetch("http://localhost:8000/users")
            .then(res => {
                return res.json();
            })
            .then((data) =>
            {
             console.log(data);
             setUsers(data)

            });

        },  []);
    

    return ( 

        <div className="home">
            <h1>Welcome to the homepage</h1>
            <br />
            <h2>The User List </h2>
            <h2>Click user for details and timetable</h2>
            <br />
           {users && <UserList users ={users} />}
            


        </div>




     );
}
 
export default Home;