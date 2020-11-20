import React from 'react'
import Carousel from './index'

export default {
  title: 'Components/Carousel',
  parameters: { jest: ['Carousel.spec.js'] },
}

const Template = (args) => (
  <Carousel {...args}>
    <img src="https://app.lit.com.br/api/images/home/carousel/imagem2.jpg" alt="first carousel" />
    <img src="https://app.lit.com.br/api/images/home/carousel/imagem2.jpg" alt="first carousel" />
  </Carousel>
)

export const Default = Template.bind({})

Default.args = {
  ...Carousel.defaultProps,
  showIndicators: false,
}
