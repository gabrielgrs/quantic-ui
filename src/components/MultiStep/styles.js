import styled, { keyframes } from 'styled-components'

const animatedTab = keyframes`
  0% {
    color: transparent;
    opacity: 0;
  }


  100% {
    opacity: 0.5;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-around;
`

export const StepHeader = styled.div`
  cursor: ${({ uncontrolled }) => (uncontrolled ? 'initial' : 'pointer')};
  white-space: nowrap;
  display: flex;
  text-align: center;
  font-weight: 600;
  padding: 0 7px;
  background: ${({ theme, active }) => (active ? theme.colors.whiteDark : theme.colors.white)};
  border: ${({ theme }) => `solid ${theme.colors.silver} 1px`};
  border-radius: ${({ theme }) => theme.borders.radius};
`

export const Content = styled.div`
  animation: ${animatedTab} 400ms ease-in-out;
  padding: 20px 0;
`

export const Line = styled.div`
  position: relative;
  background: ${({ theme, active }) => (active ? theme.colors.primaryLight : theme.colors.silver)};
  opacity: 0.5;
  width: 100%;
  height: 5px;
`
