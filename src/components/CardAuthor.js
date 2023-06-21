import React, { useEffect, useState } from 'react'
import defaultAPI from '../apis/index'

const CardAuthor = ({ nameAuthor }) => {
    //console.log(selectAuthor)

    const [author, setAuthor] = useState([])

    var selectedAuthor = nameAuthor

    console.log(selectedAuthor)

    useEffect((selectedAuthor) => {

        defaultAPI
            //.get("/getauthor/nameauthor", nameAuthor)
            .get("/getauthor/nameauthor", { selectedAuthor })
            .then(res => {
                console.log(res.data)
                setAuthor(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [selectedAuthor])

    return (
        <div className='CardAuthor'>
            <p> Autor buscado: {nameAuthor}</p>
            {author ? (
                <div>
                    <p className='infoAuthor'>Información del Autor</p>
                    <p className='nameAuthor'>Nombre: <br />{author.nameAuthor}</p>
                    <p className='countryAuthor'>País: <br />{author.countryAuthor}</p>
                    <p className='yearBornAuthor'>Año de nacimiento: <br />{author.yearBornAuthor}</p>
                    {/* <pre>{JSON.stringify(author, null, 2)}</pre> */}
                </div>
            ) : (
                <p>Cargando Información...</p>
            )
            }
        </div>
    )
}

export default CardAuthor
