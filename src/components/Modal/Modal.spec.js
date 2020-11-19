import React from 'react'
import { render, fireEvent } from 'utils/test'
import Modal from './index'

describe('Test Modal', () => {
  it('Expect to render element in dom', () => {
    const { queryByText } = render(
      <Modal data-testid="modal" isOpen>
        <div> Modal Content </div>
      </Modal>
    )
    const element = queryByText('Modal Content')
    expect(element).toBeInTheDocument()
  })

  it('Expect to not render element in dom', () => {
    const { queryByText } = render(
      <Modal data-testid="modal" isOpen={false}>
        <div>Modal Content</div>
      </Modal>
    )
    const element = queryByText('Modal Content')
    expect(element).not.toBeInTheDocument()
  })

  it('Expect to close element', () => {
    const onClose = jest.fn()

    const { queryByText, queryByTestId } = render(
      <Modal data-testid="modal" isOpen onClose={onClose}>
        <div> Modal Content </div>
      </Modal>
    )
    const modalElement = queryByTestId('modal')
    const closeElement = queryByText('Cancelar')
    fireEvent.click(closeElement)
    expect(modalElement).toBeInTheDocument()
  })
})
