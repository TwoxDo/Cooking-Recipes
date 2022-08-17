import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'>
                    <h1>  Lelei Kitchen  </h1>
                </Link>
                <Searchbar />
                <Link to='/create'>
                    Create Recipe
                </Link>
            </nav>
        </div>
    )
}
