import React from 'react'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { StyledTextField } from './styles'
import { Label } from '..'

function TextField(props) {
  const { label, fullWidth } = props
  return (
    <div>
      <Label isRequired={props.isRequired}> {label} </Label>
      <div>
        <InputMask {...props}>
          {inputProps => (
            <StyledTextField fullWidth={fullWidth} {...inputProps} />
          )}
        </InputMask>
      </div>
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string
}

TextField.defaultProps = {
  fullWidth: false,
  type: 'text'
}

export default TextField
