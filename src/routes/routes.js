
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

import Home from '../containers/Home'
import Greeting from '../containers/Greeting'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import Kong from '../containers/Kong'
import HanFei from '../containers/HanFei'

import { ROUTE_PATHS } from '../utils/constants'

/*
* This object's entries are a list of all routes in the app
* For each entry, include:
*  - the string path, from the constants.js file
*  - the route-type component (PublicRoute or PrivateRoute)
*  - the actual container component to render
*  - whether or not the path must be exact
*/

export const routes = {
  greeting: {
    path: ROUTE_PATHS.GREETING,
    routeComponent: PublicRoute,
    component: Greeting,
    exact: true,
  },
  login: {
    path: ROUTE_PATHS.LOGIN,
    routeComponent: PublicRoute,
    component: Login,
    exact: true,
  },
  signup: {
    path: ROUTE_PATHS.SIGNUP,
    routeComponent: PublicRoute,
    component: Signup,
    exact: true,
  },
  home: {
    path: ROUTE_PATHS.HOME,
    routeComponent: PrivateRoute,
    component: Home,
    exact: true,
  },
  confucius: {
    path: ROUTE_PATHS.KONG,
    routeComponent: PublicRoute,
    component: Kong,
    exact: true,
  },
  hanfeizi: {
    path: ROUTE_PATHS.HANFEI,
    routeComponent: PublicRoute,
    component: HanFei,
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
