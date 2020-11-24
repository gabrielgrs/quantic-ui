import React from 'react'
import PropTypes from 'prop-types'
import { StyledImage } from './styles'

function Avatar({ src, alt, width, height }) {
  return <StyledImage src={src} alt={alt} width={width} height={height} />
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Avatar.defaultProps = {
  src: undefined,
  alt: 'image',
  width: '100%',
  height: 'auto',
}

export default Avatar
