import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div className="formField">
      <label>
        {label}:
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}

export default FormField;
