import React from 'react';
import styled from 'styled-components';

interface InputProps {hasValue?: boolean;}
const Input = styled.input<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;

interface FormFieldProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: "text" | "color";
}

const FormField = ({ label, name, onChange, type, value }: FormFieldProps): JSX.Element => {
//export function FormField({ label, name, onChange, type, value }: FormFieldProps): JSX.Element {
  return (
    <div className="formField">
      <label>
        <span>{label}:</span>
      </label>
      <Input name={name} type={type} onChange={onChange} value={value} />
    </div>
  );
}

export default FormField;