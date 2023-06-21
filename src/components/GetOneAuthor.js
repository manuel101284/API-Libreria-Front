import React, { useState } from 'react'
import '../styles/GetOneAuthor.css'

import CardAuthor from './CardAuthor'

const GetOneAuthor = () => {

    const [selectAuthor, setSelectAuthor] = useState("")

    const handleAuthor = (event) => {
        setSelectAuthor(event.target.value)
    }

    return (
        <div className='getOneAuthor'>
            <div className='getOneAuthor1'>
                <p className='titleGetOneAuthor'>Ingrese el nombre del autor</p>
                <input
                    type='text'
                    name='nameAuthor'
                    className='inputGetOneAuthor'
                    placeholder='Nombre Autor'
                    value={selectAuthor}
                    onChange={handleAuthor}
                // onChange={(event) => setAuthor(event.target.value)}
                >
                </input>
                {/* <button className='buttonGetOneAuthor' onClick={handleAuthor}>CONSULTAR</button> */}

                <CardAuthor nameAuthor={selectAuthor} />

            </div>
        </div>
    )
}

export default GetOneAuthor
