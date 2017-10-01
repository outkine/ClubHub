import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as pages from '../pages'

console.log(pages)

export default () => (
  <Switch>
    <Route exact path='/' component={pages.home} />
    <Route path='/clubs' component={pages.clubs} />
    <Route path='/teachers' component={pages.teachers} />
    <Route path='/availability' component={pages.availability} />
    <Route path='/new-club' component={pages.newclub} />
  </Switch>
)
