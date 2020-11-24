import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Keyframes, animated, config } from 'react-spring/renderprops.cjs'
import { useOutsideClick, useDisableScroll } from '../../hooks'
import Overlay from '../Overlay'

const StyledDrawer = styled(animated.div)`
  border: 1px solid ${({ theme }) => theme.colors.silverLight};
  box-sizing: border-box;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  max-width: 95%;
  max-height: 100vh;
  margin: 0;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  top: ${({ top }) => top};
  z-index: ${({ theme }) => theme.zIndexes.hard};
  width: ${({ width }) => width || '99%'};
  left: ${({ position }) => (position === 'right' ? 'auto' : 0)};
  right: ${({ position }) => (position === 'right' ? 0 : 'auto')};

  > .custom-scrollbar {
    height: 100%;
    z-index: ${({ theme }) => theme.zIndexes.hard};
  }
`

const SideDrawer = Keyframes.Spring({
  open: { to: { x: 0 }, config: config.default },
  close: { to: { x: 100 }, config: config.gentle },
})

function Sidebar({ children, isOpen, position, onClose, showScrollbarWhenOpen, ...rest }) {
  const sidebarRef = useRef()

  useOutsideClick(sidebarRef, () => {
    if (onClose) return onClose()
  })

  useDisableScroll(!showScrollbarWhenOpen && isOpen)

  return (
    <>
      <Overlay isOpen={isOpen} />
      <SideDrawer native state={isOpen ? 'open' : 'close'}>
        {({ x }) => (
          <StyledDrawer
            {...rest}
            ref={sidebarRef}
            position={position}
            style={{
              transform: x.interpolate((xPos) => `translate3d(${position === 'right' ? xPos : -xPos}%,0,0)`),
            }}
          >
            <div>{children}</div>
          </StyledDrawer>
        )}
      </SideDrawer>
    </>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  position: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  top: PropTypes.string,
  showScrollbarWhenOpen: PropTypes.bool,
}

Sidebar.defaultProps = {
  isOpen: false,
  position: 'left',
  children: null,
  onClose: () => null,
  top: '0px',
  showScrollbarWhenOpen: true,
}

export default Sidebar
