import React from 'react'
import { Row, Column, Button } from '..'

export default {
  title: 'Grid/Column'
}

export const Base = () => (
  <Row>
    <Column size={4}>Column with size 4</Column>
    <Column size={6}>Column with size 6</Column>
    <Column size={2}>
      <Button>Teste</Button>
    </Column>
  </Row>
)
