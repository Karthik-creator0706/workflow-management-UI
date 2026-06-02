import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CreateRequest from "./Pages/CreateRequest";
import RequestList from "./Pages/RequestList";
import WorkflowLogs from "./Pages/Workflow";
import Sidebar from "./Pages/Sidebar";

import "./App.css";

function App() {

  const role = localStorage.getItem("role");

  return (
    <>
      {role && (
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("role");
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      )}

      {!role && <Login />}

      {role === "USER" && <CreateRequest />}

      {role === "MANAGER" && <RequestList />}

      {role === "ADMIN" && (
        <>
          <Sidebar />

          <div className="main-content">
            <Dashboard />
            <RequestList />
            <WorkflowLogs />
          </div>
        </>
      )}
    </>
  );
}

export default App;