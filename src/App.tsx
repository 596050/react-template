import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader'

import { useGlobalContext } from './components'
import { GET_MERCHANTS, getData } from './utils'
import Routes from './Routes'
import { merchants, merchantM6180 } from './utils/mock'
import { calculateSum } from './utils/calculations'

const fetchData = async () =>
  await getData({
    url: `${process.env.REACT_APP_BASE_URL}${GET_MERCHANTS}`,
  })

function App() {
  const { setState } = useGlobalContext()

  useEffect(() => {
    // fetchData().then((response) => {
    //   setState({
    //     data: [],
    //   })
    // })
    console.log(calculateSum(merchantM6180))

    setState({
      data: [],
    })
  }, [setState])

  return <Routes />
}

export default hot(module)(App)
