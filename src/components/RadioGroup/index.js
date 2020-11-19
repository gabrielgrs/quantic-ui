import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'
import { StyledRadioGroup } from './styles'

function StyledRadio(props) {
  const { onChange, options, name, value, isVertical } = props
  const [selectedValue, setSelectedValue] = useState(value)

  const onChangeRadio = (selected) => {
    setSelectedValue(selected.key)
    onChange({ target: { name, value: selected.key } })
  }

  return (
    <StyledRadioGroup isVertical={isVertical}>
      {options.map((x) => (
        <Checkbox
          key={x.key}
          name={x.key}
          onChange={() => onChangeRadio(x)}
          checked={selectedValue === x.key}
          label={x.label || x.key}
          isRadio
        />
      ))}
    </StyledRadioGroup>
  )
}

StyledRadio.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      key: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  isVertical: PropTypes.bool,
}

StyledRadio.defaultProps = {
  isVertical: false,
  value: undefined,
}

export default StyledRadio
