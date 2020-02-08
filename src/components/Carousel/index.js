import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'

function Carousel(props) {
  const { items, showIndicators, showThumbs } = props

  return (
    <ResponsiveCarousel
      infiniteLoop
      autoPlay
      showIndicators={showIndicators}
      showThumbs={showThumbs}
      {...props}
    >
      {items.map(({ img, alt }) => (
        <div>
          <img src={img} alt={alt} />
        </div>
      ))}
    </ResponsiveCarousel>
  )
}

Carousel.propTypes = {
  showIndicators: PropTypes.bool,
  showThumbs: PropTypes.bool,
  items: PropTypes.array
}

Carousel.defaultProps = {
  showIndicators: false,
  showThumbs: false
}

export default Carousel
