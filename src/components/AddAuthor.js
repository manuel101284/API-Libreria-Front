import React, { useState } from 'react'
import '../styles/AddAuthor.css'
import defaultAPI from '../apis/index'

const AddAuthor = () => {

    const [nameAuthor, setNameAuthor] = useState('')
    const [countryAuthor, setCountryAuthor] = useState('')
    const [yearAuthor, setYearAuthor] = useState(0)

    const handleChangeName = event => {
        setNameAuthor(event.target.value);
    }
    const handleChangeCountry = event => {
        setCountryAuthor(event.target.value);
    }
    const handleChangeYear = event => {
        setYearAuthor(event.target.value);
    };

    function addAnAuthor() {

        var newAuthor = {
            nameAuthor: nameAuthor,
            countryAuthor: countryAuthor,
            yearBornAuthor: yearAuthor,
        }

        console.log(newAuthor)

        defaultAPI
            .post("/addauthor", newAuthor)
            .catch((err) => {
                console.log(err)
            })
            .then((res) => {
                console.log("Autor registrado con éxito")
            })
    }

    return (
        <div className='addAuthor'>
            <div className='addAuthor1' action='' target='_blank'>
                <p>Nombre: </p><input className='inputAuthor' name='nameAuthor' type='text' placeholder='Nombre' value={nameAuthor} onChange={handleChangeName} />
                <p>País: </p><input className='inputAuthor' name='countryAuthor' type='text' placeholder='País' value={countryAuthor} onChange={handleChangeCountry} />
                <p>Año de nacimiento: </p><input className='inputAuthor' name='yearAuthor' type='number' placeholder='Año de nacimiento' value={yearAuthor} onChange={handleChangeYear} />
                <button className='buttonAddAuthor' onClick={addAnAuthor}>Añadir</button>
            </div>
        </div>
    )
}

export default AddAuthor
