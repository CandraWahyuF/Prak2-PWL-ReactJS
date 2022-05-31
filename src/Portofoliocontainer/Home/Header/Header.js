import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-parent'>
        <span className='header-child'>Portfolio</span>
        <li className='headerchild'>
          <a href='#'>Home</a>
        </li>
        <li className='headerchild'>
          <a href='#'>About Me</a>
        </li>
        <li className='headerchild'>
          <a href='#'>Skills</a>
        </li>
        <li className='headerchild'>
          <a href='#'>Contact Me</a>
        </li>
        <div> </div>
      </div>
    </div>
  );
}
