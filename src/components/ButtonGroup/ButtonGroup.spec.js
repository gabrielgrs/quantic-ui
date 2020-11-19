import React from 'react'
import { render } from 'utils/test'
import ButtonGroup from './index'

describe('Test Button Group', () => {
  it('Expect to render element in dom', () => {
    const { queryByText } = render(
      <ButtonGroup selectedIndex={1}>
        <ButtonGroup.Button>First Element</ButtonGroup.Button>
        <ButtonGroup.Button>Second Element</ButtonGroup.Button>
      </ButtonGroup>
    )
    const firstButton = queryByText('First Element')
    const secondButton = queryByText('Second Element')
    expect(firstButton).toBeInTheDocument()
    expect(secondButton).toBeInTheDocument()
  })
})
