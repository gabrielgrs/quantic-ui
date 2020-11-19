import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useLayout } from '../../hooks'
import { StyledSelect, customStyles } from './styles'

import Label from '../Label'
import InputError from '../InputError'

const Select = forwardRef((props, ref) => {
  const { label, isRequired, error, name, ...rest } = props

  const { theme } = useLayout()

  return (
    <div>
      <Label isRequired={isRequired}>{label}</Label>
      <StyledSelect
        {...rest}
        ref={ref}
        name={name}
        styles={customStyles(theme)}
        noOptionsMessage={() => 'Nenhuma opção'}
      />
      <InputError>{error}</InputError>
    </div>
  )
})

Select.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Select.defaultProps = {
  placeholder: 'Selecione',
  label: undefined,
  isRequired: false,
  error: undefined,
}

export default Select
