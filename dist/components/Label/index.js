import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styles';

function Textfield(props) {
  const {
    children,
    isRequired
  } = props;
  return React.createElement(StyledLabel, null, children, " ", isRequired ? '*' : '');
}

Textfield.propTypes = {
  isRequired: PropTypes.bool
};
Textfield.defaultProps = {
  isRequired: false
};
export default Textfield;