import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='NavBarApi'>
            <div className='Menu'>
                <Link to="./" className='OptionHome'>Home</Link>
                <Link to="Autores" className='OptionAuthors'>Autores</Link>
                <Link to="Libros" className='OptionBooks'>Libros</Link>
            </div>
            <div className='Buttons'>
                <button>Dia/Noche</button>
            </div>
        </div>
    )
}

export default Navbar
