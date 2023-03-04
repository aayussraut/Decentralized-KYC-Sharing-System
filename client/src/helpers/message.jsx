import React from "react";

export const showSuccessMsg = (successMsg) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {successMsg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export const showErrorMsg = (errorMsg) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {errorMsg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
