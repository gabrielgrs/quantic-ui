import React from 'react'
import { colors } from '../index'
import { Row, Column } from '../../../components'

export default {
  title: 'theme/colors',
}

const Template = () => (
  <Row>
    <Column size={12}>
      <h2>Colors</h2>
    </Column>
    {Object.keys(colors).map((c) => (
      <Column size={12} style={{ background: colors[c], padding: 5 }}>
        <strong>{c}:</strong> {colors[c]}
      </Column>
    ))}
  </Row>
)

export const Default = Template.bind({})

export const Structure = () => <div>colors: theme.colors.primary</div>

Default.args = {}
