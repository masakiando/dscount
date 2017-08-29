import React, {PropTypes} from 'react';

const TextInput = ({
  name,
  label,
  value,
  onChange
}) => {
  return (
  <div>
      <label
        htmlFor={name}>{label}
      </label>
      <div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          type="text"
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
