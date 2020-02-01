import React, { Fragment } from 'react';
import { Select } from '..';
export default {
  title: 'Components/Select',
  component: Select
};
export var Base = function Base() {
  var options = [{
    value: 1,
    label: 'teste 1'
  }, {
    value: 2,
    label: 'teste 2'
  }];
  return React.createElement(Fragment, null, React.createElement(Select, {
    options: options,
    label: "With label"
  }), React.createElement(Select, {
    options: options
  }));
};