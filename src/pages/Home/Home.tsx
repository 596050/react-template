import React from 'react'
import { Flex } from '@rebass/grid'

import { Card, useGlobalContext, useTheme, Wrapper } from '../../components'

const Home = () => {
  const theme = useTheme()
  const { state } = useGlobalContext()

  // console.log("Home state", state);

  return (
    <Wrapper>
      {state?.data?.map(
        (item: {
          id: string | number | null | undefined
          name: React.ReactNode
        }) => {
          return (
            <Card
              key={item?.id}
              style={{
                marginBottom: theme.spacers.size16,
              }}
            >
              <Flex justifyContent="space-between">{item?.name}</Flex>
            </Card>
          )
        }
      )}
    </Wrapper>
  )
}

export default Home
