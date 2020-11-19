import React from 'react'
import { render } from 'utils/test'
import Column from './index'

describe('Test column', () => {
  it('Expect to render element in dom', () => {
    const { queryByText } = render(
      <Column data-testid="column" size={12}>
        column
      </Column>
    )
    const element = queryByText('column')
    expect(element).toBeInTheDocument()
  })
})
