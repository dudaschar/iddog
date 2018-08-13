import React, {Component} from 'react'
import queryString from 'query-string'
import Header from '../../components/header/Header'
import FeedDogs from '../../components/feedDogs/feedDogs'

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  
  getCategory() {
    const params = queryString.parse(this.props.location.search)
    let category = params.category
    if (typeof category === 'undefined') {
      category = 'husky'
    }
    return category
  }

  render() {
    const category = this.getCategory()
    return (
      <div className="feed">
        <Header />
        <FeedDogs category={category} />
      </div>
    )
  }
}

export default Feed