import React from 'react'
import { render } from 'utils/test'
import Container from './index'

describe('Test Container', () => {
  it('Expect to render element in dom', () => {
    const { queryByTestId } = render(<Container data-testid="container">Teste</Container>)
    const element = queryByTestId('container')
    expect(element).toBeInTheDocument()
  })
})
