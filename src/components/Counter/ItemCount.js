import React, {useState} from 'react'

 const Counter = (prop) => {

    const [count, setCount] = useState (0)

    //let tope= 10

    const sumar = () => {
        // if (count < tope)
        // setCount (count +1)
        // else {
        //    alert ('No hay mas stock') 
        // }

        //otra forma de escritura TERNARIO
        count < (prop.stock) ? setCount (count +1) : alert ('No hay mas stock')
    };

    const restar = () => {
        // if (count > 0)
        // setCount (count -1)
        // else {
        //     alert ('Minimo de unidades 1')
        // }
        count > 0 && setCount (count -1)
    };

    const gracias = () => {
        alert (prop.onAdd)
    };

    return (
        <div className='Carrito'>
            <button onClick={sumar}>Agregar</button>
            <button onClick={restar}>Quitar</button>
            <p style={{color:'black'}}>Total: {count} </p>
            <button onClick={gracias} disabled={count === 0}>Ir al carrito</button>
            
        </div>
    )
} 

//otro ejemplo de la clase

/*  const Texto = () => {

    const [nombre, setNombre] = useState('Valeria');

    const cambiarNombre = () => {
        if (nombre === 'Valeria'){
        setNombre ('Pepita');
        }else {
           setNombre ('Valeria'); 
        }
    };

    return (
        <div>
            <p>Mi nombre es: {nombre}</p>
            <button onClick={cambiarNombre}>Cambiar nombre</button>
       </div>
    )  
}; */
 

export default Counter




