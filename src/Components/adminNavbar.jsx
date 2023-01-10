import { Link } from "react-router-dom";
import '../Styles/adminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className="adminav">
            <nav className="navba">
                <div className="new">
                    <h3>Admin Portal</h3>
                    <div className="new1">
                        <div className="next">
                            <Link to="/adminHomePage/" className="one">Dashboard</Link>
                            <Link to="/adminHomePage/addbook" className="one">Add Book</Link>
                            <Link to="/adminHomePage/adduser" className="one">Add User</Link>
                            <Link to="/adminHomePage/bookList" className="one">Book List</Link>
                            <Link to="/adminHomePage/userList" className="one">User List</Link>
                            <Link to="/" className="one">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AdminNavbar;