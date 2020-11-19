import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Wrapper = styled(Carousel)`
  margin: 0 -10px;
`

const Item = styled.div`
  margin: 0 10px;
`

function HorizontalList({ children, ...rest }) {
  const sizes = { xxs: 464, xs: 1024, md: 1600, lg: 2000 }

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: sizes.lg }, items: 5 },
    largeDesktop: { breakpoint: { max: sizes.lg, min: sizes.md }, items: 4 },
    desktop: { breakpoint: { max: sizes.md, min: sizes.xs }, items: 3 },
    tablet: { breakpoint: { max: sizes.xs, min: sizes.xxs }, items: 2 },
    mobile: { breakpoint: { max: sizes.xxs, min: 0 }, items: 1 },
  }

  return (
    <Wrapper
      {...rest}
      responsive={responsive}
      infinite={false}
      removeArrowOnDeviceType={['mobile', 'tablet']}
      draggable
      minimumTouchDrag={80}
    >
      {children.map((child, index) => (
        <Item key={index}>{child}</Item>
      ))}
    </Wrapper>
  )
}

HorizontalList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default HorizontalList
