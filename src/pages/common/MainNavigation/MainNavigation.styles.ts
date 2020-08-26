import styled from 'styled-components'

import { Image } from '../../../components'
import { Burger } from '../../../assets'

export const StyledBurger = styled(Burger)<{ highlight: string }>`
  border-radius: ${({ theme }) => theme.display.borderRadius};
  cursor: pointer;
  position: absolute;
  top: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    display: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    &:active,
    &:focus {
      background-color: ${({ theme }) => theme.colors.primary10};
    }
  }
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary10};
  }
  ${({ highlight, theme }) =>
    highlight === 'true'
      ? `background-color: ${theme.colors.primary10};
  border-radius: ${theme.display.borderRadius};`
      : ''}
`

export const StyledImageContianer = styled.div`
  max-width: 50%;
`

export const StyledImage = styled(Image)`
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-left: 250px;
  }
`
