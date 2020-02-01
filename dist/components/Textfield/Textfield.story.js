import React, { Fragment } from 'react';
import { Textfield } from '..';
export default {
  title: 'Components/Textfield',
  component: Textfield
};
export var Base = function Base() {
  return React.createElement(Fragment, null, React.createElement(Textfield, {
    fullWidth: true,
    label: "teste"
  }), React.createElement(Textfield, {
    fullWidth: true
  }));
};