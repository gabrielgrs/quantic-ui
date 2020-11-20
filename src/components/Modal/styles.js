import styled, { keyframes } from 'styled-components'
import Icon from '../Icon'

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndexes.over};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) => theme.breakPoints.sm} {
    min-width: 95%;
  }
`

export const ModalContent = styled.div`
  animation: ${animation} 500ms ease-in-out;
  width: 100%;
  max-width: 768px;
  max-height: 90vh;
  min-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.565) 0px 5px 30px;
  padding: 20px;
  overflow-y: auto;
  text-align: left;
  background: ${({ theme }) => theme.colors.silverSky};
  border-radius: ${({ theme }) => theme.borders.radius};

  ${({ theme }) => theme.breakPoints.sm} {
    min-width: 0;
  }
`

export const ChildrenWrapper = styled.div`
  padding: 20px 0;
`

export const CloseIcon = styled(Icon)`
  font-size: 22;
  cursor: pointer;
`
