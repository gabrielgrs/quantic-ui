import React, { Fragment } from 'react';
import { TextArea } from '..';
export default {
  title: 'Components/TextArea',
  component: TextArea
};
export var Base = function Base() {
  return React.createElement(Fragment, null, React.createElement(TextArea, {
    fullWidth: true,
    rows: 5,
    label: "teste"
  }), React.createElement(TextArea, null));
};