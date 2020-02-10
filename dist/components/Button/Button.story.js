import React, { Fragment } from 'react';
import { Button } from '..';
export default {
  title: 'Components/Button'
};
export const Base = () => React.createElement(Fragment, null, React.createElement(Button, {
  onClick: () => console.log('oi')
}, " Button "), React.createElement(Button, {
  isLoading: true
}, " Loading "), React.createElement(Button, {
  isDisabled: true
}, " Disabled "), React.createElement(Button, {
  color: "danger"
}, "Danger Color"));