import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const StyledSideMenu = styled(Flex)`
  height: 100%;
  width: 0;
  display: none;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.primary10};
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    min-width: 250px;
    max-width: 250px;
    width: 100%;
    display: inherit;
  }
`
