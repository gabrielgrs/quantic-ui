import React from 'react'
import PropTypes from 'prop-types'
import { isValid } from 'date-fns'
import { StyledDatepicker } from './styles'
import Label from '../Label'

function Datepicker({ placeholder, label, isRequired, value, ...rest }) {
  const formatToDefaultDate = (date) => (isValid(date) ? new Date(date) : undefined)

  return (
    <>
      {label && <Label isRequired={isRequired}> {label} </Label>}
      <StyledDatepicker {...rest} placeholderText={placeholder} selected={formatToDefaultDate(value)} />
    </>
  )
}

Datepicker.propTypes = {
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
}

Datepicker.defaultProps = {
  placeholder: 'dia / mês / ano',
  isRequired: false,
  value: undefined,
  label: '',
}

export default Datepicker
