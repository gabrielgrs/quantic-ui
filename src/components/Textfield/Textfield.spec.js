import React from 'react'
import { render, fireEvent, getStyles } from 'utils/test'
import TextField from './index'

describe('Test TextField', () => {
  it('Expect to render element in dom', () => {
    const { queryByTestId } = render(
      <TextField data-testid="input" label="Teste" name="name" value="value" onChange={() => {}} fullWidth />
    )
    const element = queryByTestId('input')
    const styles = getStyles(element)
    expect(styles.width).toBe('100%')
    expect(element).toBeInTheDocument()
  })

  it('Expect to change value of element when onchange', () => {
    const onChange = jest.fn()

    const { queryByTestId } = render(<TextField data-testid="input" name="name" value="value" onChange={onChange} />)
    const element = queryByTestId('input')
    element.focus()
    fireEvent.change(element, { target: { value: 123 } })
    expect(onChange).toHaveBeenCalled()
  })
})
