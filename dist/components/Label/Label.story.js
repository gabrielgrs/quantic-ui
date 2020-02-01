import React from 'react';
import { Label } from '..';
export default {
  title: 'Components/Label',
  component: Label
};
export var Base = function Base() {
  return React.createElement(Label, null, " Label ");
};