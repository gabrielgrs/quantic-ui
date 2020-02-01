import React, { Fragment } from 'react';
import { Row } from '..';
export default {
  title: 'Grid/Row'
};
export var Base = function Base() {
  return React.createElement(Fragment, null, React.createElement(Row, null, "First Row"), React.createElement(Row, null, "Second Row"), React.createElement(Row, null, "Third Row"));
};