import React, { ReactNode } from 'react'
import { NavLinkProps } from 'react-router-dom'

import { StyledSideMenuOption, StyledLink } from './SideMenuOption.styles'

type Props = {
  children: ReactNode
  to: string
} & NavLinkProps

const SideMenuOption = ({ children, to }: Props) => {
  return (
    <StyledSideMenuOption>
      <StyledLink exact activeClassName="selected" to={to}>
        {children}
      </StyledLink>
    </StyledSideMenuOption>
  )
}

export default SideMenuOption
