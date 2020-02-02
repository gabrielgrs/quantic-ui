import React, { Fragment } from 'react'
import { Button } from '..'

export default {
  title: 'Components/Button'
}

export const Base = () => (
  <Fragment>
    <Button onClick={() => console.log('oi')}> Button </Button>
    <Button isLoading> Loading </Button>
    <Button isDisabled> Disabled </Button>
    <Button color="danger">Danger Color</Button>
  </Fragment>
)
