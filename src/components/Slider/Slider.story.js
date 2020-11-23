import React from 'react'
import Slider from './index'

export default {
  title: 'Components/Slider',
  parameters: { jest: ['Slider.spec.js'] },
}

const Template = (args) => <Slider {...args} />

export const Default = Template.bind({})

Default.args = {
  min: 0,
  max: 100,
  value: 50,
  displayValue: false,
}
