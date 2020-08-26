import React, { ReactNode } from 'react'

import { StyledSideMenu } from './SideMenu.styles'

type Props = {
  children: ReactNode
}

const SideMenu = ({ children }: Props) => {
  return <StyledSideMenu>{children}</StyledSideMenu>
}

export default SideMenu
