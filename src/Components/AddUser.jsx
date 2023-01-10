import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phoneNumber, setphoneNumber] = useState("")

    let navigate = useNavigate

    let handleSubmit = (e) => {
        e.preventDefault();

    let userData = { name, age, email, phoneNumber }

    fetch('http://localhost:1234/users',{
        method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        alert(`Added a New USer`)
        navigate('/adminHomePage/userList')
    }

    return (
        <div className="addUser">
            <h1>Add a User</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="name" placeholder="type user name" />
                    </div>
                    <div className="age">
                        <input value={age} onChange={(e) => setAge(e.target.value)} type="text" className="age" placeholder="type user age" />
                    </div>
                    <div className="email">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="email" placeholder="type user email" />
                    </div>
                    <div className="phoneNumber">
                        <input value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} type="tel" minLength="10" maxLength="10" className="phoneNumber" placeholder="type user phoneNumber" />
                    </div>
                    <button className="btn btn-outline-primary">Add A User</button>
                </form>

            </div>
        </div>
    );
}

export default AddUser;