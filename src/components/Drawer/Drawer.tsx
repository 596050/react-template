import React, { ReactNode } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import classNames from 'classnames'

import { StyledBackdrop, StyledDrawer, ContentPadding } from './Drawer.styles'

type Props = {
  onOutsideClick: (e: React.MouseEvent<HTMLElement>) => void
  disableOutsideClick?: boolean
  isOpen?: boolean
  children?: ReactNode
}

const Drawer = ({
  children,
  disableOutsideClick,
  onOutsideClick,
  isOpen = false,
}: Props) => {
  const className = classNames({ open: isOpen })

  return (
    <>
      <StyledBackdrop className={className} />
      <OutsideClickHandler
        disabled={disableOutsideClick}
        onOutsideClick={onOutsideClick}
      >
        <StyledDrawer className={className}>
          <ContentPadding />
          {children}
        </StyledDrawer>
      </OutsideClickHandler>
    </>
  )
}

export default Drawer
