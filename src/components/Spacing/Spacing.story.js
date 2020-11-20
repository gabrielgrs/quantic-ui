import React from 'react'
import { spacings } from 'utils/argTypes'
import Spacing from './index'

export default {
  title: 'Components/Spacing',
  parameters: { jest: ['Spacing.spec.js'] },
  argTypes: {
    size: spacings,
  },
}

const Template = (args) => {
  return (
    <div>
      <Spacing {...args} />
      Text
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  size: 'sm',
}
