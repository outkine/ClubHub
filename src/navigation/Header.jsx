import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

import { theme } from 'shared/style'

export default ({children}) => (
  <div {...theme.header}>
    <Link {...(window.location.pathname === '/clubs' ? theme.activeHeader : {})} to='/clubs'>CLUBS</Link>
    <Link {...(window.location.pathname === '/teachers' ? theme.activeHeader : {})} to='/teachers'>TEACHERS</Link>
    <Link {...(window.location.pathname === '/availability' ? theme.activeHeader : {})} to='/availability'>AVAILABILITY</Link>
  </div>
)
