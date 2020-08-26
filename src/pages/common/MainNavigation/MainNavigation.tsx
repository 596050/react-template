import React, { useState, useCallback, ReactNode } from 'react'

import { Drawer, Navigation } from '../../../components'
import Logo from '../../../assets/images/gocardless-white-rgb_2018_lrg.png'

import {
  StyledBurger,
  StyledImage,
  StyledImageContianer,
} from './MainNavigation.styles'
import { Link } from 'react-router-dom'

type Props = {
  children: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => ReactNode
}

const MainNavigation = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [disabledOutsideClick, setDisableOutsideClick] = useState<boolean>(
    false
  )
  const handleToggleDrawer = useCallback(() => setIsOpen((state) => !state), [])

  let sideDrawer

  if (isOpen) {
    sideDrawer = children(setIsOpen)
  }

  return (
    <>
      <Navigation
        left={
          <StyledBurger
            onMouseDown={() => setDisableOutsideClick(true)}
            onMouseUp={() => setDisableOutsideClick(false)}
            highlight={isOpen.toString()}
            onClick={handleToggleDrawer}
          />
        }
      >
        <StyledImageContianer>
          <Link to="/">
            <StyledImage src={Logo} alt="main logo" />
          </Link>
        </StyledImageContianer>
      </Navigation>
      {/* {sideDrawer} */}
      <Drawer
        disableOutsideClick={disabledOutsideClick}
        isOpen={isOpen}
        onOutsideClick={() => setIsOpen(false)}
      >
        {sideDrawer}
      </Drawer>
    </>
  )
}

export default MainNavigation
