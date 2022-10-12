import React from 'react'
import { useState } from 'react';

const Form = () =>{
    const [nombre, setNombre] = useState ('');
    const [apellido, setApellido] = useState ('');
    const [mail, setMail] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault ();
        console.log (nombre, apellido, mail);
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value)
    };
    const handleChangeApellido = (event) => {
        setApellido(event.target.value)
    };
    const handleChangeMail = (event) => {
        setMail(event.target.value)
    };

    return (
        <div style={{marginTop: "20px"}}>
            <form action='' onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre...' name="nombre" value= {nombre} onChange={handleChangeNombre} />
                <input type="text" placeholder='Apellido...' name="apellido" value= {apellido} onChange={handleChangeApellido} />
                <input type="text" placeholder='Mail...' name="mail" value= {mail} onChange={handleChangeMail} />
                <button> Enviar </button>
            </form>
            
        </div>
    )
};


export default Form 