// @flow
import { App, Home, NotFound } from './modules/Containers'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        component: NotFound
      }
    ]
  }
]

export default routes
