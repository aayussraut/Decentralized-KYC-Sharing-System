import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import formFields from "../Form/multistep-form/components/Pages/formFields.json";
import MyDetailsForm from "../Form/mydetails-form/MydetailsForm";

import { KycContext } from "../../context/KycContext";
export default function RequestUserKYC() {
  const { handleChange2, requestData, isLoading, requested, userKYC } =
    React.useContext(KycContext);
  // console.log(requested);
  // const [userKYC, setuserKYC] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    requestData();
  };

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
          <div className="mx-auto col-xl-7 mt-3">
            <div className=" m-5 card border-warning text-bg-light form-box">
              <h5 className="card-header">Request Data</h5>
              <div className="card-body">
                {!requested && <h5 className="card-title">
                  Before you access the records, ask the customer for the
                  permission
                </h5>}
                {requested && <h5 className="card-title">
                  Your request has been sent to the customer.Please wait for customer respond.
                </h5>}

                <div className="border rounded p-2 ">
                  <form onSubmit={handleSubmit}>
                    <label className="mb-2">
                      <b>Enter the address of Customer</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer Address"
                      onChange={handleChange2}
                      name="userAddress"
                    />
                    {!isLoading && (
                      <button className="btn btn-primary mt-2">
                        Request KYC
                      </button>
                    )}
                    {isLoading && (
                      <button
                        className="btn btn-primary mt-2"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        >
                          {" "}
                        </span>
                        Requesting...
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="card p-2 m-5">
              {/* {console.log("userKYC", userKYC)} */}
              <form>
                {formFields[0].applicant_data.map((field, index) => (
                  <MyDetailsForm
                    key={index}
                    label={field.label}
                    required={field.required}
                    name={field.name}
                    value={userKYC[field.name]}
                  />
                ))}
                {formFields[1].additional_info.map((field, index) => (
                  <MyDetailsForm
                    key={index}
                    label={field.label}
                    required={field.required}
                    name={field.name}
                    value={userKYC[field.name]}

                  />
                ))}
                {formFields[2].contact_details.map((field, index) => (
                  <MyDetailsForm
                    key={index}
                    label={field.label}
                    required={field.required}
                    name={field.name}
                    value={userKYC[field.name]}

                  />
                ))}
                {userKYC["temp_village_tole"] !== "" &&
                  formFields[3].temp_contact_details.map((field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Temp ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={userKYC[field.name]}

                    />
                  ))}
                {formFields[4].family_details[0].father_details.map(
                  (field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Father ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={userKYC[field.name]}

                    />
                  )
                )}
                {formFields[4].family_details[1].mother_details.map(
                  (field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Mother ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={userKYC[field.name]}

                    />
                  )
                )}
                {formFields[4].family_details[2].grandfather_details.map(
                  (field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Mother ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={userKYC[field.name]}

                    />
                  )
                )}
                {formFields[4].family_details[3].grandmother_details.map(
                  (field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Mother ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={userKYC[field.name]}

                    />
                  )
                )}
                {formFields[4].family_details[4].spouse_details.map(
                  (field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Mother ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={userKYC[field.name]}

                    />
                  )
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
