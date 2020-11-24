import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useLayout } from '../../hooks'
import { StyledSelect, customStyles } from './styles'

import Label from '../Label'
import InputError from '../InputError'

function Select(props, ref) {
  const { label, required, error, name, ...rest } = props
  const { theme } = useLayout()

  return (
    <div>
      <Label required={required}>{label}</Label>
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
}

Select.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Select.defaultProps = {
  placeholder: 'Selecione',
  label: undefined,
  required: false,
  error: undefined,
}

export default forwardRef(Select)
