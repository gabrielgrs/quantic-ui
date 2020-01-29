import React from 'react'

import { StyledRow } from './styles'

export default ({ children, ...props }) => (
  <StyledRow {...props}>{children}</StyledRow>
)
