import React from 'react'
import '../styles/SectionBook.css'

const CardBook = () => {
    return (
        <div className='CardBook'>
            <div className='titleBook'>
                <p className='titleBook-1'>Libros</p>
            </div>
            <div className='MenuBook'>
                <button className="buttonBookAPI addBook">Añadir Libro</button>
                <button className="buttonBookAPI seeABook">Ver Libro</button>
                <button className="buttonBookAPI seeAllBooks">Ver Todos</button>
                <button className="buttonBookAPI editABook">Editar un Libro</button>
                <button className="buttonBookAPI deleteABook">Borrar un Libro</button>
            </div>
        </div>
    )
}

export default CardBook
