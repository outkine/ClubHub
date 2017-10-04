import React from 'react'

export default ({choices, name, onChange, checked, ...other}) => (
  <div {...other}>
    {
      choices.map((choice) => (
        <label key={choice}>
          {choice}
          <input defaultChecked={checked} value={choice} type='checkbox' name={name} onChange={(event) => onChange(event, event.target.checked)} />
        </label>
      ))
    }
  </div>
)
