import React, { Fragment } from 'react';
import { Column } from '..';
export default {
  title: 'Grid/Column'
};
export var Base = function Base() {
  return React.createElement(Fragment, null, React.createElement(Column, {
    size: 4
  }, "Column with size 4"), React.createElement(Column, {
    size: 6
  }, "Column with size 6"), React.createElement(Column, {
    size: 2
  }, "Column with size 2"));
};