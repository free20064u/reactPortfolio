import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const links = [
  {
    id: 1,
    to:"/",
    path:"Home"
  },
  {
    id: 2,
    to:"/menu",
    path:"Menu"
  },
  {
    id: 3,
    to: "/gallery",
    path: "Gallery"
  },
  {
    id: 4,
    to:"/news",
    path:"News"
  },
  {
    id: 5,
    to:"/contact",
    path:"Contact"
  }
]


const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='navList'>
          {links.map((link)=>{
            return(
            <li className='navItem' key={link.id}><Link className='linkItem' to={link.to}>{link.path}</Link></li>
            )
          })
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar