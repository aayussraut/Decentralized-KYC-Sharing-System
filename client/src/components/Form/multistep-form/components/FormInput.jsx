import React from "react";

const FormInput = ({ label, type, name, value, onChange, required }) => {
  return (
    // console.log(name + ":" + value),
    <div className="row mb-3 ">
      <label htmlFor={name} className="col-sm-2 col-form-label">
        <div className="d-flex">
          <div>{label}</div>
          <div className="text-danger">{required ? "*" : ""}</div>
        </div>
      </label>
      <div className="col-sm-9">
        {/* {console.log(name + ":" + required1)} */}
        {required ? (
          <input
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            id={name}
            type={type}
            required
          />
        ) : (
          <input
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            id={name}
            type={type}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
