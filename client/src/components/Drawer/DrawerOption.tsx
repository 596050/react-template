import React, { ReactNode } from 'react'
import { NavLinkProps } from 'react-router-dom'

import { StyledLink, StyledOption } from './DrawerOption.styles'

type Props = {
  children: ReactNode
  to: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
} & NavLinkProps

const DrawerOption = ({ children, onClick, to }: Props) => {
  return (
    <StyledOption>
      <StyledLink exact activeClassName="selected" onClick={onClick} to={to}>
        {children}
      </StyledLink>
    </StyledOption>
  )
}

export default DrawerOption
