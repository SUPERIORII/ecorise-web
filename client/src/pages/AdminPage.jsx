import React, { useRef } from "react";
import "../styles/admin.css";
const AdminPage = () => {
    const quickLinkRef = useRef(null)

    const showLinks =()=>{
        quickLinkRef.current.classList.toggle("show")
    }

    // window.onclick=(e)=>{
    //     if(!quickLinkRef.current.classList.contains(e.target.value)){
    //         quickLinkRef.current.classList.remove("show");

    //     }
    // }
  return (
    <aside className="egi-component">
      {/* <!-- Dashboard Content --> */}
      <div className="content" id="content">
        {/* <!-- Dashboard Header --> */}
        <div className="dashboard-header">
          <div className="dashboard-title">Dashboard</div>
          <div style={{ position: "relative" }}>
            <button
              style={{
                padding: "8px 16px",
                background: "#e50914",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer",
              }} onClick={showLinks} >
              Add New Content
            </button>

            {/* <!--Quick Links */}
            <div class="quick-links" ref={quickLinkRef}>
              <ul>
                <li>
                  <a href="#projects/add">Add New Project</a>
                </li>
                <li>
                  <a href="#users">Manage Users</a>
                </li>
                <li>
                  <a href="#news/create">Create News Post</a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Stats Widgets --> */}
        <div className="cards-grid">
          {/* <!-- Total Contents --> */}
          <div className="card">
            <div className="card-header">Total Contents</div>
            <div className="card-content">
              <h2>1,245</h2>
              <p>News, Projects & Resources</p>
            </div>
          </div>
          {/* <!-- Active Users --> */}
          <div className="card">
            <div className="card-header">Active Users</div>
            <div className="card-content">
              <h2>12,345</h2>
              <p>Currently Online</p>
            </div>
          </div>

          {/* <!-- Total Users --> */}
          <div className="card">
            <div className="card-header">Total Users</div>
            <div className="card-content">
              <h2>12,345</h2>
              <p>Registered on Platform</p>
            </div>
          </div>
        </div>

        {/* <!-- Recent Activity & Charts (placeholder sections) --> */}
        <div style={{ marginTop: "30px" }}>
          <h2 style={{ marginBop: "15px" }}>Recent Activity</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div
              style={{
                flex: 1,
                minWidth: "300px",
                background: "#222",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>Latest Uploads</h3>
              <ul>
                <li>Movie A - Uploaded 2 hrs ago</li>
                <li>Show B - Uploaded 1 day ago</li>
                <li>Movie C - Uploaded 3 days ago</li>
              </ul>
            </div>
            <div
              style={{
                flex: 1,
                minWidth: "300px",
                background: "#222",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>User Signups</h3>
              <canvas id="signupsChart" height="200"></canvas>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminPage;
