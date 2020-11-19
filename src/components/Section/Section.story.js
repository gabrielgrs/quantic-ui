import React from 'react'
import Section from './index'

export default {
  title: 'Components/Section',
  parameters: { jest: ['Section.spec.js'] },
}

const Template = (args) => <Section {...args} />

export const Default = Template.bind({})

Default.args = {
  header: 'Header',
  isOpen: true,
  children: 'Section content',
}
