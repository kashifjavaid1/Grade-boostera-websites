import { Link } from "react-router-dom";
import logo from '../../assets/Grade Booster PNG file.png';

const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <div className="sidebar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Grade Booster Logo" />
                </Link>
            </div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/request">New Request</Link>
                <button className="logout" onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    );
};

export default Sidebar;
