import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
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

const Wrapper = styled.div`
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: ${({ theme }) => `solid ${theme.colors.silver} 1px`};
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    justify-content: space-between;
  }
`

const Tab = styled.div`
  cursor: pointer;
  margin: 0 7px;
  position: relative;
  font-weight: 600;
  min-width: 150px;
  text-align: center;
  font-size: 1.2rem;

  &:after {
    content: ' ';
    display: ${({ active }) => (active ? 'inline' : 'none')};
    position: absolute;
    border-bottom: ${({ theme }) => `solid ${theme.colors.primary} 4px`};
    left: -10%;
    width: 120%;
    bottom: -7px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`

const Content = styled.div`
  animation: ${animatedTab} 400ms ease-in-out;
  padding: 20px 0;
`

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = useMemo(() => children.map((x) => x.props.title), [children])

  return (
    <>
      <Wrapper>
        {tabs.map((t, index) => (
          <Tab key={index} onClick={() => setActiveTab(index)} active={index === activeTab}>
            {t}
          </Tab>
        ))}
      </Wrapper>
      <Content key={activeTab}>{children[activeTab]}</Content>
    </>
  )
}

function Item({ children }) {
  return <div>{children}</div>
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
}

Tabs.Item = Item

export default Tabs
