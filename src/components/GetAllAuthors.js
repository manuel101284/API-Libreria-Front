import React, { useState, useEffect } from 'react'
import defaultAPI from '../apis/index'
import '../styles/GetAllAuthors.css'

const GetAllAuthors = () => {

    const [dataAuthor, setDataAuthor] = useState([])

    useEffect(() => {
        defaultAPI
            .get("/getallauthors")
            .then(res => {
                console.log(res.data)
                setDataAuthor(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='getAllAuthors'>
            {dataAuthor.map((index) => {
                return (
                    <div key={index._id} className='getAllAuthors1'>
                        <div className='dataAuthor'>
                            Nombre:
                            <br />
                            <p className='dataAuthor'>{index.nameAuthor}</p>
                        </div>
                        <div className='dataAuthor'>
                            País:
                            <br />
                            <p className='dataAuthor'>{index.countryAuthor}</p>
                        </div>
                        <div className='dataAuthor'>
                            Año de nacimiento:
                            <br />
                            <p className='dataAuthor'>{index.yearBornAuthor}</p>
                        </div>
                    </div>
                )
            })}
            <button className='buttonGetAllAuthors'>Volver</button>
        </div>
    )
}

export default GetAllAuthors
