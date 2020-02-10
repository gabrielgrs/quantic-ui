import React from 'react';
import { StyledRow } from './styles';
export default (({
  children,
  ...props
}) => React.createElement(StyledRow, props, children));