import React, {PropTypes} from 'react';

const TextInput = ({
  name,
  label,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          name={name}
          value={value}
          onChange={onChange}
          type="text"
          className="form-control"
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default TextInput;
