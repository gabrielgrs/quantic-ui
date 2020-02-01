import React from 'react'
import PropTypes from 'prop-types'
import { StyledDatepicker } from './styles'
import { Label } from '..'

function Datepicker({ placeholder, ...props }) {
  return (
    <>
      {' '}
      <Label isRequired={props.isRequired}>{props.label}</Label>{' '}
      <StyledDatepicker
        placeholderText={placeholder}
        selected={props.value}
        {...props}
      />
    </>
  )
}

Datepicker.propTypes = {
  placeholder: PropTypes.string
}

Datepicker.defaultProps = {
  placeholder: 'dia / mês / ano'
}

export default Datepicker
