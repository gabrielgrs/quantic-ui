import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTransition, animated } from 'react-spring'

import { StyledWrapper } from './styles'

function Carousel({ children, timeout, ...rest }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousActiveIndex, setPrevious] = useState(activeIndex)

  const autoAdvanceItem = useCallback(
    (currentIndex) => {
      setTimeout(() => {
        const isLastChild = 1 + currentIndex === children.length
        if (isLastChild) return setActiveIndex(0)
        return setActiveIndex((prev) => prev + 1)
      }, timeout)
    },
    [timeout, children.length]
  )

  useEffect(() => {
    setPrevious(activeIndex)
    autoAdvanceItem(activeIndex)
  }, [activeIndex, autoAdvanceItem])

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
    activeIndex,
    (p) => p,
    activeIndex < previousActiveIndex ? transitionType.forwards : transitionType.backwards
  )

  return (
    <StyledWrapper {...rest}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {children[item]}
        </animated.div>
      ))}
      {/* <StyledMarksWrapper>
        {children.map((_, index) => (
          <StyledMark
            key={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </StyledMarksWrapper> */}
    </StyledWrapper>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
}

Carousel.defaultProps = {
  timeout: 5000,
}

export default Carousel
