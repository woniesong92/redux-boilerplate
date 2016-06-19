import React from 'react'
import { Route, IndexRoute } from 'react-router'

/*
  NOTE:
  We should only route to views.
  View is smart but different from containers because it can render DOM elements instead of rendering components.
  Its DOM elements should be refactored to components if they must be reused in other views or containers.
*/

import HomeView from 'views/HomeView'
import CoursesView from 'views/CoursesView'
// TODO: import InstructorsView from 'views/InstructorsView'

export const createRoutes = (store) => {
  return (
    <Route path='/'>
      <IndexRoute component={HomeView} />
      <Route path="/courses" component={CoursesView} />
    </Route>
  )
}

export default createRoutes
