import React from 'react';
import styled from 'styled-components';
import ColorsDefaults from './colors';
export default {
  title: 'Theme/defaults'
};
const StyledWrapper = styled.div`
  margin: 5%;
`;
const StyledTitle = styled.div`
  font-size: 2em;
`;
export const Colors = () => React.createElement(StyledWrapper, null, React.createElement(StyledTitle, null, "Colors"), React.createElement(ColorsDefaults, null));