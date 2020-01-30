import React from 'react'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { StyledTextField } from './styles'
import { Label } from '..'

function Textfield(props) {
  const { onChange, name, value, label, type, mask, fullWidth } = props
  return (
    <div>
      <Label isRequired={props.isRequired}> {label} </Label>
      <div>
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
