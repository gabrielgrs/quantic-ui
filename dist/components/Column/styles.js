import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  width: 96%;\n\n  /* This when column is inside row  */\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem;\n\n  @media only screen and (min-width: 45em) {\n    width: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';

var getWidthByQuantity = function getWidthByQuantity(size) {
  switch (size) {
    case 1:
      return '4.33%';

    case 2:
      return '12.66%';

    case 3:
      return '21%;';

    case 4:
      return '29.33%;';

    case 5:
      return '37.66%;';

    case 6:
      return '46%';

    case 7:
      return '54.33%';

    case 8:
      return '62.66%';

    case 9:
      return '71%';

    case 10:
      return '79.33%';

    case 11:
      return '87.66%';

    case 12:
      return '96%';

    default:
      return '4.33%';
  }
};

export var StyledColumn = styled.div(_templateObject(), function (_ref) {
  var inline = _ref.inline;
  return inline ? 'flex' : null;
}, function (props) {
  return getWidthByQuantity(props.size);
});