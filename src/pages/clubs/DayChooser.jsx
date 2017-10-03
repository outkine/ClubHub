import React from 'react'

import Chooser from './Chooser'

export default ({onChange, ...etc}) => (
  <Chooser {...etc} type='checkbox' choices={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']} onChange={onChange} />
)
