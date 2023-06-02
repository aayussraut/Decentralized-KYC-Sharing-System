import React from "react";
import { logout } from "../../helpers/authentication";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="ps-3">
        <a className="navbar-brand" href="/">
          Bank
        </a>
      </div>
      <div className="navbar-nav ms-auto me-3">
        <div className="navbar-nav">
          <div className="nav-item">
            <form onSubmit={logout}>
              <button className="btn btn-danger">Logout</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
