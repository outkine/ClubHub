import React from 'react'

export default ({teacher, ...other}) => (
  <div {...other}>
    <b>clubs:</b>
    <ul>
      {
        teacher.clubs.map((club) => (
          <li key={club.name}>
            {club.name}
          </li>
        ))
      }
    </ul>
  </div>
)
