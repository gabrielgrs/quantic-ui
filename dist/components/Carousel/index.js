function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

function Carousel(props) {
  const {
    items,
    showIndicators,
    showThumbs
  } = props;
  return React.createElement(ResponsiveCarousel, _extends({
    infiniteLoop: true,
    autoPlay: true,
    showIndicators: showIndicators,
    showThumbs: showThumbs
  }, props), items.map(({
    img,
    alt
  }) => React.createElement("div", null, React.createElement("img", {
    src: img,
    alt: alt
  }))));
}

Carousel.propTypes = {
  showIndicators: PropTypes.bool,
  showThumbs: PropTypes.bool,
  items: PropTypes.array
};
Carousel.defaultProps = {
  showIndicators: false,
  showThumbs: false
};
export default Carousel;