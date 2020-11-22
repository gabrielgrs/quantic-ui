import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

function Alert(props) {
  const { children, type, fixed } = props

  return (
    <Wrapper type={type} fixed={fixed}>
      {children}
    </Wrapper>
  )
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  fixed: PropTypes.bool,
}

Alert.defaultProps = {
  type: 'success',
  fixed: false,
}

export default Alert
