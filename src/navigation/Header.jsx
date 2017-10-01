import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

import { grid } from 'shared/style'

export default ({children}) => (
  <div {...css(rules, grid.row)}>
    <Link to='/clubs'>Clubs</Link>
    <Link to='/teachers'>Teachers</Link>
    <Link to='/availability'>Availability</Link>
  </div>
)

const rules = css({
  height: 30
})
