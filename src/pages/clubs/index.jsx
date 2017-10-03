import React from 'react'
import { graphql, gql } from 'react-apollo'
import { css } from 'glamor'

import { grid, stylesheet } from 'shared/style'
import { getEventValue } from 'shared/helpers'

import ClubResult from './ClubResult'
import Chooser from './Chooser'


@graphql(gql`
  query {
    allClubs {
      name
      days
      type
    }
  }
`)
export default class Component extends React.Component {
  clubs = []
  state = {
    searchResults: [],
    activeResult: '',
    clubTypeFilter: {
      culture: false,
      arts: false,
      dances: false,
      academic: false,
      politics: false,
      sports: false
    },

    dayFilter: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false
    }
  }

  render () {
    console.log(this.state)
    if (this.props.data.loading) {
      return <div>Loading!</div>
    } else if (this.props.data.error) {
      return <div>Error!</div>
    }

    return (
      <div {...css(grid.col, rules.base)}>
        <div>
          <input {...css(grid.horizontalCenter, rules.search)} value={this.state.search} onChange={(event) => this.search(event.target.value.toLowerCase())} />
          <div {...grid.row}>
            <Chooser onChange={this.applyFilter} type='checkbox' name='clubTypeFilter' choices={Object.keys(this.state.clubTypeFilter)} />
            <Chooser onChange={this.applyFilter} type='checkbox' name='dayFilter' choices={Object.keys(this.state.dayFilter)} />
          </div>
        </div>

        <div {...rules.divider} />

        <ul>
          {
            this.state.searchResults.map((name) => (
              <li key={name}>
                <div {...rules.searchResult} onClick={() => this.setState({activeResult: (this.state.activeResult === name ? '' : name)})}>{name}</div>
                {
                  this.state.activeResult === name ? (
                    <ClubResult name={name} />
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
    if (query) {
      for (let club of this.props.data.allClubs) {
        console.log(club.name.toLowerCase().includes(query),
          this.doDaysAlign(club.days),
          this.state.clubTypeFilter[club.type.toLowerCase()])
        if (
          club.name.toLowerCase().includes(query) &&
          this.doDaysAlign(club.days) &&
          this.state.clubTypeFilter[club.type.toLowerCase()]
          ) {
          this.state.searchResults.push(club.name)
        }
      }
    }
    this.forceUpdate()
  }

  applyFilter = (event, filter) => {
    this.state[event.target.name][filter] = getEventValue(event.target)
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

const rules = stylesheet({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    margin: 10
  },

  searchResult: {
    border: '1px solid black',
    margin: '0 10px',
    textAlign: 'center',
  }
})
