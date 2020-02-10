import React, { Fragment } from 'react';
import { Checkbox } from '..';
export default {
  title: 'Components/Checkbox',
  component: Checkbox
};
export const Base = () => React.createElement(Fragment, null, React.createElement(Checkbox, {
  label: "Checkbox"
}), React.createElement(Checkbox, {
  label: "Checkbox",
  checked: true
}));