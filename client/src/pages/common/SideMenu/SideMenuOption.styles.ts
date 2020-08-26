import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { NavLink } from 'react-router-dom'

export const StyledSideMenuOption = styled(Box)`
  width: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    height: 50px;
    width: 100%;
  }
`

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.foreground};
  user-select: none;
  text-decoration: none;
  &.selected {
    background-color: ${({ theme }) => theme.colors.primary10};
    box-shadow: inset 4px 0 0 0 ${({ theme }) => theme.colors.lightGreen};
  }
  &:not(.selected) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }
`
