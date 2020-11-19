import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;

  & img {
    object-fit: cover;
    width: 100%;
    height: 40vh;
  }

  @media screen and (max-width: 700px) {
    height: 20vh;

    & img {
      height: 20vh;
    }
  }
`

export const StyledArrow = styled.div`
  cursor: pointer;
  position: absolute;
  height: 100%;
  background: black;
  color: white;
  top: 0;
  opacity: 0.1;
  left: ${({ fromRight }) => (fromRight ? undefined : 0)};
  right: ${({ fromRight }) => (fromRight ? 0 : undefined)};
  display: flex;
  align-items: center;
  padding: 0 10px;
  z-index: 1;

  &:hover {
    opacity: 0.5;
  }
`

export const StyledMarksWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const StyledMark = styled.div`
  cursor: pointer;
  width: 90px;
  height: 6px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
  background: ${({ theme, isActive }) => (isActive ? theme.colors.secondary : theme.colors.darkPrimary)};
  margin: 0 1px;
  border-radius: 0;

  &:hover {
    opacity: 0.6;
  }
`
