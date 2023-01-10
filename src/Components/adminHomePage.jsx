import AdminNavbar from "./adminNavbar";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./adminDashbord";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./ReadBook";
import AddBook from "./AddBook";
import AddUser from "./AddUser";

const AdminHomePage = () => {
    return (
        <div className="adminPortal">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/bookList" element={<BookList />} />
                <Route path="/bookList/:id" element={<ReadBook />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/adduser" element={<AddUser />} />
            </Routes>
        </div>
    );
}
export default AdminHomePage;