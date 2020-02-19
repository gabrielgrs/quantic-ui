import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledHiddenCheckbox,
  StyledIcon
} from './styles'
import { Label } from '..'

const Checkbox = ({ className, checked, label, onChange, ...props }) => {
  const [isChecked, setIsChecked] = useState(Boolean(checked))

  return (
    <div>
      <Label isRequired={props.isRequired}>{label}</Label>
      <div>
        <StyledCheckboxContainer
          onClick={() => {
            setIsChecked(!isChecked)
            onchange({ target: { name: props.name, value: !isChecked } })
          }}
          className={className}
        >
          <StyledHiddenCheckbox checked={isChecked} {...props} />
          <StyledCheckbox checked={isChecked}>
            <StyledIcon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </StyledIcon>
          </StyledCheckbox>
        </StyledCheckboxContainer>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
  label: undefined,
  checked: false
}

export default Checkbox
