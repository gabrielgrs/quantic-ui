import React, { Fragment } from 'react'
import { Column } from '..'

export default {
  title: 'Grid/Column'
}

export const Component = () => (
  <Fragment>
    <Column size={4}>Column with size 4</Column>
    <Column size={6}>Column with size 6</Column>
    <Column size={2}>Column with size 2</Column>
  </Fragment>
)
