import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./home.css";
// import Add from "../../images/add.png";
// import Request from "../../images/access.png";
// import Search from "../../images/search.png";
// import { Link, useLocation } from "react-router-dom";
import { AiOutlineFileAdd, AiOutlineFileSearch } from "react-icons/ai"
import { MdOutlineContacts } from "react-icons/md"
import { RxActivityLog } from "react-icons/rx"



const BankDashboard = () => {
  return (
    <div>
      <div className="p-3 text-center">
        <h1>Decentralized KYC System</h1>
      </div>
      <div>
        <Navbar />
      </div>
      <main className="  Home--main mx-auto">
        <div className=" mx-auto  main--container">
          <div className="main--contents ">
            <div className="action--cards d-flex flex-xl-row justify-content-xl-between flex-column">

              <Link className="nav-link fw-bold " to="/nrb/requestaccess">
                <div className="action--card--item">
                  <div className="action--card--icon">
                    <MdOutlineContacts size={56} className="me-2" />

                    {/* <img src={Request} alt="Request Access" /> */}
                  </div>
                  <p className="action--card--title">Request Access</p>
                </div>
              </Link>

              <Link className="nav-link fw-bold" to="/nrb/addrecords">
                <div className="action--card--item">
                  <div className="action--card--icon">
                    {/* <img src={Add} alt="Add Records" /> */}
                    <AiOutlineFileAdd size={56} className="me-2 text-dark" />


                  </div>
                  <p className="action--card--title">Add Records</p>
                </div>
              </Link>
              <Link className="nav-link fw-bold" to="/nrb/allrecords">
                <div className="action--card--item ">
                  <div className="action--card--icon">
                    <AiOutlineFileSearch size={56} className="me-2" />

                    {/* <img src={Search} alt="search records" /> */}
                  </div>
                  <p className="action--card--title ">All Records</p>
                </div>
              </Link>
              <Link className="nav-link fw-bold " to="/nrb/recentrequest">
                <div className="action--card--item">
                  <div className="action--card--icon">
                    <RxActivityLog size={56} className="me-2" />

                    {/* <img src={Request} alt="Request Access" /> */}
                  </div>
                  <p className="action--card--title">Recent Request</p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </main>

      <div className="mt-auto">
        <footer className="fixed-bottom bg-light text-black">
          <div className="footer--content ">
            <p>Â© FYP 2023. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </div>

  );
};

export default BankDashboard;