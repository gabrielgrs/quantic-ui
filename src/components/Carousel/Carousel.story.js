import React from 'react'
import { Carousel } from '..'

export default {
  title: 'Components/Carousel'
}

const items = [
  {
    img:
      'https://app.lit.com.br/api/images/home/carousel/vitrine-02_comp-e-contr-intern_01.png',
    alt: 'course'
  },
  {
    img: 'https://app.lit.com.br/api/images/home/carousel/imagem2.jpg',
    alt: 'coursed'
  }
]

export const Base = () => <Carousel items={items} showIndicators={false} />
