import React from 'react'

import Chooser from './Chooser'

export default ({onChange, ...etc}) => (
  <Chooser {...etc} type='radio' choices={['Culture', 'Arts', 'Dances', 'Academics', 'Politics', 'Sports']} onChange={onChange} />
)
