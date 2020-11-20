import React from 'react'
import Column from './index'
import Row from '../Row'

export default {
  title: 'Components/Column',
  parameters: { jest: ['Checkbox.spec.js'] },
}

const Template = () => (
  <Row>
    <Column size={4}>Column with size 4</Column>
    <Column size={6}>Column with size 6</Column>
    <Column size={2}>Teste</Column>
  </Row>
)

export const Default = Template.bind({})

Default.args = {
  ...Column.defaultProps,
}
