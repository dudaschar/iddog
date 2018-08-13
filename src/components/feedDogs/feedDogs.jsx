import React, { Component } from 'react'
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'
import Nav from '../nav/nav'
import Photo from '../photo/Photo'
import './feedDogs.css'

class FeedDogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      dogSelected: 'husky'
    }
    this.renderFeed()
  }

  renderFeed() {
  const token = sessionStorage.getItem("token")
  const url = "https://api-iddog.idwall.co/feed?category="
  let dogSelected = this.props.category
  let feedContent = []
  const feedHeader = {
    Authorization: token,
    "Content-Type": "application/json"
  }
  const initFetch = {
    headers: feedHeader,
  }
  fetch(`${url}${dogSelected}`, initFetch)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const contentFetch = data.list
      feedContent = contentFetch.map((image, i) => {
        return <div className="feed-dogs__image" key={i}><Photo img={image} /></div>
      })
      this.setState({ pictures: feedContent})
    })
    .catch(() => this.props.history.push("/"))
  }

  componentDidUpdate(oldProps) {
    if (oldProps.category !== this.props.category) { 
      this.renderFeed() 
    }
  }

  render() {
    
    return (
      <div className="feed-dogs">
        <Nav category={this.props.category} />
        <div className="feed-dogs__list">
          {this.state.pictures}
        </div>  
      </div>
    )
  }
}

export default withRouter(FeedDogs)
