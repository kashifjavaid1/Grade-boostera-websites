import { Link } from "react-router-dom";

const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <div className="sidebar">
            <h2 className="logo">G3 Admin</h2>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/request">New Request</Link>
                <button className="logout" onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    );
};

export default Sidebar;
