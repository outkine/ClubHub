import React from 'react'
import { graphql, gql } from 'react-apollo'
import { css } from 'glamor'

import { theme } from 'shared/style'
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

    return (
      <div>
        <input {...theme.search} onChange={(event) => this.search(event.target.value.toLowerCase())} />
        <div {...theme.divider} />

        <ul {...theme.results}>
          {
            this.state.searchResults.map((teacher) => (
              <li key={teacher.name}>
                <div {...theme.resultHeading} onClick={() => this.setState({activeResult: (this.state.activeResult === teacher.name ? '' : teacher.name)})}>{teacher.name}</div>
                {
                  this.state.activeResult === teacher.name ? (
                    <TeacherResult {...theme.resultBody} teacher={teacher} />
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
