import React from 'react'
import Label from './index'

export default {
  title: 'Components/Label',
  parameters: { jest: ['Label.spec.js'] },
}

const Template = (args) => <Label {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Label Text',
}
