import React, { ReactNode } from 'react'
import { BoxProps } from '@rebass/grid'
import { MainBox } from './Main.styles'

type Props = BoxProps & {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return <MainBox>{children}</MainBox>
}

export default Main
