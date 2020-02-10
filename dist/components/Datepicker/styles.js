import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Datepicker from 'react-datepicker';
export const StyledDatepicker = styled(Datepicker)`
  display: block;
  padding: 0.5em 5px;
  font-size: 1rem;
  line-height: 1.5;
  color: #564f64;
  background-color: #ffffff;
  background-image: none;
  background-clip: padding-box;
  border: 2px solid #dbd3e9;
  border-radius: ${props => `${props.theme.border.radius}px`};
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  width: ${({
  fullWidth
}) => fullWidth ? '100%' : 'inherit'};
  box-sizing: border-box;

  &:focus {
    border: 2px solid ${({
  theme
}) => theme.colors.primary};
    outline: 0;
  }
`;