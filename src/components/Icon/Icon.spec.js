import React from 'react'
import { render } from 'utils/test'
import Icon from './index'

describe('Test Icon', () => {
  it('Expect to render element in dom', () => {
    const { queryByTestId } = render(<Icon data-testid="icon" name="AiFillAccountBook" />)
    const element = queryByTestId('icon')
    expect(element).toBeInTheDocument()
  })
})
