import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CreateRequest from "./Pages/CreateRequest";
import RequestList from "./Pages/RequestList";
import WorkflowLogs from "./Pages/Workflow";
import Sidebar from "./Pages/Sidebar";

import "../src/App.css"

function App() {

  const role = localStorage.getItem("role");

  console.log(role);

  return (
    <>
      {role && (
        <button
        className="logout-btn"
          onClick={() => {
            localStorage.removeItem("role");
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

    <div style={{ marginLeft: "240px" }}>
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