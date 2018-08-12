import React, { Component } from 'react'
import queryString from 'query-string';
import Nav from '../nav/nav'
import Photo from '../photo/Photo'
import './feedDogs.css'

class FeedDogs extends React.Component {
  constructor() {
    super()
    this.renderFeed = this.renderFeed.bind(this)
    this.state = {
      pictures: [],
      dogSelected: 'husky'
    }
  }


  renderFeed() {
  const token = sessionStorage.getItem("token")
  const url = "https://api-iddog.idwall.co/feed?category="
  const params = queryString.parse(window.location.search)
  let feedContent = []
  const feedHeader = {
    Authorization: token,
    "Content-Type": "application/json"
  }
  const initFetch = {
    headers: feedHeader,
  }
  let dogPictures = []

  fetch(`${url}${params.category}`, initFetch)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const contentFetch = data.list
      feedContent = contentFetch.map((image, i) => {
        return <div className="feed-dogs__image" key={i}><Photo img={image} /></div>
      })
      this.setState((prevState) =>
        ({ pictures: feedContent }))
    })
  }

  componentWillMount() {
    this.renderFeed('husky')
  }

  render() {
    
    return (
      <div className="feed-dogs">
      <Nav onClick={this.renderFeed} />
      <div className="feed-dogs__list">
        {this.state.pictures}
      </div>
        
      </div>
    )
  }
}

export default FeedDogs
