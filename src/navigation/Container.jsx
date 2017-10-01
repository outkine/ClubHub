import React from 'react'

import Header from './Header'
import { globals } from 'shared/style'


export default ({children}) => (
  <div {...globals}>
    <Header />
    {children}
  </div>
)
