import React from 'react'
import { borders } from '../index'
import { Row, Column } from '../../../components'

export default {
  title: 'theme/border-radius',
}

const Template = () => (
  <Row>
    <Column size={12}>
      <h2>Border Radius</h2>
    </Column>
    {Object.keys(borders).map((c) => (
      <Column size={12}>
        <strong>{c}:</strong> {borders[c]}
      </Column>
    ))}
  </Row>
)

export const Default = Template.bind({})

export const Structure = () => <div>borders: theme.borders.radius</div>

Default.args = {}
