import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
const StyledTagColor = styled.div`
  cursor: default;
  background: ${props => props.theme.colors[props.type]};
  border-radius: ${props => `${props.theme.border.radius}px`};
  text-align: center;
  width: 200px;
  padding: 7px 0px;
  color: white;
  margin-bottom: 3px;
  color: ${props => props.type === 'white' ? 'black' : 'white'};
  border: solid silver 1px;
`;

function TagColor({
  type
}) {
  return React.createElement(StyledTagColor, {
    type: type
  }, React.createElement("strong", null, type, ":"), " ", theme.colors[type]);
}

export default (() => Object.keys(theme.colors).map(c => React.createElement(TagColor, {
  type: c
})));