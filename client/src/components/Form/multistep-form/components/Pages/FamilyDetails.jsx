import React from "react";
import formField from "./formFields.json";
import FormInput from "../FormInput.jsx";
export default function FamilyDetails({ formData, handleChange }) {
  return (
    <>
      {}
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Father's Details</legend>
        <>
          {formField[4].family_details[0].father_details.map((field, index) => (
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
        </>
      </fieldset>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Mother's Details</legend>
        <>
          {formField[4].family_details[1].mother_details.map((field, index) => (
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
        </>
      </fieldset>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">GrandFather's Details</legend>
        <>
          {formField[4].family_details[2].grandfather_details.map(
            (field, index) => (
              <FormInput
                key={index}
                label={field.label}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange(field.name)}
                required={field.required ? true : false}
              />
            )
          )}
        </>
      </fieldset>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Grandmother Details</legend>
        <>
          {formField[4].family_details[3].grandmother_details.map(
            (field, index) => (
              <FormInput
                key={index}
                label={field.label}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange(field.name)}
                required={field.required ? true : false}
              />
            )
          )}
        </>
      </fieldset>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Spouse Details</legend>
        <>
          {formField[4].family_details[4].spouse_details.map((field, index) => (
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
        </>
      </fieldset>
    </>
  );
}
