import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledCheckbox, StyledCheckboxContainer, StyledHiddenCheckbox, StyledIcon } from './styles'
import Label from '../Label'

const Checkbox = forwardRef((props, ref) => {
  const { className, checked, label, onChange, style, ...rest } = props

  return (
    <StyledWrapper>
      <StyledCheckboxContainer
        onClick={(e) => onChange({ ...e, target: { name: rest.name, value: checked } })}
        className={className}
      >
        <StyledHiddenCheckbox ref={ref} defaultChecked={checked} onChange={onChange} checked={checked} {...rest} />
        <StyledCheckbox checked={checked} style={style}>
          <StyledIcon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </StyledIcon>
        </StyledCheckbox>
      </StyledCheckboxContainer>
      <Label isRequired={rest.isRequired}>{label}</Label>
    </StyledWrapper>
  )
})

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
}

Checkbox.defaultProps = {
  label: undefined,
  checked: false,
  isRequired: false,
  onChange: () => null,
  className: '',
  style: {},
}

export default Checkbox
