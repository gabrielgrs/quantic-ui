import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

function ButtonGroup({ children, index, ...rest }) {
  return children.map((c, childIndex) =>
    React.cloneElement(c, {
      ...c,
      key: childIndex,
      onClick: () => {
        if (c.onClick) c.onClick()
      },
      isActive: childIndex === index,
      isFirst: childIndex === 0,
      isLast: childIndex === children.length - 1,
      buttonSize: 100 / children.length,
      ...rest,
    })
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number,
}

ButtonGroup.defaultProps = {
  index: undefined,
}

ButtonGroup.Button = Button

export default ButtonGroup
