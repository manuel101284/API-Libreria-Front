import React, { useState, useEffect } from 'react'
import '../styles/GetOneAuthor.css'
import CardAuthor from './CardAuthor'


const GetOneAuthor = () => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedAuthor, setDebouncedAuthor] = useState('');

    const handleAuthor = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            if (inputValue.trim() !== '') {
                setDebouncedAuthor(inputValue);
            } else {
                setDebouncedAuthor('');
            }
        }, 500);

        return () => {
            clearTimeout(delay);
        };
    }, [inputValue]);

    return (
        <div className='getOneAuthor'>
            <div className='getOneAuthor1'>
                <p className='titleGetOneAuthor'>Ingrese el nombre del autor</p>
                <input
                    type='text'
                    name='nameAuthor'
                    className='inputGetOneAuthor'
                    placeholder='Nombre Autor'
                    value={inputValue}
                    onChange={handleAuthor}
                // onChange={(event) => setAuthor(event.target.value)}
                >
                </input>
                {/* <button className='buttonGetOneAuthor' onClick={handleAuthor}>CONSULTAR</button> */}

                {debouncedAuthor !== '' ? (
                    <CardAuthor nameAuthor={debouncedAuthor} />
                ) : null}
            </div>
        </div>
    )
}

export default GetOneAuthor
