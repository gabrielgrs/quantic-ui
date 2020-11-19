import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { StyledTextarea } from './styles'
import Label from '../Label'
import InputError from '../InputError'

const TextArea = forwardRef((props, ref) => {
  const { onChange, value, label, type, name, error, ...rest } = props

  return (
    <div>
      <Label isRequired={rest.isRequired}> {label} </Label>
      <StyledTextarea {...rest} ref={ref} key={name} name={name} value={value} type={type} onChange={onChange} />
      <InputError>{error}</InputError>
    </div>
  )
})

TextArea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
}

TextArea.defaultProps = {
  onChange: () => null,
  isRequired: false,
  value: undefined,
  label: undefined,
  type: 'text',
  error: undefined,
}

export default TextArea
