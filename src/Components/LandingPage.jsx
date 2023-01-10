import { Link } from "react-router-dom";
import '../Styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="background">
                <div className="background2">
                    <div className="selectLoginType_container">
                        <h2>Library Manager System</h2>
                        <div className="background3">
                            <img src="https://th.bing.com/th/id/OIP.iJ8GDoxdjs8WQWFfSd4cLwHaHa?pid=ImgDet&rs=1" style={{ width: 90, height: 70, marginLeft: 40 }}></img>
                            <img src="https://th.bing.com/th/id/OIP.LoH5ftkkf7yRFvopuFRijgHaHa?pid=ImgDet&rs=1" style={{ width: 90, height: 70, marginLeft: 50 }}></img>
                        </div>
                        <Link to='/adminLogin' id="id1" className="btn btn-outline-success">Admin Login</Link>
                        <Link to='/userLogin' id="id2" className="btn btn-outline-success" >User Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;