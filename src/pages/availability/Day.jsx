import React from 'react'

export default ({teachers}) => (
  <ul>
    {
      teachers.map((teacher) => (
        <li key={teacher}>
          {teacher}
        </li>
      ))
    }
  </ul>
)
