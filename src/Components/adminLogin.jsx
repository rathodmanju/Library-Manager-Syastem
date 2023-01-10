import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/AdminLogin.css';

const AdminLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let login = (e) => {
        e.preventDefault();
        let data = { email, password } // data from input
        console.log(data);

        //admin validation
        if (email == 'manjurathode49@gmail.com' && password == 1234) {
            navigate('/adminHomePage/');
        }
        else {
            alert('Invalid credentials')
        }
        
    }
    return (
        <div className="main">
            <div className="adminLogin">
                <div className="form">
                    <h1>Login as Admin</h1>
                    <div className="form input p-5">
                        <form onSubmit={login}>
                            <div className="email">
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email adress"></input>
                            </div>
                            <div className="password">
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password"></input>
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AdminLogin;