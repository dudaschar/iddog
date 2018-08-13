import React from 'react'
import { Link } from 'react-router-dom'

import './nav.css'

const Nav = ({ onClick }) => (
  <div className="nav">
    <ul>
      <li>
        <Link
          className="nav__link"
          to="/feed?category=husky"
        >
            Husky
        </Link>
      </li>
      <li className="nav__link nav__link--mobile">/</li>
      <li>
        <Link
          className="nav__link"
          to="/feed?category=labrador"
        >
          Labrador
        </Link>
      </li>
      <li className="nav__link nav__link--mobile">/</li>
      <li>
        <Link
          className="nav__link"
          to="/feed?category=hound"
        >
          Hound
        </Link>
      </li>
      <li className="nav__link nav__link--mobile">/</li>
      <li>
        <Link
          className="nav__link"
          to="/feed?category=pug"
        >
          Pug
        </Link>
      </li>
    </ul>
  </div>
)

export default Nav
