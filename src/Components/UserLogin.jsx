import { useNavigate } from "react-router-dom"

const UserLogin = () => {
    let navigate = useNavigate()

    let login = () => {
        navigate('/user/')
    }

    return (
        <div className="userLogin">
            <div className="form container card mt-5 pt-3">
                <h1>Login as User</h1>
                <div className="form input p-5">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type='email' placeholder="email adress"></input>
                        </div>
                        <div className="password">
                            <input type='password' placeholder="enter password"></input>
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UserLogin;