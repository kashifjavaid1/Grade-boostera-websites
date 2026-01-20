import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-content">
                <h1>Welcome, {user?.firstName || "User"} 👋</h1>
                <p className="subtitle">Here is your request overview</p>

                <div className="card">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Request Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2026-01-20</td>
                                <td>Assignment Help</td>
                                <td className="pending">Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
