import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { isValid } from 'date-fns'
import { StyledDatepicker } from './styles'
import Label from '../Label'

function Datepicker({ placeholder, label, required, value, ...rest }) {
  const formatToDefaultDate = (date) => (isValid(date) ? new Date(date) : undefined)

  return (
    <>
      {label && <Label required={required}> {label} </Label>}
      <StyledDatepicker {...rest} placeholderText={placeholder} selected={formatToDefaultDate(value)} />
    </>
  )
}

Datepicker.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
}

Datepicker.defaultProps = {
  placeholder: 'dia / mês / ano',
  required: false,
  value: undefined,
  label: '',
}

export default forwardRef(Datepicker)
