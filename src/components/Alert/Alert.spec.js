import React from 'react'
import { render } from 'utils/test'
import Alert from './index'

describe('<Alert />', () => {
  it('Expect to render alert in the document', () => {
    const { queryByText } = render(<Alert>alert content</Alert>)
    expect(queryByText('alert content')).toBeInTheDocument()
  })
})
