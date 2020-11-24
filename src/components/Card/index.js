import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

function Card({ children, onClick, ...rest }) {
  return (
    <Wrapper {...rest} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Card.defaultProps = {
  children: null,
  onClick: () => null,
}

export default Card
