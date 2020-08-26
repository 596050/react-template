import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, MainNavigation } from './pages'
import { Main, DrawerOption } from './components'
import { Flex } from '@rebass/grid'
import { SideMenu } from './pages/common'
import SideMenuOption from './pages/common/SideMenu/SideMenuOption'

const Routes = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100%">
      <Router>
        <MainNavigation>
          {(setIsOpen) => (
            <>
              <DrawerOption onClick={() => setIsOpen(false)} to="/">
                Home
              </DrawerOption>
              <DrawerOption onClick={() => setIsOpen(false)} to="/route-1">
                Route 1
              </DrawerOption>
              <DrawerOption onClick={() => setIsOpen(false)} to="/route-2">
                Route 2
              </DrawerOption>
            </>
          )}
        </MainNavigation>
        <Main>
          <Flex width="100%" flexDirection="row" height="100%">
            <SideMenu>
              <SideMenuOption to="/">Home</SideMenuOption>
              <SideMenuOption to="/route-1">Route 1</SideMenuOption>
              <SideMenuOption to="/route-2">Route 2</SideMenuOption>
            </SideMenu>
            <Switch>
              <Route path={['/']} component={Home} />
              <Route path={['/route-1']} component={Home} />
              <Route path={['/route-2']} component={Home} />
            </Switch>
          </Flex>
        </Main>
      </Router>
    </Flex>
  )
}

export default Routes
