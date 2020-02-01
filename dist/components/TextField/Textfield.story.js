import React, { Fragment } from 'react';
import { TextField } from '..';
export default {
  title: 'Components/TextField',
  component: TextField
};
export var Base = function Base() {
  return React.createElement(Fragment, null, React.createElement(TextField, {
    fullWidth: true,
    label: "With Label"
  }), React.createElement(TextField, {
    fullWidth: true,
    placeholder: "Placeholder"
  }));
};