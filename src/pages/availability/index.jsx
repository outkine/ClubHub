import React from 'react'
import { css } from 'glamor'
import { graphql, gql } from 'react-apollo'

import { grid, stylesheet } from 'shared/style'
import Day from './Day'
import Chooser from 'shared/RadioChooser'
import { getEventValue } from 'shared/helpers'

@graphql(gql`
  query {
    allTeachers {
      name
      daysAvailable
      clubs {
        name
        days
      }
    }
  }
`)
export default class Component extends React.Component {
  state = {
    activeDay: '',
    days: {
      'monday': [],
      'tuesday': [],
      'wednesday': [],
      'thursday': [],
      'friday': []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.data.loading) {
      console.log(nextProps)
      for (let teacher of nextProps.data.allTeachers) {
        for (let day of teacher.daysAvailable) {
          this.state.days[day.toLowerCase()].push(teacher.name)
        }
      }
      this.forceUpdate()
    }
  }

  render () {
    if (this.props.data.loading) {
      return <div>Loading!</div>
    } else if (this.props.data.error) {
      return <div>Error!</div>
    }
    return (
      <div>
        <Chooser onChange={(event) => {this.setState({activeDay: event.target.value}); console.log(event)}} name='days' choices={Object.keys(this.state.days)} />
        {
          this.state.activeDay ? (
            <Day teachers={this.state.days[this.state.activeDay]} />
          ) : ''
        }
      </div>
    )
  }
}
