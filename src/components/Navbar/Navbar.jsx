import React from 'react';

import { images } from '../../contants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <img src={images.tempLogo}/>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
// hey i work
export default Navbar