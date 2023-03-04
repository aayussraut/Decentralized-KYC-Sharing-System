import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineFileAdd, AiOutlineFileSearch } from "react-icons/ai"
import { MdOutlineContacts } from "react-icons/md"
const Sidebar = () => {
  const location = useLocation();

  return (
    // <nav className="col-md-2 bg-light bg-opacity-50 sidebar vh-100">
    <div className="col-md bg-light bg-opacity-50 sidebar vh-95   text-center text-danger">
      <div className="nav flex-column  ">
        <div
          className={`nav-item ${location.pathname === "/nrb/requestaccess" ? "bg-info " : ""
            }`}
        >
          <b>
            <Link className="nav-link text-black" to="/nrb/requestaccess">
              <MdOutlineContacts className="me-2" />
              Request Access
            </Link>
          </b>
        </div>
        <hr className="m-0" />
        <div
          className={`nav-item ${location.pathname === "/nrb/addrecords" ? "bg-info " : ""
            }`}
        >
          <b>
            <Link className="nav-link text-black" to="/nrb/addrecords">
              <AiOutlineFileAdd className="me-2" />
              Add Records
            </Link>
          </b>
        </div>
        <hr className="m-0" />
        <div
          className={`nav-item ${location.pathname === "/nrb/allrecords" ? "bg-info " : ""
            }`}
        >
          <b>
            <Link className="nav-link text-black" to="/nrb/allrecords">
              <AiOutlineFileSearch className="me-2" />
              All Records
            </Link>
          </b>
        </div>
        <hr className="m-0" />
      </div>
    </div>
    // </nav>
  );
};

export default Sidebar;
