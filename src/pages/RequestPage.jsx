import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";

const RequestPage = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/requests/all");
                if (res.data.success) {
                    setRequests(res.data.data);
                }
            } catch (error) {
                console.error("Data fetch nahi ho saka:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-content">
                <div className="content-header">
                    <h1>Student Requests</h1>
                    <p>Manage and review all incoming assignment tasks</p>
                </div>

                {loading ? (
                    <div className="loader-container">Fetching Requests...</div>
                ) : (
                    <div className="table-container">
                        <table className="request-table">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Subject</th>
                                    <th>Type</th>
                                    <th>Deadline</th>
                                    <th>Level</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((item) => (
                                    <tr key={item._id}>
                                        <td>
                                            <div className="student-info">
                                                <span className="name">{item.studentName}</span>
                                                <span className="phone">{item.phoneNumber}</span>
                                            </div>
                                        </td>
                                        <td>{item.subjectArea}</td>
                                        <td><span className={`badge ${item.assignmentType}`}>{item.assignmentType}</span></td>
                                        <td className="deadline-cell">
                                            {new Date(item.deadline).toLocaleDateString('en-GB')}
                                        </td>
                                        <td>{item.academicLevel}</td>

                                        <td>
                                            <a
                                                href={`https://wa.me/${item.phoneNumber.replace(/\D/g, '')}`}
                                                target="_blank"
                                                className="whatsapp-btn"
                                            >
                                                Chat
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {requests.length === 0 && <p className="no-data">No requests found.</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestPage;