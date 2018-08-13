import React, {Component} from 'react'
import qs from 'qs'
import Header from '../../components/header/Header'
import FeedDogs from '../../components/feedDogs/feedDogs'

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  
  getCategory() {
    const params = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
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