import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import * as pages from '../pages'

export default () => (
  <Switch>
    <Route exact path='/' render={() => <Redirect to='/clubs' />} />
    <Route path='/clubs' component={pages.clubs} />
    <Route path='/teachers' component={pages.teachers} />
    <Route path='/availability' component={pages.availability} />
    <Route path='/new-club' component={pages.newclub} />
  </Switch>
)
