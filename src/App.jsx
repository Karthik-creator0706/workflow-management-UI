import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateRequest from "./pages/CreateRequest";
import RequestList from "./pages/RequestList";
import WorkflowLogs from "./pages/Workflow";
import Sidebar from "./pages/Sidebar";

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