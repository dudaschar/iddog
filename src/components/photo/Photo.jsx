import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'

import './photo.css'

const Photo = ({ img }) => (
  <div className="photo">
    <Popup
      trigger={
        <div className="photo__list">
          <img src={img} />
        </div>
      }
      modal
      closeOnDocumentClick
    >
    <img className="photo__modal" src={img}/>
    </Popup>
  </div>
    
  )

Photo.propTypes = {
    img: PropTypes.string.isRequired,
}

export default Photo