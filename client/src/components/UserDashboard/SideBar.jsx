import React from "react";
import { MdOutlineFileUpload, MdOutlineManageAccounts } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    // <nav className="col-md-2 bg-light bg-opacity-50 sidebar vh-100">
    <div className="col-md bg-light bg-opacity-50 sidebar vh-95  text-center">
      <div className="nav flex-column ">
        <div
          className={`nav-item ${
            location.pathname === "/user/mydetails" ? "bg-info txt-red" : ""
          }`}
        >
          {/* {console.log(location.pathname)} */}
          <b>
            <Link className="nav-link text-black" to="/user/mydetails">
              <BiDetail className="me-2" />
              My Details
            </Link>
          </b>
        </div>
        <hr className="m-0" />
        <div
          className={`nav-item ${
            location.pathname === "/user/uploadkyc" ? "bg-info txt-red" : ""
          }`}
        >
          {/* if () {} */}
          <b>
            <Link
              className="active nav-link text-black"
              aria-current="true"
              to="/user/uploadkyc"
            >
              <MdOutlineFileUpload className="me-2" />
              Upload KYC
            </Link>
          </b>
        </div>
        <hr className="m-0" />

        <div
          className={`nav-item ${
            location.pathname === "/user/checkrequest" ? "bg-info txt-red" : ""
          }`}
        >
          <b>
            <Link
              className=" active nav-link text-black"
              aria-current="true"
              to="/user/checkrequest"
            >
              <MdOutlineManageAccounts className="me-2" />
              Grant/Revoke Access
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
