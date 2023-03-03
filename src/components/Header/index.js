import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="lists-items">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="about">about</Link>
      </li>
    </ul>
  </nav>
)

export default Header
