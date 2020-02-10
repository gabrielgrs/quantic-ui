import React from 'react';
import { Datepicker } from '..';
export default {
  title: 'Components/Datepicker'
};
export const Base = () => React.createElement(Datepicker, {
  value: new Date()
});