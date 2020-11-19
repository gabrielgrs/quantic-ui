import React from 'react'
import theme from '../index'
import { Row, Column } from '../../components'

export default {
  title: 'theme/shadows',
}

export const Base = () => {
  return (
    <>
      <h2>Shadows Box</h2>
      {Object.keys(theme.shadows.box).map((c) => (
        <Row>
          <Column size={12}>
            <strong>{c}:</strong> {theme.shadows.box[c]}
          </Column>
        </Row>
      ))}
    </>
  )
}
