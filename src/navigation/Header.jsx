import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

import { grid, theme } from 'shared/style'

export default ({children}) => (
  <div {...css(theme.header, grid.row)}>
    <Link {...theme.headerText} to='/clubs'>CLUBS</Link>
    <Link {...theme.headerText} to='/teachers'>TEACHERS</Link>
    <Link {...theme.headerText} to='/availability'>AVAILABILITY</Link>
  </div>
)
