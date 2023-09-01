import React, { useEffect, useState } from 'react'
import defaultAPI from '../apis/index'

const CardAuthor = ({ nameAuthor }) => {
    //console.log(selectAuthor)

    const [author, setAuthor] = useState([])

    var selectedAuthor = nameAuthor
    console.log(selectedAuthor)

    // useEffect((selectedAuthor) => {
    useEffect(() => {
        if (nameAuthor) {
        defaultAPI
            //.get("/getauthor/nameauthor", nameAuthor)
            .get(`/getauthor/nameauthor/${nameAuthor}`)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [nameAuthor])

    //         .get("/getauthor/nameauthor", { selectedAuthor })
    //         .then(res => {
    //             console.log(res.data)
    //             setAuthor(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [selectedAuthor])

    return (
        <div className='CardAuthor'>
            <p>Autores encontrados con "{nameAuthor}":</p>
            {author.length > 0 ? (
                <div>
                    {author.map(author => (
                        <div key={author._id}>
                            <p className='infoAuthor'>Información del Autor</p>
                            <p className='nameAuthor'>Nombre: <br />{author.nameAuthor}</p>
                            <p className='countryAuthor'>País: <br />{author.countryAuthor}</p>
                            <p className='yearBornAuthor'>Año de nacimiento: <br />{author.yearBornAuthor}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No se encontraron autores con ese nombre.</p>
            )}
        </div>
    )
}

export default CardAuthor
