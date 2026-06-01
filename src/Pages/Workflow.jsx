import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Workflow.css"

function WorkflowLogs() {

  const [logs, setLogs] = useState([]);
  const API_URL = "https://workflow-management-system-o317.onrender.com";

  useEffect(() => {
    axios.get(`${API_URL}/logs`)
      .then((res) => {
        setLogs(res.data);
      });
  }, []);

  return (
    <div className="logs-container">
      <h1>Workflow Logs</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Old Status</th>
            <th>New Status</th>
            <th>Changed By</th>
            <th>Date & Time</th>
          </tr>
        </thead>

        <tbody>
  {logs.map((log, index) => (
    <tr key={index}>
      <td>{log.requestId}</td>

      <td>
        <span className={`status ${log.oldStatus}`}>
          {log.oldStatus}
        </span>
      </td>

      <td>
        <span className={`status ${log.newStatus}`}>
          {log.newStatus}
        </span>
      </td>

      <td>{log.changedBy}</td>

      <td>
        {log.changedDate
          ? log.changedDate.replace("T", " ")
          : "-"}
      </td>

    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default WorkflowLogs;