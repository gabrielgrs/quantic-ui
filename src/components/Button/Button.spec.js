import React from 'react'
import { render, fireEvent } from 'utils/test'
import Button from './index'

describe('Test Button', () => {
  it('Expect to render button in dom', () => {
    const { queryByText } = render(<Button>Action</Button>)
    const element = queryByText('Action')
    expect(element).toBeInTheDocument()
  })

  it('Expect to dispatch onClick', () => {
    const onClick = jest.fn()
    const { queryByText } = render(<Button onClick={onClick}>Salvar</Button>)
    const element = queryByText('Salvar')
    fireEvent.click(element)
    expect(onClick).toHaveBeenCalled()
  })

  it('Expect to dont dispatch onClick when disabled', () => {
    const onClick = jest.fn()
    const { queryByText } = render(
      <Button onClick={onClick} disabled>
        Disabled Button
      </Button>
    )
    const element = queryByText('Disabled Button')
    fireEvent.click(element)
    expect(onClick).not.toHaveBeenCalled()
  })
})
