import styled from 'styled-components';
export const StyledCheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
export const StyledIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
export const StyledHiddenCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => `${props.theme.border.radius}px`};
  transition: all 150ms;

  ${StyledHiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${StyledIcon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`;