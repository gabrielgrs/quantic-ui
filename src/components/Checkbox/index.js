import React from 'react'
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledHiddenCheckbox,
  StyledIcon
} from './styles'
import { Label } from '..'

const Checkbox = ({ className, checked, label, ...props }) => (
  <div>
    <Label isRequired={props.isRequired}>{label}</Label>
    <div>
      <StyledCheckboxContainer className={className}>
        <StyledHiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <StyledIcon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </StyledIcon>
        </StyledCheckbox>
      </StyledCheckboxContainer>
    </div>
  </div>
)

export default Checkbox
