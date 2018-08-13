import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'

import './photo.css'

const Photo = ({ img }) => (
  <div className="photo">
    <Popup
      trigger={
        <Fade>
          <div className="photo__list">
            <img src={img} />
          </div>
        </Fade>
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