import React from 'react'
import imgHome from '../images/pexels-olena-bohovyk-3646172.jpg'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='HomePage'>
            <p>API de una Librería</p>
            <img className='imgHome-01' alt='Foto de una librería' src={imgHome} />
        </div>
    )
}

export default Home
