import { useEffect, useState } from "react";

const UserList = () => {
    let [user, setuser] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let responce = await fetch('http://localhost:1234/users')
            let data = await responce.json()
            setuser(data)
        }
        fetchData()
    })
    let handleDelete = (name) => {
        setuser(user.filter(x => x.name != name))
        alert(`${name} Is Removed From User User`)
    }

    return (
        <div className="userList">
            <h1>User List : {user.length}</h1>
            <div className="usersection">
                {user.map(data => (
                    <div className="list">
                        <h3>Name:{data.name}</h3>
                        <h5>Age:{data.age}</h5>
                        <h5>Id:{data.id}</h5>
                        <h5>Email:{data.email}</h5>
                        <button onClick={() => handleDelete(data.name)}>Remove User</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;