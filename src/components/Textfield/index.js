import React from 'react'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { StyledTextField, StyledLabel } from './styles'

function Textfield(
  onChange,
  name,
  value,
  label,
  type,
  mask,
  fullWidth,
  ...props
) {
  return (
    <div>
      <StyledLabel>
        {label} {props.isRequired ? '*' : ''}
      </StyledLabel>
      <div>
        {mask ? (
          <InputMask
            mask={mask}
            value={value}
            name={name}
            type={type}
            onChange={onChange}
          >
            {inputProps => (
              <StyledTextField fullWidth={fullWidth} {...inputProps} />
            )}
          </InputMask>
        ) : (
          <StyledTextField
            {...props}
            fullWidth={fullWidth}
            name={name}
            value={value}
            type={type}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  )
}

Textfield.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string
}

Textfield.defaultProps = {
  fullWidth: false,
  type: 'text'
}

export default Textfield
