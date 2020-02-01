import React from 'react';
import { StyledLabel } from './styles';

function Textfield(props) {
  var children = props.children,
      isRequired = props.isRequired;
  return React.createElement(StyledLabel, null, children, " ", isRequired ? '*' : '');
}

Textfield.defaultProps = {
  isRequired: false
};
export default Textfield;