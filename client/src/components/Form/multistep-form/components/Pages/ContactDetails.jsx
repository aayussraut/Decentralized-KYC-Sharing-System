import React from "react";
import FormInput from "../FormInput";
import formField from "./formFields.json";
// import FormSelect from "../components/FormSelect";
export default function ContactDetails({
  formData,
  handleChange,
  checked,
  setChecked,
}) {
  return (
    <>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Applicant's Permanent Address</legend>
        {/* {console.log(formField[2].co)} */}
        {formField[2].contact_details.map((field, index) => (
          <FormInput
            key={index}
            label={field.label}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange(field.name)}
            required={field.required ? true : false}
          />
        ))}
      </fieldset>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Applicant's Temporary Address</legend>
        <div className="d-flex mb-3 ">
          {console.log("checked", checked)}
          <input
            type="checkbox"
            checked={checked}
            // value={checked}
            onChange={() => {
              setChecked((prevValue) => {
                // console.log("prevvalue", prevValue);
                return prevValue ? false : true;
              });
              // console.log("checked", checked);
            }}
          />
          <div className="ms-3">Copy Permanent Address</div>
        </div>
        {formField[3].temp_contact_details.map((field, index) => (
          console.log(field.name, formData[field.name]),
          < FormInput
            key={index}
            label={field.label}
            type={field.type}
            name={field.temp_name}
            value={checked ? formData[field.name] : formData[field.temp_name]}
            onChange={handleChange(field.temp_name)}
            required={field.required ? true : false}
          />
        ))}
      </fieldset>
    </>
  );
}
