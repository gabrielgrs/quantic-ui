import React from 'react'
import MultiStep from './index'

export default {
  title: 'Components/MultiStep',
  component: MultiStep,
}

export const Base = () => {
  return (
    <MultiStep currentIndex={0}>
      <MultiStep.Step title="first">Primeira</MultiStep.Step>
      <MultiStep.Step title="second">Segunda</MultiStep.Step>
    </MultiStep>
  )
}
