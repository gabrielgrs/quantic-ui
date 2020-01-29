import React from 'react'

import { StyledTextarea, StyledLabel } from './styles'

function Textarea({ onChange, value, label, type, ...props }) {
  return (
    <div>
      <StyledLabel>
        {label} {props.isRequired ? '*' : ''}
      </StyledLabel>
      <div>
        <StyledTextarea
          {...props}
          value={value}
          type={type}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Textarea
