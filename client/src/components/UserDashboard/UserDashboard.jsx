import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import "./home.css";
import Details from "../../images/personal.png";
import Upload from "../../images/upload.png";
import Grant from "../../images/grant.png";
import Check from "../../images/check-status.png";
import { KycContext } from "../../context/KycContext";
import { Link } from "react-router-dom";
const UserDashboard = () => {
  const { getOwnData } = React.useContext(KycContext);
  useEffect(() => {
    getOwnData();
  }, []);
  // console.log(user.username);
  return (
    // <div>
    //   <div>
    //     <Navbar />
    //   </div>
    //   <div>
    //     <Sidebar />
    //   </div>
    // </div>
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
              {/* <div className="shadow text-center w-75 p-3  bg-secondary bg-opacity-25 rounded ">
                <div className="  card-body">
                  <img src={Details} alt="My details" />
                  <h5 className="card-title">Card title</h5>

                  <a href="#" class="btn btn-primary">
                    Button
                  </a>
                </div>
              </div> */}
              <b>
                <Link className="nav-link" to="/user/mydetails">
                  <div className="action--card--item mb-4">
                    <div className="action--card--icon">
                      <img src={Details} alt="My details" />
                    </div>
                    <p className="action--card--title">Personal Details</p>
                  </div>
                </Link>
                <Link className="nav-link" to="/user/uploadkyc">
                  <div className="action--card--item mb-4">
                    <div className="action--card--icon">
                      <img src={Upload} alt="Upload KYC" />
                    </div>
                    <p className="action--card--title">Upload KYC</p>
                  </div>
                </Link>
                <Link className="nav-link" to="/user/checkrequest">
                  <div className="action--card--item mb-4">
                    <div className="action--card--icon">
                      <img src={Grant} alt="Grant access" />
                    </div>
                    <p className="action--card--title">Grant/Revoke Access</p>
                  </div>
                </Link>
              </b>
              {/* <div className="action--card--item">
                <div className="action--card--icon">
                  <img src={Check} alt="check status" />
                </div>
                <p className="action--card--title">Report a problem</p>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      <div className="mt-auto">
        <footer className="fixed-bottom bg-light text-black">
          <div className="footer--content ">
            <p>© FYP 2023. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default UserDashboard;
