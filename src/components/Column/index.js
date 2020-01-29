import React from 'react'
import PropTypes from 'prop-types'
import { StyledColumn } from './styles'

function Column({ size, children, ...props }) {
  return (
    <StyledColumn quantity={size} {...props}>
      {children}
    </StyledColumn>
  )
}

Column.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
}

Column.defaultProps = {
  size: 1
}

export default Column
