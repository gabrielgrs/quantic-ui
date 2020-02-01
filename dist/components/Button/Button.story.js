import React, { Fragment } from 'react';
import { Button } from '..';
export default {
  title: 'Components/Button'
};
export var Base = function Base() {
  return React.createElement(Fragment, null, React.createElement(Button, {
    onClick: function onClick() {
      return alert('action');
    }
  }, " Button "), React.createElement(Button, {
    isLoading: true
  }, " Loading "), React.createElement(Button, {
    isDisabled: true
  }, " Disabled "), React.createElement(Button, {
    color: "danger"
  }, "Danger Color"));
};