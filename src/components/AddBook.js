import React from 'react'

const AddBook = () => {
    return (
        <div className='addBook'>
            <div className='addBook-1'>
                <input className='inputBook' type='String'>Título</input>
                <input className='inputBook' type='Number'>Año publicación</input>
                <input className='inputBook' type='Number'>N° de páginas</input>
                <button className='buttonAddBook'>Añadir</button>
            </div>
        </div>
    )
}

export default AddBook
