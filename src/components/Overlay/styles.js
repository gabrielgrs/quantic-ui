import styled, { keyframes } from 'styled-components'

const overlayAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const StyledOverlay = styled.div`
  animation: ${overlayAnimation} 400ms ease-in-out;
  display: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  z-index: ${({ theme, zIndex }) => zIndex || theme.zIndexes.medium};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
