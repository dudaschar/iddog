import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './nav.css'

const Nav = ({ onClick }) => (
  <div className="nav">
    <ul>
      <li>
        <Link
          className="nav__link"
          onClick={onClick}
          to="/feed?category=husky"
        >
            Husky
        </Link>
      </li>
      <li className="nav__link nav__link--mobile">/</li>
      <li>
        <Link
          className="nav__link"
          onClick={onClick}
          to="/feed?category=labrador"
        >
          Labrador
        </Link>
      </li>
      <li className="nav__link nav__link--mobile">/</li>
      <li>
        <Link
          className="nav__link"
          onClick={onClick}
          to="/feed?category=hound"
        >
          Hound
        </Link>
      </li>
      <li className="nav__link nav__link--mobile">/</li>
      <li>
        <Link
          className="nav__link"
          onClick={onClick}
          to="/feed?category=pug"
        >
          Pug
        </Link>
      </li>
    </ul>
  </div>
)

Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Nav
