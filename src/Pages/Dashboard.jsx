import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Dashboard.css";

function Dashboard() {

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    axios.get("http://localhost:8080/requests")
      .then((res) => {
        setRequests(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load dashboard");
        setLoading(false);
      });

  }, []);

  const total = requests.length;

  const approved =
    requests.filter(r => r.status === "APPROVED").length;

  const rejected =
    requests.filter(r => r.status === "REJECTED").length;

  const submitted =
    requests.filter(r => r.status === "SUBMITTED").length;

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="dashboard-container">

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Requests</h3>
          <h2>{total}</h2>
        </div>

        <div className="card">
          <h3>Approved</h3>
          <h2>{approved}</h2>
        </div>

        <div className="card">
          <h3>Rejected</h3>
          <h2>{rejected}</h2>
        </div>

        <div className="card">
          <h3>Submitted</h3>
          <h2>{submitted}</h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;