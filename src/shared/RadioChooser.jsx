import React from 'react'

export default class Component extends React.Component {
  state = {
    activeChoice: ''
  }

  render () {
    const {choices, name, onChange, ...other} = this.props

    return (
      <div {...other}>
        {
          choices.map((choice) => (
            <label key={choice}>
              <input type='radio' value={choice} name={name} onChange={this.onChange} checked={choice === this.state.activeChoice} />
              <span>{choice}</span>
            </label>
          ))
        }
      </div>
    )
  }

  onChange = (event) => {
    this.props.onChange(event)
    this.setState({activeChoice: event.target.value})
  }
}
