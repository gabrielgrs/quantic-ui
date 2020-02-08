import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  box-shadow: ", ";\n  font-size: ", ";\n  background: ", ";\n  border: ", ";\n  opacity: ", ";\n  cursor: ", ";\n  padding: 10px 12px;\n  min-width: 120px;\n  width: ", ";\n  border-radius: ", ";\n\n  /* Teste  */\n  position: relative;\n  overflow: hidden;\n  -webkit-appearance: none;\n\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 150ms ease-out;\n  vertical-align: top;\n  white-space: nowrap;\n  margin: 0;\n\n  :active,\n  :focus {\n    outline: none;\n  }\n\n  :active {\n    transform: ", ";\n    box-shadow: ", " 0 1px 3px 2px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { rgba } from 'polished';

function getBackground(_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      isOutline = _ref.isOutline;
  if (isOutline) return 'transparent';
  if (!color) return theme.colors.primary;
  return theme.colors[color];
}

function getOpacity(_ref2) {
  var theme = _ref2.theme,
      isDisabled = _ref2.isDisabled,
      isLoading = _ref2.isLoading;
  if (isDisabled) return theme.opacities.default;
  if (isLoading) return theme.opacities.soft;
  return 1;
}

function getCursor(_ref3) {
  var isDisabled = _ref3.isDisabled,
      isLoading = _ref3.isLoading;
  if (isDisabled || isLoading) return 'not-allowed'; // if (isLoading) return 'default'

  return 'pointer';
}

function getWidth(_ref4) {
  var fullWidth = _ref4.fullWidth;
  if (fullWidth) return '100%';
  return 'initial';
}

function getBorder(_ref5) {
  var theme = _ref5.theme,
      isOutline = _ref5.isOutline,
      color = _ref5.color;
  if (!isOutline) return 'none';
  return "solid ".concat(theme.colors[color]);
}

export var StyledButton = styled.button(_templateObject(), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.shadows.box.soft;
}, function (props) {
  return "".concat(props.theme.tipographies.size.sm, "px");
}, getBackground, getBorder, getOpacity, getCursor, getWidth, function (props) {
  return "".concat(props.theme.border.radius, "px");
}, function (props) {
  return !props.isDisabled && !props.isLoading && "translate(1px, -1px)";
}, function (props) {
  return rgba(props.theme.colors.primary, 0.2);
});