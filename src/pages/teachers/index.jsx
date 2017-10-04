import React from 'react'
import { graphql, gql } from 'react-apollo'
import { css } from 'glamor'

import { grid, stylesheet } from 'shared/style'
import TeacherResult from './TeacherResult'

@graphql(gql`
  query {
    allTeachers {
      name
      clubs {
        name
      }
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
    if (!nextProps.data.loading) {
      this.state.searchResults = nextProps.data.allTeachers
    }
  }

  render () {
    if (this.props.data.loading) {
      return <div>Loading!</div>
    } else if (this.props.data.error) {
      return <div>Error!</div>
    }

    console.log(this.state.searchResults)

    return (
      <div>
        <input {...css(grid.horizontalCenter, rules.search)} onChange={(event) => this.search(event.target.value.toLowerCase())} />
        <div {...rules.divider} />

        <ul>
          {
            this.state.searchResults.map((teacher) => (
              <li key={teacher.name}>
                <div {...rules.searchResult} onClick={() => this.setState({activeResult: (this.state.activeResult === teacher.name ? '' : teacher.name)})}>{teacher.name}</div>
                {
                  this.state.activeResult === teacher.name ? (
                    <TeacherResult teacher={teacher} />
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
    for (let teacher of this.props.data.allTeachers) {
      console.log(teacher.name.includes(query), teacher.name, query)
      if (
        !query || teacher.name.toLowerCase().includes(query)
        ) {
        this.state.searchResults.push(teacher)
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
