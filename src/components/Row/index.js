import React from 'react'
import PropTypes from 'prop-types'
import { StyledRow } from './styles'

function Row({ children, ...rest }) {
  return <StyledRow {...rest}>{children}</StyledRow>
}

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

export default Row
