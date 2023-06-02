import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { logout } from "../../helpers/authentication";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { username } = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const handleLogout = (e) => {
    logout();
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="ps-3">
        <a className="navbar-brand" href="/">
          Home
        </a>
      </div>
      {/* <div className="ps-3">
        <a className="navbar-brand" href="/">
          How to use
        </a>
      </div> */}
      <div className="navbar-nav ms-auto me-3 d-flex ">
        <div className="navbar-nav ml-auto">
          <div className="nav-item">
            <span className="nav-link">{username}</span>
          </div>
          <div className="nav-item">
            <form onSubmit={handleLogout}>
              <button className="btn btn-danger">
                Logout
                <MdOutlineLogout className="ms-2" />
              </button>
            </form>
            {/* <a className="btn btn-danger" href="/logout">
              Logout
              <MdOutlineLogout className="ms-2" />
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
