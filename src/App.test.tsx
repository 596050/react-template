import React, { ReactElement } from "react";
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {GlobalProvider} from './components'
import {theme} from './utils'
import App from "./App";

Enzyme.configure({ adapter: new Adapter() })

 const WrapWithProviders = (
  {
    initialEntries = ['/'],
  }: {
    initialEntries?: string[]
  } = {
    initialEntries: ['/'],
  }
) => ({ children }: { children: ReactElement }) => {
  return (
    <GlobalProvider>
      <MemoryRouter initialEntries={initialEntries}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MemoryRouter>
    </GlobalProvider>
  )
}

describe('<App/>', function () {
  it('should render app',  () => {
    const component = mount(<App />, {
      wrappingComponent: WrapWithProviders(),
    })
  })
})