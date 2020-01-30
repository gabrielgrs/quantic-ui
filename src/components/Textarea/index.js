import React from 'react'
import { StyledTextarea } from './styles'
import { Label } from '..'

function Textarea({ onChange, value, label, type, ...props }) {
  return (
    <div>
      <Label isRequired={props.isRequired}> {label} </Label>
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
