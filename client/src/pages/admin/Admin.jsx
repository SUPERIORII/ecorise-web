import React from "react";

import styled from "styled-components";
import { BiUser, BiExport, BiNews } from "react-icons/bi";

const AdminSection = styled.section`
  .dashboard-overview {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }

  .overview-card {
    background-color: var(--white-100);
    padding: 0.2rem;
    max-width: 1000px;
    width: 100%;
    height: 200px;
    border-radius: 20px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .overview-card h3 {
    font-size: 20px;
    text-transform: capitalize;
  }
  .overview-card p {
    font-size: 20px;
    text-transform: capitalize;
    color: var(--color-primary);
    font-weight: bold;
  }

  .dashboard-icon {
    font-size: 90px;
    color: var(--color-primary);
  }
`;
const AdminDashboard = () => {
  return (
    <div>
      {/* admin content */}

      <div className="dashboard">
     

        <AdminSection>
          <section id="dashboard">
            <h2>Dashboard</h2>
            {/* <!-- Key Metrics Section --> */}
            <div className="dashboard-overview">
              <div className="overview-card">
                <h3>Active Users</h3>
                <BiUser className="dashboard-icon" />
                <p>123</p>
              </div>
              <div className="overview-card">
                <h3>New Projects (Week)</h3>
                <BiExport className="dashboard-icon" />
                <p>15</p>
              </div>
              <div className="overview-card">
                <h3>Recent News Posts</h3>
                <BiNews className="dashboard-icon" />

                <p>5</p>
              </div>
              {/* <!-- Add more metric cards as needed --> */}
            </div>

            {/* <!-- Recent Activity Section --> */}
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <ul>
                <li>User "John Doe" registered.</li>
                <li>Project "Eco-Friendly Initiative" submitted.</li>
                <li>News article "New Partnership Announced" published.</li>
                {/* <!-- Add more recent activity items --> */}
              </ul>
            </div>

            {/* <!-- Quick Links Section --> */}
            <div className="quick-links">
              <h3>Quick Links</h3>
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
          </section>

          <section id="users">
            <h2>User Management</h2>
            {/* <!-- User List Table --> */}
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Username/Email</th>
                  <th>Role</th>
                  <th>Registration Date</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>user1@example.com</td>
                  <td>User</td>
                  <td>2023-01-15</td>
                  <td>2024-03-10</td>
                  <td>
                    <a href="#users/1/edit">Edit</a> |
                    <a href="#users/1/suspend">Suspend</a>
                  </td>
                </tr>
                {/* <!-- Add more user rows --> */}
              </tbody>
            </table>
            <button>Add New User</button>
          </section>

          <section id="projects">
            <h2>Project Management</h2>
            {/* <!-- Project List Table --> */}
            <table>
              <thead>
                <tr>
                  <th>Project ID</th>
                  <th>Project Name</th>
                  <th>Creator</th>
                  <th>Status</th>
                  <th>Creation Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Coastal Cleanup</td>
                  <td>Jane Smith</td>
                  <td>Approved</td>
                  <td>2024-02-20</td>
                  <td>
                    <a href="#projects/101/view">View</a> |
                    <a href="#projects/101/edit">Edit</a> |
                    <a href="#projects/101/status">Change Status</a>
                  </td>
                </tr>
                {/* <!-- Add more project rows --> */}
              </tbody>
            </table>
            <button>Add New Project</button>
          </section>

          <section id="news">
            <h2>News Management</h2>
            {/* <!-- News List Table --> */}
            <table>
              <thead>
                <tr>
                  <th>Article ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Publication Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>201</td>
                  <td>New Initiative Launched</td>
                  <td>Admin User</td>
                  <td>2024-03-11</td>
                  <td>Published</td>
                  <td>
                    <a href="#news/201/edit">Edit</a> |
                    <a href="#news/201/unpublish">Unpublish</a>
                  </td>
                </tr>
                {/* <!-- Add more news rows --> */}
              </tbody>
            </table>
            <button>Create New Article</button>
          </section>

          <section id="resources">
            <h2>Resource Management</h2>
            {/* <!-- Resource List Table --> */}
            <table>
              <thead>
                <tr>
                  <th>Resource ID</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Upload Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>301</td>
                  <td>Ecosystem Report 2023</td>
                  <td>Document</td>
                  <td>Reports</td>
                  <td>2024-01-05</td>
                  <td>
                    <a href="#resources/301/edit">Edit</a> |
                    <a href="#resources/301/delete">Delete</a>
                  </td>
                </tr>
                {/* <!-- Add more resource rows --> */}
              </tbody>
            </table>
            <button>Upload New Resource</button>
          </section>

          <section id="settings">
            <h2>Settings</h2>
            {/* <!-- Basi</section>c settings form --> */}
            <form>
              <label for="site-name">Site Name:</label>
              <input
                type="text"
                id="site-name"
                name="site-name"
                value="My Ecosystem"
              />

              <label for="contact-email">Contact Email:</label>
              <input
                type="email"
                id="contact-email"
                name="contact-email"
                value="info@myecosystem.com"
              />

              <button type="submit">Save Settings</button>
            </form>
          </section>

          <section id="profile">
            <h2>My Profile</h2>
            {/* <!-- Admin user's profile information --> */}
            <p>Username: admin_user</p>
            <p>Email: admin@example.com</p>
            <button>Edit Profile</button>
            <button>Change Password</button>
          </section>
        </AdminSection>

        <footer>
          <p>&copy; 2024 My Ecosystem Admin Panel</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;
