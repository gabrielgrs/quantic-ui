import React from 'react';
import { Datepicker } from '..';
export default {
  title: 'Components/Datepicker'
};
export var Base = function Base() {
  return React.createElement(Datepicker, {
    value: new Date()
  });
};