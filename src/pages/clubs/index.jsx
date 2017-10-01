import React from 'react'
import { graphql, gql } from 'react-apollo'
import { css } from 'glamor'

import { grid } from 'shared/style'
import { stylesheet } from 'shared/style'

import ClubResult from './ClubResult'

@graphql(gql`
  query {
    allClubs {
      name
    }
  }
`)
export default class Component extends React.Component {
  clubs = []
  state = {
    searchResults: [],
    activeResult: ''
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.loading) {
      this.clubs = nextProps.data.allClubs.map(({ name }) => name)
    }
  }

  render () {
    if (this.props.data.loading) {
      return <div>Loading!</div>
    } else if (this.props.data.error) {
      return <div>Error!</div>
    }

    return (
      <div {...css(grid.col, rules.base)}>
        <div>
          <input {...css(grid.horizontalCenter, rules.search)} onChange={this.search} />
          <div {...grid.row}>
            <div>
              <label>
                Monday
                <input type="radio" name="day" />
              </label>
              <label>
                Tuesday
                <input type="radio" name="day" />
              </label>
              <label>
                Wednesday
                <input type="radio" name="day" />
              </label>
              <label>
                Thursday
                <input type="radio" name="day" />
              </label>
              <label>
                Friday
                <input type="radio" name="day" />
              </label>
            </div>

            <div>
              <label>
                Academic
                <input type="radio" name="field" />
              </label>
              <label>
                Arts
                <input type="radio" name="field" />
              </label>
            </div>
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
    this.state.searchResults = []
    if (query.target.value) {
      for (let name of this.clubs) {
        if (name.toLowerCase().includes(query.target.value.toLowerCase())) {
          this.state.searchResults.push(name)
        }
      }
    }
    this.forceUpdate()
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
