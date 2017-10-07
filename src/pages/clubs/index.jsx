import React from 'react'
import { graphql, gql } from 'react-apollo'
import { css } from 'glamor'

import { theme } from 'shared/style'
import { getEventValue } from 'shared/helpers'

import ClubResult from './ClubResult'
import Chooser from 'shared/CheckboxChooser'


@graphql(gql`
  query {
    allClubs {
      name
      days
      type
      startTime
      endTime
      teacher {
        name
      }
    }
  }
`)
export default class Component extends React.Component {
  clubs = []
  state = {
    searchResults: [],
    activeResult: '',
    clubTypeFilter: {
      culture: true,
      arts: true,
      dances: true,
      academic: true,
      politics: true,
      sports: true
    },

    dayFilter: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.data.loading) {
      this.state.searchResults = nextProps.data.allClubs
    }
  }

  render () {
    if (this.props.data.loading) {
      return <div>Loading!</div>
    } else if (this.props.data.error) {
      console.log(this.props.data.error)
      return <div>Error!</div>
    }
    console.log(this.props.data.teacher)

    return (
      <div>
        <div>
          <input {...theme.search} onChange={(event) => this.search(event.target.value.toLowerCase())} />
          <div {...theme.searchOptions}>
            <Chooser {...theme.searchOption} onChange={this.applyFilter} checked name='clubTypeFilter' choices={Object.keys(this.state.clubTypeFilter)} />
            <Chooser {...theme.searchOption} onChange={this.applyFilter} checked name='dayFilter' choices={Object.keys(this.state.dayFilter)} />
          </div>
        </div>

        <div {...theme.divider} />

        <ul {...theme.results}>
          {
            this.state.searchResults.map((club) => (
              <li key={club.name}>
                <div {...theme.resultHeading} onClick={() => this.setState({activeResult: (this.state.activeResult === club.name ? '' : club.name)})}>{club.name}</div>
                {
                  this.state.activeResult === club.name ? (
                    <ClubResult {...theme.resultBody} club={club} />
                  ) : ''
                }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

  search = (query) => {
    this.query = query
    this.state.searchResults = []
    for (let club of this.props.data.allClubs) {
      console.log(club.name.toLowerCase().includes(query),
        this.doDaysAlign(club.days),
        this.state.clubTypeFilter[club.type.toLowerCase()])
      if (
        (!query || club.name.toLowerCase().includes(query)) &&
        this.doDaysAlign(club.days) &&
        this.state.clubTypeFilter[club.type.toLowerCase()]
        ) {
        this.state.searchResults.push(club)
      }
    }
    this.forceUpdate()
  }

  applyFilter = (event) => {
    this.state[event.target.name][event.target.value] = getEventValue(event.target)
    this.search(this.query)
  }

  doDaysAlign = (days) => {
    for (let day of days) {
      if (this.state.dayFilter[day.toLowerCase()]) {
        return true
      }
    }

    return false
  }
}
