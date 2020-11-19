import React from 'react'
import { render, getStyles } from 'utils/test'
import ProgressBar from './index'

describe('Test ProgressBar', () => {
  it('Expect to render element in dom', () => {
    const { queryByTestId } = render(<ProgressBar data-testid="progressbar" current={100} max={100} />)

    const element = queryByTestId('progressbar')
    expect(element).toBeInTheDocument()
  })

  it('Expect to full element with correctly width', () => {
    const { queryByTestId } = render(<ProgressBar fill-data-test-id="progressbar-fill" current={50} max={100} />)

    const element = queryByTestId('progressbar-fill')
    expect(getStyles(element).width).toBe(`50%`)
  })

  it('Should current cannot exceed the maximum', () => {
    const { queryByTestId } = render(<ProgressBar fill-data-test-id="progressbar-fill" current={150} max={100} />)

    const element = queryByTestId('progressbar-fill')
    expect(getStyles(element).width).toBe(`100%`)
  })
})
