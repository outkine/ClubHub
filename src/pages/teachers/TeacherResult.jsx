import React from 'react'

export default ({teacher}) => (
  <div>
    <p>{teacher.name}</p>
    <p>clubs:</p>
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
