import React from 'react'
import InputError from './index'

export default {
  title: 'Components/InputError',
  // parameters: { jest: ['InputError.spec.js'] },
}

const Template = (args) => <InputError {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Error message',
}
