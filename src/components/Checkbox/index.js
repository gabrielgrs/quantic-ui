import React, { useState } from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  height: 100%;
`

const Checkbox = ({ onChange, value, label, name }) => {
  const [isChecked, setIsChecked] = useState(!!value)
  return (
    <Styled
      onClick={() => {
        onChange({ value: !isChecked }, name)
        setIsChecked(!isChecked)
      }}
    >
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input type="checkbox" name={name} checked={isChecked} />
      </div>
    </Styled>
  )
}

export default Checkbox
