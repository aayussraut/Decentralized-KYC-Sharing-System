import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import { KycContext } from "../../context/KycContext";
export default function CheckRequest() {
  const { checkRequest, checkBankRequest, grantAccess, denyAccess, isLoading } =
    useContext(KycContext);
  // console.log(checkRequest);
  useEffect(() => {
    checkRequest();
  }, []);
  useEffect(() => {

  }, [isLoading]);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="  mx-auto col-xl-7 ">
          {!checkBankRequest && (
            <div className=" m-5 card border-warning text-bg-light form-box">
              <h5 className="card-header">Grant/Revoke Access</h5>
              <div className="card-body">
                <h5 className="card-title">
                  Currently, there are no requests for access to your data from
                  any banking institution.
                </h5>
                <p className="card-text">
                  If you have previously provided your public address to any
                  banking institution, they are required to request your
                  permission prior to accessing your data. Any such requests
                  will be displayed on this platform for your review and
                  approval.
                </p>
              </div>
            </div>
          )}
          {checkBankRequest && isLoading && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              Please wait ....
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}

          {checkBankRequest && (
            <form>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Bank</th>
                    <th>Access Grant</th>
                    <th>Access Denied</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Nepal Rastra Bank</td>
                    <td>
                      <div>
                        {!isLoading && <button
                          type="button"
                          onClick={grantAccess}
                          className="btn btn-primary"
                        >
                          Access
                        </button>}
                        {isLoading && <button
                          type="button"
                          onClick={grantAccess}
                          className="btn btn-primary"
                          disabled
                        >
                          Access
                        </button>}
                      </div>
                    </td>
                    <td>
                      <div>
                        {!isLoading && <button
                          type="button"
                          onClick={denyAccess}
                          className="btn btn-primary"
                        >
                          Deny
                        </button>}
                        {isLoading && <button
                          type="button"
                          onClick={denyAccess}
                          className="btn btn-primary"
                          disabled
                        >
                          Deny
                        </button>}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
