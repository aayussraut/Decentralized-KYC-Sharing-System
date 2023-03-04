import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import MyDetailsForm from "../Form/mydetails-form/MydetailsForm";
import formFields from "../Form/multistep-form/components/Pages/formFields.json";
export default function MyDetails() {
  const kyc = JSON.parse(localStorage.getItem("KYC"));
  // console.log(kyc);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="mx-auto col-xl-7">
          {kyc["first_name"] == "" && (
            <div className=" m-5 card border-warning text-bg-light">
              <h5 className="card-header">My Details</h5>
              <div className="card-body">
                <h5 className="card-title">
                  We regret to inform you that we do not have any record of your
                  information
                </h5>
                <p className="card-text">
                  We store your data solely on the blockchain. If you have
                  previously submitted your KYC information, you may request it
                  by clicking <a href="">Here</a>. If you have not yet submitted
                  your KYC information, please do so by clicking on the
                  following link: <a href="">Click Here</a>.Thank you for
                  choosing our platform for your data storage needs.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Upload KYC
                </a>
                <a href="#" className="btn btn-primary">
                  Upload KYC
                </a> */}
              </div>
            </div>
          )}
          {kyc["first_name"] !== "" && (
            <div className="card p-2">
              <form>
                {formFields[0].applicant_data.map((field, index) => (
                  <MyDetailsForm
                    key={index}
                    label={field.label}
                    required={field.required}
                    name={field.name}
                    value={kyc[field.name]}
                  />
                ))}
                {formFields[1].additional_info.map((field, index) => (
                  <MyDetailsForm
                    key={index}
                    label={field.label}
                    required={field.required}
                    name={field.name}
                    value={kyc[field.name]}

                  />
                ))}
                {formFields[2].contact_details.map((field, index) => (
                  <MyDetailsForm
                    key={index}
                    label={field.label}
                    required={field.required}
                    name={field.name}
                    value={kyc[field.name]}

                  />
                ))}
                {/* {console.log(kyc["temp_village_tole"])} */}
                {kyc["temp_village_tole"] !== "" &&
                  formFields[3].temp_contact_details.map((field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Temp ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={kyc[field.name]}

                    />
                  ))}
                {formFields[4].family_details[0].father_details.map(
                  (field, index) => (
                    <MyDetailsForm
                      key={index}
                      label={`Father ${field.label}`}
                      required={field.required}
                      name={field.name}
                      value={kyc[field.name]}

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
                      value={kyc[field.name]}

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
                      value={kyc[field.name]}

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
                      value={kyc[field.name]}

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
                      value={kyc[field.name]}

                    />
                  )
                )}
              </form>
            </div>
          )}
          {/* <Multistepform /> */}
        </div>
      </div>
    </div>
  );
}
