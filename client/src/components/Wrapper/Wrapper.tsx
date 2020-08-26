import React, { ReactNode } from 'react'
import { Flex, FlexProps } from '@rebass/grid'
import { useTheme } from '../Hooks'

type Props = {
  children: ReactNode
} & FlexProps

const Wrapper = ({ children, ...rest }: Props) => {
  const theme = useTheme()
  return (
    <Flex
      width="100%"
      pt={theme.spacers.size4}
      px={theme.spacers.size24}
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Wrapper
