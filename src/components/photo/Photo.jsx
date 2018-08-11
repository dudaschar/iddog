import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Photo = ({ img, alt, url }) => {
    return (
        <div className="photo">
            <Link to={url}>
                <img src={img} alt={alt}/>
            </Link>
        </div>
    )
}

Photo.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Photo