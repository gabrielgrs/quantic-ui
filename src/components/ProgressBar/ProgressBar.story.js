import React from 'react'
import ProgressBar from './index'

export default {
  title: 'Components/ProgressBar',
  parameters: { jest: ['ProgressBar.spec.js'] },
}

const Template = (args) => <ProgressBar {...args} />

export const Default = Template.bind({})

Default.args = {
  max: 100,
  current: 10,
}
