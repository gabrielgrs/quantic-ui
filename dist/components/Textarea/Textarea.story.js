import React, { Fragment } from 'react';
import { Textarea } from '..';
export default {
  title: 'Components/Textarea',
  component: Textarea
};
export var Base = function Base() {
  return React.createElement(Fragment, null, React.createElement(Textarea, {
    fullWidth: true,
    rows: 5,
    label: "teste"
  }), React.createElement(Textarea, null));
};