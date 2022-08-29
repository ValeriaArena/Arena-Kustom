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

        //otra forma de escritura Ternario
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

    return (
        <div className='Carrito'>
            <button onClick={sumar}>Agregar</button>
            <button onClick={restar}>Quitar</button>
            <p style={{color:'black'}}>Total: {count} </p>
            <button disabled={count === 0}>Ir al carrito</button>
        </div>
    )
}

export default Counter


