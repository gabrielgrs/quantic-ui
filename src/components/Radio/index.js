import React from 'react'
import PropTypes from 'prop-types'
import { StyledRadio } from './styles'

function Radio(props) {
  const { checked, onChange, label, value, id } = props

  return (
    <StyledRadio style={{ borderRadius: 100 }} onChange={onChange} checked={checked || id === value} label={label} />
  )
}

Radio.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Radio.defaultProps = {
  label: undefined,
  checked: false,
  onChange: () => null,
  value: undefined,
}

export default Radio
