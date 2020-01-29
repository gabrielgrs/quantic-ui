import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  display: block;
  padding: 0.5em 5px;
  font-size: 1rem;
  line-height: 1.5;
  color: #564f64;
  background-color: #ffffff;
  background-image: none;
  background-clip: padding-box;
  border: 2px solid #dbd3e9;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  margin: 5px 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
  box-sizing: border-box;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: 0;
  }
`

const StyledLabel = styled.label`
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: 600;
`

export default ({
  label,
  type,
  fullWidth,
  options,
  optionText,
  optionValue,
  value,
  hasUndefinedValue,
  ...props
}) => {
  return (
    <div>
      <StyledLabel>
        {label} {props.isRequired ? '*' : ''}
      </StyledLabel>
      <div>
        <Select {...props} fullWidth={fullWidth}>
          {hasUndefinedValue && (
            <option value={undefined}>- Selecione -</option>
          )}
          {options.map((o, index) => {
            const valueFromOption = o[optionValue || 'value']
            return (
              <option
                selected={valueFromOption === value}
                key={index}
                value={valueFromOption}
              >
                {o[optionText || 'text']}
              </option>
            )
          })}
        </Select>
      </div>
    </div>
  )
}
