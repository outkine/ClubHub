import React from 'react'

export default ({club, ...other}) => (
  <ul {...other}>
    <li>
      <b>Teacher: </b>{club.teacher.name}
    </li>
    <li>
      <b>Days: </b>{club.days.map((day) => day.capitalize())}
    </li>
    <li>
      <b>Time: </b>{club.startTime} - {club.endTime}
    </li>
    <li>
      <b>Category: </b>{club.type.capitalize()}
    </li>
  </ul>
)
