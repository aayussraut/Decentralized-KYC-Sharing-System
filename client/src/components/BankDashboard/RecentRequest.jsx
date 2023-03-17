import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { KycContext } from '../../context/KycContext';
import { getRecentData, getDataById } from "../../api/auth";

export default function RecentRequest() {
    // const [status, setStatus] = React.useState([]);
    const { getRecentRequest, requestStatus } =
        React.useContext(KycContext);

    const [data, setData] = React.useState([]);
    const [accountNumber, setAccountNumber] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [searchData, setSearchData] = React.useState({});

    useEffect(() => {

        getRecentData().then((res) => {
            // console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            // console.log(err.res.data.errorMessage);
            setErrorMsg(err.response.data.errorMessage);
        });


    }, [0]);

    useEffect(() => {
        data.map((item, index) => {

            return (

                getRecentRequest(item.user_address)


            );
        }), []
    });

    const handleChange = (e) => {
        getDataById(e.target.value).then((res) => {
            // console.log("res", res);
            // console.log("data", res.data);
            // console.log(res.data);
            setSearchData(res.data);
        }).catch((err) => {
            setErrorMsg(err.response.data.errorMessage);
        });

        setAccountNumber(e.target.value);
        { e.target.value === "" && setSearchData(null) }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(accountNumber);
        getDataById(accountNumber).then((res) => {
            // console.log(res.data);
            // console.log(res);
            setSearchData(res.data);
        }
        ).catch((err) => {
            // console.log(err.response.data.errorMessage);
            setErrorMsg(err.response.data.errorMessage);
        });
        // console.log(searchData);
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
                        <div className=" m-3  p-2">
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
                                            <th> Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {accountNumber && errorMsg &&

                                            <tr >
                                                <th colSpan="3">{errorMsg}</th>
                                            </tr>

                                        }
                                        {/* {console.log("accountno:", accountNumber, " searchData", searchData)} */}
                                        {accountNumber && searchData == null && searchData.map((item, index) => {


                                            <tr key={index}>
                                                <td>{item.account_no}</td>
                                                <td>{item.name}</td>
                                                <td>{item.user_address}</td>
                                                <td>{item[item.user_address] == "" ? "Processing" : requestStatus[item.user_address]}</td>


                                            </tr>
                                        })

                                        }
                                        {console.log(requestStatus)}
                                        {/* {console.log("accountno:", accountNumber, " searchData", searchData)} */}
                                        {!accountNumber && data.map((item, index) => {

                                            return (
                                                <tr key={index}>
                                                    <td>{item.account_no}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.user_address}</td>
                                                    {/* <td>{<PopupModal />}</td> */}

                                                    <td>{requestStatus[item.user_address] == "" ? "Processing" : requestStatus[item.user_address]}</td>
                                                </tr>
                                            );
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    );

}