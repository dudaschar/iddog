import React, {Component} from 'react'
import Header from '../../components/header/Header'
import FeedDogs from '../../components/feedDogs/feedDogs'
import Dog from '../feed/img/dog.jpg'

class Feed extends React.Component {
  render() {
    return (
      <div className="feed">
        <Header />
        <FeedDogs />
      </div>
    )
  }
}

export default Feed