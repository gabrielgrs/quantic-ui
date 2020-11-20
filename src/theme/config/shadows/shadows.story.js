import React from 'react'
import { shadows } from '../index'
import { Row, Column } from '../../../components'

export default {
  title: 'theme/shadows',
}

const Template = () => {
  return (
    <>
      <h2>Shadows Box</h2>
      {Object.keys(shadows.box).map((c) => (
        <Row>
          <Column size={12}>
            <strong>{c}:</strong> {shadows.box[c]}
          </Column>
        </Row>
      ))}
    </>
  )
}

export const Default = Template.bind({})

export const Structure = () => <div>shadows: theme.shadows.box.soft</div>

Default.args = {}
