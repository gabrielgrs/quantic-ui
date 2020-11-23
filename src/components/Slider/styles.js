import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`

export const Value = styled.div`
  margin-right: ${({ theme }) => theme.spacings.sm};
`

export const StyledSlider = styled.input`
  /* background: ${({ theme }) => theme.colors.silver}; */
  background: ${({ theme, percentage }) =>
    `linear-gradient(90deg, ${theme.colors.primary} ${percentage}%, ${theme.colors.silverSkyDark} 0%)`};
  appearance: none;
  width: 100%;
  height: 7px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  border-radius: 100px;
  transition: ${({ theme }) => theme.transitions('opacity')};

  &::-webkit-slider-thumb {
    cursor: pointer;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 100px;
    box-shadow: ${({ theme }) => theme.shadows.box.soft};
  }

  &::-ms-fill-lower {
    background: red;
  }

  &:hover {
    opacity: 1;
  }
`
