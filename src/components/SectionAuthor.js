import React from 'react'
import '../styles/SectionAuthor.css'
import { Link } from 'react-router-dom'

const CardAuthor = () => {

    return (
        <div className='CardAuthor'>
            <div className='titleAuthor'>
                <p className='titleAuthor-1'>Autores</p>
            </div>
            <div className='MenuAuthor'>
                <button className="buttonAuthorAPI addAuthor"><Link to="AddAuthor">Añadir Autor</Link></button>
                <button className="buttonAuthorAPI seeAnAuthor"><Link to="GetOneAuthor">Ver Autor</Link></button>
                <button className="buttonAuthorAPI seeAllAuthors"><Link to="GetAllAuthors">Ver Todos</Link></button>
                <button className="buttonAuthorAPI editAnAuthor">Editar un Autor</button>
                <button className="buttonAuthorAPI deleteAnAuthor">Borrar un Autor</button>
            </div>
        </div>
    )
}

export default CardAuthor
