import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

function Badge({ children, background, color }) {
  return (
    <Wrapper background={background} color={color}>
      {children}
    </Wrapper>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
}

Badge.defaultProps = {
  background: 'primary',
  color: 'white',
}

export default Badge
