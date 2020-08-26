import { Flex } from '@rebass/grid'
import styled from 'styled-components'

export const NavBar = styled.div<{ offset: string }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary10};
  width: 100%;
  box-sizing: border-box;
  height: ${({ theme }) => theme.spacers.size64};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacers.size8};
  display: flex;
  align-items: center;
`

export const NavBarInner = styled(Flex)`
  width: 100%;
`
