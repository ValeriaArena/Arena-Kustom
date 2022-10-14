import React, {useState} from 'react';



 const Counter = ({stock, inicial, onAdd}) => {
    const [count, setCount] = useState (inicial)

    const sumar = () => {
        count < (stock) && setCount(count + 1);
    };

    const restar = () => {
        count > 0 && setCount (count -1)
    };

    return (
        <div >
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p style={{color:'black'}}>Total: {count} </p>
            <button onClick={() => onAdd (count)} disabled={count === 0}>Agregar al carrito</button>  
        </div>
    )
} 
 
export default Counter




