import React, { Fragment } from 'react';
import { TextField } from '..';
export default {
  title: 'Components/TextField',
  component: TextField
};
export const Base = () => React.createElement(Fragment, null, React.createElement(TextField, {
  value: '',
  onChange: () => {},
  fullWidth: true,
  label: "With Label"
}), React.createElement(TextField, {
  value: '',
  onChange: () => {},
  fullWidth: true,
  placeholder: "Placeholder"
}));