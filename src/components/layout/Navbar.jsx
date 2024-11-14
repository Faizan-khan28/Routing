import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="navbar_start">
        <nav className="navbar navbar-expand-lg  p-4">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              My Brand
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link className="btn btn-outline-primary" to="/user/add">
              Add User
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
