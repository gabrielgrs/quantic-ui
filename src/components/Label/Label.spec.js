import React from 'react'
import { render } from 'utils/test'
import Label from './index'

describe('Test Label', () => {
  it('Expect to render element in dom', () => {
    const { queryByText } = render(<Label>Label Text</Label>)
    const element = queryByText('Label Text')
    expect(element).toBeInTheDocument()
  })
})
