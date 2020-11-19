import React from 'react'
import { render } from 'utils/test'
import Carousel from './index'

describe('Test carousel', () => {
  it('Expect to render element in dom', () => {
    const { queryByTestId } = render(
      <Carousel data-testid="carousel">
        <img src="https://app.lit.com.br/api/images/home/carousel/Vitrine_Metodos_Ageis_corrigida.png" alt="image01" />
        <img src="https://app.lit.com.br/api/images/home/carousel/Vitrine_Metodos_Ageis_corrigida.png" alt="image01" />
      </Carousel>
    )
    const element = queryByTestId('carousel')
    expect(element).toBeInTheDocument()
  })
})
