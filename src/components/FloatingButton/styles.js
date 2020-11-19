import styled from 'styled-components'
import { rgba } from 'polished'

export const StyledFloatingButton = styled.div`
  cursor: pointer;
  z-index: 9995;
  position: fixed;
  min-width: 60px;
  padding: 0 10px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px 10px 0 0;
  box-shadow: 2px 2px 3px #999;
  opacity: ${({ theme }) => theme.opacities.soft};
  display: flex;
  justify-content: center;
  align-items: center;
  right: 4 0px;
  bottom: 0;
  right: 30px;

  :hover {
    opacity: 1;
    height: 40px;
  }

  :active,
  :focus {
    outline: none;
  }

  :active {
    transform: ${(props) => !props.disabled && !props.loading && `translate(1px, -1px)`};
    box-shadow: ${({ theme }) => rgba(theme.colors.primary, 0.2)} 0 1px 3px 2px;
  }

  @media screen and (max-width: 700px) {
    right: 10px;
    bottom: 60px;
  }
`
