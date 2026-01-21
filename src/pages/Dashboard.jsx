import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiFileText, FiCheckCircle, FiClock } from "react-icons/fi";
import axios from 'axios';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });

    const chartData = [
        { day: 'Mon', count: 4 }, { day: 'Tue', count: 7 },
        { day: 'Wed', count: 5 }, { day: 'Thu', count: 12 },
        { day: 'Fri', count: 9 }, { day: 'Sat', count: 15 },
        { day: 'Sun', count: 10 },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/requests/all");
                if (res.data.success) {
                    const allData = res.data.data;
                    setRequests(allData.slice(0, 6)); // Top 6 for dashboard

                    setStats({
                        total: allData.length,
                        pending: allData.filter(r => r.status === 'pending' || !r.status).length,
                        completed: allData.filter(r => r.status === 'completed').length
                    });
                }
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-content">
                {/* Header Section */}
                <header className="content-header">
                    <div className="welcome-msg">
                        <h1>Welcome back, {user?.firstName || "Kashif"} 👋</h1>
                        <p>Here's what's happening with your orders today.</p>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="icon-box purple"><FiFileText /></div>
                        <div>
                            <span className="stat-label">Total Requests</span>
                            <h3 className="stat-value">{stats.total}</h3>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="icon-box orange"><FiClock /></div>
                        <div>
                            <span className="stat-label">Pending</span>
                            <h3 className="stat-value">{stats.pending}</h3>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="icon-box green"><FiCheckCircle /></div>
                        <div>
                            <span className="stat-label">Completed</span>
                            <h3 className="stat-value">{stats.completed}</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="dashboard-main-grid">
                    {/* Graph Card */}
                    <div className="card chart-card">
                        <div className="card-header">
                            <h3>Order Activity</h3>
                            <span className="timeframe">Last 7 Days</span>
                        </div>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={280}>
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#4338ca" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#4338ca" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                    <Area type="monotone" dataKey="count" stroke="#4338ca" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;