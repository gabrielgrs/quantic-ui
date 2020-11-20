import React from 'react'
import PropTypes from 'prop-types'

import { StyledFloatingButton } from './styles'

function FloatingButton({ children, onClick, ...rest }) {
  return (
    <StyledFloatingButton {...rest} onClick={onClick}>
      <div>{children}</div>
    </StyledFloatingButton>
  )
}

FloatingButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  onClick: PropTypes.func,
}

FloatingButton.defaultProps = {
  onClick: () => null,
}

export default FloatingButton
