import React, { forwardRef, useState } from 'react'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { StyledTextField, FieldWrapper, EyeIcon } from './styles'
import Label from '../Label'
import InputError from '../InputError'

function TextField(props, ref) {
  const { label, fullWidth, error, required, type } = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <Label required={required}>{label}</Label>
      <FieldWrapper>
        <InputMask type={type} {...props}>
          {(inputProps) => (
            <>
              <StyledTextField
                {...props}
                fullWidth={fullWidth}
                {...inputProps}
                type={showPassword ? 'text' : type}
                ref={ref}
              />
            </>
          )}
        </InputMask>
        {type === 'password' && (
          <EyeIcon
            onClick={() => setShowPassword(!showPassword)}
            name={showPassword ? 'FiEye' : 'FiEyeOff'}
            category="feather"
          />
        )}
      </FieldWrapper>
      <InputError>{error}</InputError>
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
}

TextField.defaultProps = {
  fullWidth: false,
  required: false,
  error: undefined,
  type: 'text',
  name: undefined,
  label: undefined,
}

export default forwardRef(TextField)
