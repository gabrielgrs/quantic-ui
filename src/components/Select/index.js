import React from 'react'
import PropTypes from 'prop-types'
import { StyledSelect, customStyles } from './styles'
import { Label } from '..'

function Select({ label, ...props }) {
  return (
    <div>
      <Label isRequired={props.isRequired}> {label} </Label>
      <StyledSelect {...props} styles={customStyles} />
    </div>
  )
}

Select.propTypes = {
  placeholder: PropTypes.string
}

Select.defaultProps = {
  placeholder: 'Selecione'
}

export default Select
