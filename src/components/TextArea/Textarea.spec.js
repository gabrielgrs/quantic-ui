import React from 'react'
import { render, fireEvent } from 'utils/test'
import TextArea from './index'

describe('Test TextArea', () => {
  it('Expect to render element in dom', () => {
    const { queryByText } = render(<TextArea label="Label TextArea" name="name" value="value" onChange={() => {}} />)
    const element = queryByText('Label TextArea')
    expect(element).toBeInTheDocument()
  })

  it('Expect to change value of element when onchange', () => {
    const onChange = jest.fn()

    const { queryByTestId } = render(<TextArea data-testid="input" name="name" value="value" onChange={onChange} />)
    const element = queryByTestId('input')
    element.focus()
    fireEvent.change(element, { target: { value: 'a' } })
    expect(onChange).toHaveBeenCalled()
  })
})
