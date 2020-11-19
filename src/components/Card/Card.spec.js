import React from 'react'
import { render, fireEvent } from 'utils/test'
import Card from './index'

describe('Test Card', () => {
  it('Expect to render element in dom', () => {
    const { queryByText } = render(<Card>Card Content</Card>)
    const element = queryByText('Card Content')
    expect(element).toBeInTheDocument()
  })

  it('Expect to dispatch onClick', () => {
    const onClick = jest.fn()
    const { queryByText } = render(<Card onClick={onClick}>Card Content To Click</Card>)
    const element = queryByText('Card Content To Click')
    fireEvent.click(element)
    expect(onClick).toHaveBeenCalled()
  })
})
