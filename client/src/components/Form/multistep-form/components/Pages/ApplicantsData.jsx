import React from "react";
import FormInput from "../FormInput";
import formField from "./formFields.json";
import FormSelect from "../FormSelect";
export default function ApplicantsData({ formData, handleChange }) {
  return (
    <>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Main Applicant Data</legend>
        {/* {console.log(formField[0].applicant_data)} */}
        {formField[0].applicant_data.map((field, index) => (
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
        <legend className="w-auto px-2 ">Additional Inforation</legend>
        {/* {console.log(formField[0].applicant_data)} */}
        {formField[1].additional_info.map((field, index) => (
          <FormSelect
            key={index}
            label={field.label}
            // type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange(field.name)}
            option={field.option}
            required={field.required ? true : false}
          />
        ))}
      </fieldset>
    </>
  );
}
