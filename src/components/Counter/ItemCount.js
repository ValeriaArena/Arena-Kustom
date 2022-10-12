import React, {useState} from 'react';
import { Link } from 'react-router-dom';


 const Counter = (prop) => {
    const [count, setCount] = useState (prop.inicial)

    const sumar = () => {
        count < (prop.stock) ? setCount (count +1) : alert ('No hay mas stock')
    };

    const restar = () => {
        count > 0 && setCount (count -1)
    };

    return (
        <div >
            <button onClick={sumar}>Agregar</button>
            <button onClick={restar}>Quitar</button>
            <p style={{color:'black'}}>Total: {count} </p>
            <Link to="/Cart"><button onClick={() => prop.onAdd (count)} disabled={count === 0}>Ir al carrito</button> </Link> 
        </div>
    )
} 
 
export default Counter




