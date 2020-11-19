import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Icon from '../Icon'

export const StyledSection = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme, isOpen }) =>
    isOpen ? `${theme.borders.radius} ${theme.borders.radius} 0 0` : `${theme.borders.radius}`};
  background: ${({ theme }) => theme.colors.whiteDark};
  color: ${({ theme }) => theme.colors.darkPrimary};
  padding: 14px 20px;
  margin-top: 3px;

  & #icon {
    font-size: 16px;
  }

  &:hover {
    opacity: ${({ theme }) => theme.opacities.soft};
  }
`

const animatedPart = keyframes`
  from {
    opacity: 0.1
  }

  to {
    opacity: 1
  }
`

export const StyledContent = styled.div`
  animation: ${animatedPart} 0.5s linear;
  font-size: 0.9em;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.whiteDark};
  border-radius: ${({ theme }) => `0 0 ${theme.borders.radius} ${theme.borders.radius}`};
`

function Section({ children, header, onClick, isOpen }) {
  return (
    <div>
      <StyledSection isOpen={isOpen} onClick={onClick}>
        <div>
          <strong>{header}</strong>
        </div>
        <div>
          {isOpen ? <Icon category="feather" name="FiChevronDown" /> : <Icon category="feather" name="FiChevronLeft" />}
        </div>
      </StyledSection>
      {isOpen && <StyledContent>{children}</StyledContent>}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  header: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
}

Section.defaultProps = {
  onClick: () => undefined,
  isOpen: false,
}

export default Section
