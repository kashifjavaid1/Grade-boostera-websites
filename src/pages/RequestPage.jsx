import Sidebar from "../components/Sidebar/Sidebar";

const RequestPage = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-content">
                <h1>Create New Request</h1>

                <form className="request-form">
                    <input type="text" placeholder="Subject" required />
                    <select>
                        <option>Assignment</option>
                        <option>Quiz</option>
                        <option>Presentation</option>
                    </select>
                    <textarea placeholder="Describe your requirement"></textarea>
                    <button type="submit">Submit Request</button>
                </form>
            </div>
        </div>
    );
};

export default RequestPage;
