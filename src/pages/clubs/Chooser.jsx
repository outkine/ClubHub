import React from 'react'

export default ({choices, type, name, onChange, ...other}) => (
  <div {...other}>
    {
      choices.map((choice) => (
        <label key={choice}>
          {choice}
          <input checked type={type} name={name} onChange={(event) => onChange(event, choice)} />
        </label>
      ))
    }
  </div>
)
