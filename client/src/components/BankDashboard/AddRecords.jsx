import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
// import { KycContext } from "../../context/KycContext";
import { addData } from "../../api/auth"
export default function RequestUserKYC() {


  const [userDetails, setUserDetails] = useState({
    name: "",
    account_no: "",
    user_address: "",
    successMsg: "",
    errorMsg: "",
    loading: false,

  })

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, account_no, user_address } = userDetails;
    const user_info = { name, account_no, user_address };
    addData(user_info)
      .then((response) => {
        console.log(response);
        setUserDetails({
          name: "",
          account_no: "",
          user_address: "",
          successMsg: response.data.successMessage,
          errorMsg: "",
        });
      })
      .catch((error) => {
        console.log(error.response);
        setUserDetails({
          ...userDetails,
          errorMsg: error.response.data.errorMessage,
        });
      });
  }


  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className="mx-auto col-xl-7 ">
            <div className="m-3">
              {userDetails.errorMsg && showErrorMsg(userDetails.errorMsg)}
              {userDetails.successMsg && showSuccessMsg(userDetails.successMsg)}
            </div>
            <div className=" m-3 card border-warning text-bg-light">
              <h5 className="card-header">Add Data</h5>
              <div className="card-body">
                <h5 className="card-title">
                  Add user details to the database
                </h5>

                <div className="border rounded p-2 ">
                  <form onSubmit={handleSubmit}>
                    <label className="mb-2">
                      <b>Enter the account number of customer.</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer account number (0120....xx)"
                      onChange={handleChange}
                      name="account_no"
                    />
                    <label className="mb-2">
                      <b>Enter the name of customer</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer Name"
                      onChange={handleChange}
                      name="name"
                    />
                    <label className="mb-2">
                      <b>Enter the address of Customer</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer Address (0..........50f1)"
                      onChange={handleChange}
                      name="user_address"
                    />

                    <button className="btn btn-primary mt-2">
                      Add Data
                    </button>


                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

