import React, { useEffect } from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import formFields from "../Form/multistep-form/components/Pages/formFields.json";
import MyDetailsForm from "../Form/mydetails-form/MydetailsForm";
import { KycContext } from "../../context/KycContext";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getData, getDataById } from "../../api/auth";
export default function AllRecords() {
    const { isLoading, directRequest, userKYC, setUserKYC } =
        React.useContext(KycContext);
    const [data, setData] = React.useState([]);
    const [accountNumber, setAccountNumber] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [searchData, setSearchData] = React.useState(null);

    const [openPopup, setOpenPopup] = useState(false);



    useEffect(() => {
        setUserKYC({});
        getData().then((res) => {
            // console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            setData([]);
            // console.log(err.res.data.errorMessage);
            setErrorMsg(err.response.data.errorMessage);
        });


    }, [0]);

    // useEffect(() => {
    //     console.log("accountNumber", accountNumber);
    //     getDataById(accountNumber).then((res) => {
    //         console.log("data", res.data);
    //         setSearchData(res.data);
    //     }).catch((err) => {
    //         setErrorMsg(err.response.data.errorMessage);
    //     });
    // }, [accountNumber])

    // console.log(data);

    const handleChange = (e) => {
        getDataById(e.target.value).then((res) => {
            setErrorMsg("");
            // console.log("res", res);
            // console.log("data", res.data);
            // console.log(res.data);
            setSearchData(res.data);
        }).catch((err) => {
            setSearchData(null);
            setErrorMsg(err.response.data.errorMessage);
        });

        setAccountNumber(e.target.value);
        { e.target.value === "" && setSearchData(null) }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(accountNumber);
        getDataById(accountNumber).then((res) => {
            setErrorMsg("");

            // console.log(res.data);
            // console.log(res);
            setSearchData(res.data);
        }
        ).catch((err) => {
            setSearchData(null);

            // console.log(err.response.data.errorMessage);
            setErrorMsg(err.response.data.errorMessage);
        });
        // console.log(searchData);
    }

    const handleButtonClick = (user_address) => {
        directRequest(user_address)
        console.log(user_address);
        setOpenPopup(true);
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
    }


    // console.log(data);
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
                        <div className=" m-3  p-2">
                            <div>
                                {isLoading && (
                                    <div
                                        className="alert alert-warning alert-dismissible fade show"
                                        role="alert"
                                    >
                                        Requesting....
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                )}
                                {

                                }
                            </div>
                            <div>
                                <form className="form" onSubmit={handleSubmit}>
                                    {/* <label className="form-label">Search</label> */}
                                    <div className="d-flex">
                                        <input type="text" className="form-control me-3" placeholder="Search by Account Number" name="accountNumber" onChange={handleChange} />
                                        <button className="btn btn-primary ">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <table className="m-2 ms-0 table table-bordered text-center text-bg-light">
                                    <thead>
                                        <tr>
                                            <th>Account Number</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th> Request</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {accountNumber && errorMsg &&

                                            <tr >
                                                <th colSpan="3">{errorMsg}</th>
                                            </tr>

                                        }
                                        {console.log("accountNo", accountNumber)}
                                        {/* {console.log(searchData)} */}
                                        {/* {console.log("accountno:", accountNumber, " searchData", searchData)} */}
                                        {!accountNumber == "" && searchData != null && searchData.map((item, index) => {
                                            console.log("item", item);
                                            return (
                                                <tr key={index}>
                                                    <td>{item.account_no}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.user_address}</td>
                                                    {/* <td>{<PopupModal />}</td> */}

                                                    <td><button type="button" className="btn btn-primary" onClick={() => handleButtonClick(item.user_address)}>Request</button></td>
                                                </tr>
                                            );
                                        })}

                                        {/* { <tr >
                                               <td>{searchData.account_no}</td>
                                                <td>{searchData.name}</td>
                                               <td>{searchData.user_address}</td>

                                             </tr>} */}


                                        {/* {console.log("accountno:", accountNumber, " searchData", searchData)} */}
                                        {accountNumber == "" && data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.account_no}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.user_address}</td>
                                                    {/* <td>{<PopupModal />}</td> */}

                                                    <td>{!isLoading && <button type="button" className="btn btn-primary" onClick={() => handleButtonClick(item.user_address)}>Request</button>}{isLoading && <button type="button" className="btn btn-primary" onClick={() => handleButtonClick(item.user_address)} disabled>Request</button>}</td>
                                                </tr>
                                            );
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {console.log("first_name", userKYC["first_name"])}
                        <Popup open={(userKYC["first_name"] !== undefined && userKYC["first_name"] != "") ? true : false} onClose={handleClosePopup} modal>
                            <div style={{ backgroundColor: '#f0f0f0', overflow: 'auto', maxHeight: '80vh', width: "700px" }} className="mx-auto">
                                <div className=" p-2 ">
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
                                <button onClick={handleClosePopup}>Close</button>
                            </div>
                        </Popup>

                    </div>
                </div>
            </div>
        </>
    )
}