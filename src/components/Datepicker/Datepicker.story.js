import React from 'react'
import Datepicker from './index'

export default {
  title: 'Components/Container',
  parameters: { jest: ['Container.spec.js'] },
}

const Template = (args) => <Datepicker {...args} />

export const Default = Template.bind({})

Default.args = {
  ...Datepicker.defaultProps,
}
