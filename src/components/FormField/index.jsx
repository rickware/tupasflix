import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 70vh;
  margin-left: 20vh;
`;
const FfLabel = styled.label`
`;
const FfInput = styled.input`
`;

function FormField({
  label, type, name, value, onChange
}) {
  const fieldId = `id_${name}`;

  return (
    <FormWrapper>
      <FfLabel
        htmlFor={fieldId}
      >
        {label}:
      </FfLabel>
      <FfInput
        id={fieldId}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </FormWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: ''
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default FormField;
