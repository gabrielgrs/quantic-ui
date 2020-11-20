import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTransition, animated } from 'react-spring'

import { StyledWrapper } from './styles'

function Carousel({ children, timeout, index, onChangeIndex, ...rest }) {
  const [previousActiveIndex, setPrevious] = useState(index)

  const autoAdvanceItem = useCallback(
    (currentIndex) => {
      setTimeout(() => {
        const isLastChild = 1 + currentIndex === children.length
        return isLastChild ? onChangeIndex(0) : onChangeIndex(index + 1)
      }, timeout)
    },
    [timeout, children.length]
  )

  useEffect(() => {
    setPrevious(index)
    autoAdvanceItem(index)
  }, [index, autoAdvanceItem])

  const transitionType = {
    backwards: {
      initial: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, height: 0, transform: 'translate3d(-100%,0,0)' },
    },
    forwards: {
      initial: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, height: 0, transform: 'translate3d(100%,0,0)' },
    },
  }

  const transitions = useTransition(
    index,
    (p) => p,
    index < previousActiveIndex ? transitionType.forwards : transitionType.backwards
  )

  return (
    <StyledWrapper {...rest}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {children[item]}
        </animated.div>
      ))}
    </StyledWrapper>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
  index: PropTypes.number,
  onChangeIndex: PropTypes.func,
}

Carousel.defaultProps = {
  timeout: 5000,
  index: 0,
  onChangeIndex: () => null,
}

export default Carousel
