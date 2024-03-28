import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <>
        <nav>
            <div className='logo'>Moez</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar