import React from "react";

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  onChange,
  value
}) => {
  return (
    <div className="fieldset w-full">
      <legend className="fieldset-legend text-sm text-black">{label}</legend>
      <input
        className="input w-full bg-white text-base-100 border-2 border-gray-200 focus:border-lime-400"
        name={name}
        type={type}
        placeholder={placeholder}
        // defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
      {/* <p className="label">Optional</p> */}
    </div>
  );
};

export default FormInput;
