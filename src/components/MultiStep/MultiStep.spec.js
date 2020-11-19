import React from 'react'
import { render } from 'utils/test'
import MultiStep from './index'

describe('Test Multispect', () => {
  it('Expect to render element in dom', () => {
    const { queryByTestId } = render(
      <MultiStep data-testid="multisteps">
        <MultiStep.Step>Step 01</MultiStep.Step>
        <MultiStep.Step>Step 02</MultiStep.Step>
      </MultiStep>
    )
    const element = queryByTestId('multisteps')
    expect(element).toBeInTheDocument()
  })

  it('Expect to work right when finish multisteps', () => {
    const { queryByText } = render(
      <MultiStep currentIndex={0}>
        <MultiStep.Step>Step 01</MultiStep.Step>
        <MultiStep.Step>Step 02</MultiStep.Step>
      </MultiStep>
    )
    const finishButton = queryByText('Finalizar')
    expect(finishButton).not.toBeInTheDocument()
  })

  it('Should start with correctly step', () => {
    const { queryByText } = render(
      <MultiStep currentIndex={1}>
        <MultiStep.Step title="first">Primeira</MultiStep.Step>
        <MultiStep.Step title="second">Segunda</MultiStep.Step>
      </MultiStep>
    )

    const element = queryByText('Segunda')
    expect(element).toBeInTheDocument()
  })
})
