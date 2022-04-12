import React from 'react'
import Logo from './images/Troll.png'
import './style.css'

export default function Header() {
    return(
        <div className='header'>
            <img src={Logo} className='header-img'/>
            <h2 className="header--title">MEME GENERATOR</h2>
        </div>
    )
}