import React, { ReactNode } from 'react'
import { Flex } from '@rebass/grid'

import { NavBar, NavBarInner } from './Navigation.styles'

type Props = {
  children?: ReactNode
  offset?: string
  right?: ReactNode
  left?: ReactNode
}

const Nav = ({ left, right, offset = '0', children }: Props) => (
  <nav
    style={{
      position: 'relative',
      zIndex: 100,
    }}
  >
    <NavBar offset={offset}>
      <NavBarInner
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Flex>{left}</Flex>
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          {children}
        </Flex>
        <Flex>{right}</Flex>
      </NavBarInner>
    </NavBar>
  </nav>
)

export default Nav
