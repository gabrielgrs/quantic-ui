import React from 'react'
import Spacing from './index'

export default {
  title: 'Components/Spacing',
  parameters: { jest: ['Spacing.spec.js'] },
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
