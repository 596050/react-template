import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Box } from '@rebass/grid'

export const StyledOption = styled(Box)`
  height: 50px;
`

export const StyledLink = styled(NavLink)`
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  user-select: none;
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
