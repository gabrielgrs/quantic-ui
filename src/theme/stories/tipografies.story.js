import React from 'react'
import theme from '../index'
import { Row, Column } from '../../components'

export default {
  title: 'theme/tipographies',
}

const Types = () => (
  <>
    <Column size={12}>
      <h3>Types</h3>
    </Column>
    {Object.keys(theme.tipographies.type).map((t) => (
      <Column size={12}>
        <strong>{t}</strong>: {theme.tipographies.type[t]}
      </Column>
    ))}
  </>
)

const Weight = () => (
  <>
    <Column size={12}>
      <h3>Weighties</h3>
    </Column>
    {Object.keys(theme.tipographies.weight).map((t) => (
      <Column size={12}>
        <strong>{t}</strong>: {theme.tipographies.weight[t]}
      </Column>
    ))}
  </>
)

const Size = () => (
  <>
    <Column size={12}>
      <h3>Sizes</h3>
    </Column>
    {Object.keys(theme.tipographies.size).map((t) => (
      <Column size={12}>
        <strong>{t}</strong>: {theme.tipographies.size[t]}
      </Column>
    ))}
  </>
)

export const Base = () => {
  return (
    <Row>
      <Column size={12}>
        <h2>Tipografies</h2>
      </Column>
      <Types />
      <Weight />
      <Size />
    </Row>
  )
}
