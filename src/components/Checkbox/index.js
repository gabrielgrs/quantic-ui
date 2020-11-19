import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledCheckbox, StyledCheckboxContainer, StyledHiddenCheckbox, StyledIcon } from './styles'
import Label from '../Label'

const Checkbox = forwardRef((props, ref) => {
  const { className, checked, label, onChange, ...rest } = props
  const [isChecked, setIsChecked] = useState(Boolean(checked))

  return (
    <StyledWrapper>
      <StyledCheckboxContainer
        onClick={() => {
          setIsChecked(!isChecked)
          if (onChange) {
            onChange({ target: { name: rest.name, value: !isChecked } })
          }
        }}
        className={className}
      >
        <StyledHiddenCheckbox ref={ref} defaultChecked={isChecked} onChange={onChange} checked={isChecked} {...rest} />
        <StyledCheckbox checked={isChecked}>
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
}

Checkbox.defaultProps = {
  label: undefined,
  checked: false,
  isRequired: false,
  onChange: () => null,
  className: '',
}

export default Checkbox
