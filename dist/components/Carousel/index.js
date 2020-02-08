import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

function Carousel(props) {
  var items = props.items,
      showIndicators = props.showIndicators,
      showThumbs = props.showThumbs;
  return React.createElement(ResponsiveCarousel, Object.assign({
    infiniteLoop: true,
    autoPlay: true,
    showIndicators: showIndicators,
    showThumbs: showThumbs
  }, props), items.map(function (_ref) {
    var img = _ref.img,
        alt = _ref.alt;
    return React.createElement("div", null, React.createElement("img", {
      src: img,
      alt: alt
    }));
  }));
}

Carousel.defaultProps = {
  showIndicators: false,
  showThumbs: false
};
export default Carousel;