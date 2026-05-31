import "../assets/Sidebar.css";

function Sidebar() {

  return (
    <div className="sidebar">

      <h2>Workflow</h2>

      <button>Dashboard</button>

      <button>Requests</button>

      <button>Logs</button>

      <button
        onClick={() => {
          localStorage.removeItem("role");
          window.location.reload();
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;