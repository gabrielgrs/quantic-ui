import React from 'react'
import PropTypes from 'prop-types'
import { StyledRadioGroup } from './styles'

function RadioGroup(props) {
  const { children, onChange, name, value, isVertical } = props

  return (
    <StyledRadioGroup name={name} isVertical={isVertical}>
      {children.map((c) => React.cloneElement(c, { onChange, value }))}
    </StyledRadioGroup>
  )
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  isVertical: PropTypes.bool,
}

RadioGroup.defaultProps = {
  isVertical: false,
  value: undefined,
  onChange: () => null,
}

export default RadioGroup
