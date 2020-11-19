import React from 'react'
import { render } from 'utils/test'
import Row from './index'

describe('Test Row', () => {
  it('Expect to render element in dom', () => {
    const { queryByTestId } = render(<Row data-testid="row">Teste</Row>)
    const element = queryByTestId('row')
    expect(element).toBeInTheDocument()
  })
})
