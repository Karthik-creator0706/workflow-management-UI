import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/RequestList.css";

function RequestList() {

  const [requests, setRequests] = useState([]);
  const role = localStorage.getItem("role");
  const API_URL = "https://workflow-management-system-o317.onrender.com";

  const loadRequests = () => {
    axios.get(`${API_URL}/requests`)
      .then((res) => {
        setRequests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const approveRequest = (id) => {
    axios.put(`${API_URL}/requests/${id}/approve`)
      .then(() => {
        loadRequests();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectRequest = (id) => {
    axios.put(`${API_URL}/requests/${id}/reject`)
      .then(() => {
        loadRequests();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clarifyRequest = (id) => {
    axios.put(`${API_URL}/requests/${id}/clarify`)
      .then(() => {
        loadRequests();
      });
  };

  const closeRequest = (id) => {
    axios.put(`${API_URL}/requests/${id}/close`)
      .then(() => {
        loadRequests();
      });
  };

  const reopenRequest = (id) => {
    axios.put(`${API_URL}/requests/${id}/reopen`)
      .then(() => {
        loadRequests();
      });
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div className="request-container">
      <h1>All Requests</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.title}</td>
              <td>{request.category}</td>
              <td>{request.priority}</td>

              <td>
                <span className={`status ${request.status}`}>
                  {request.status}
                </span>
              </td>

              <td>

  {role === "MANAGER" && (
    <>
      <button
        className="approve-btn"
        onClick={() => approveRequest(request.id)}
      >
        Approve
      </button>

      <button
        className="reject-btn"
        onClick={() => rejectRequest(request.id)}
      >
        Reject
      </button>

      <button
        className="clarify-btn"
        onClick={() => clarifyRequest(request.id)}
      >
        Clarify
      </button>
    </>
  )}

  {role === "ADMIN" && (
    <>
      <button
        className="close-btn"
        onClick={() => closeRequest(request.id)}
      >
        Close
      </button>

      <button
        className="reopen-btn"
        onClick={() => reopenRequest(request.id)}
      >
        Reopen
      </button>
    </>
  )}

</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestList;