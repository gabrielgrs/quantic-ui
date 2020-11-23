import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Value, StyledSlider } from './styles'

function Slider({ name, min, max, value, onChange, displayValue }) {
  const percentage = useMemo(() => ((value - min) / (max - min)) * 100, [value, min, max])

  return (
    <Wrapper>
      {displayValue && <Value>{value}</Value>}
      <StyledSlider
        name={name}
        type="range"
        min={min}
        max={max}
        value={value}
        percentage={percentage}
        onChange={onChange}
      />
    </Wrapper>
  )
}

Slider.propTypes = {
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  displayValue: PropTypes.bool,
}

Slider.defaultProps = {
  name: undefined,
  min: 0,
  max: 100,
  value: 0,
  onChange: () => null,
  displayValue: false,
}

export default Slider
