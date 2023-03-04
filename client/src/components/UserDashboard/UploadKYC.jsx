import React from "react";
import Multistepform from "../Form/multistep-form/components/Multistepform.jsx";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";
// import

const UploadKYC = () => {
  const kyc = JSON.parse(localStorage.getItem("KYC"));

  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          {kyc["first_name"] !== "" && (
            <div className="mx-auto col-xl-7">
              <div className=" m-5 card border-warning text-bg-light form-box">
                <h5 className="card-header">Upload KYC</h5>
                <div className="card-body">
                  <h5 className="card-title">
                    You have already submitted your KYC information.
                  </h5>
                  <p className="card-text">
                    You can check your KYC information from{" "}
                    <Link to="/user/mydetails">My Details</Link> Page.
                  </p>
                </div>
              </div>
            </div>
          )}
          {kyc["first_name"] == "" && (
            <div className="mx-auto col-xl-7">
              <Multistepform />
            </div>
          )}
        </div>
      </>
    </div>
  );
};
export default UploadKYC;
