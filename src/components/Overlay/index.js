import React from 'react'
import PropTypes from 'prop-types'
// import { useDisableScroll } from '../../hooks'
import { StyledOverlay } from './styles'

function Overlay({ isOpen, ...rest }) {
  // TODO: check why disable is not rolling back
  // useDisableScroll(isOpen)
  return <StyledOverlay isOpen={isOpen} {...rest} />
}

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default Overlay
