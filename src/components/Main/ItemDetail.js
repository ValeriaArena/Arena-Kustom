 import React from 'react';
import {useState} from 'react';
 import Counter from "../Counter/ItemCount";



 const ItemDetail = (prop) =>{
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        console.log (cantidad)
    };

    return (
         <div style={{ display: "flex", justifyContent: "center"}} key={prop.product.id}>
                <div className='cardProductos' >
                    <h2 className='tituloProducto'>{prop.product.title}</h2>
                    <h3>$ {prop.product.price}</h3>
                    <p>{prop.product.description}</p>
                    <img src={prop.product.img} className="ImgProductos" alt={prop.product.title}/>
                    <Counter stock={prop.product.stock} inicial={0} onAdd= {onAdd}/>
                </div>
            </div> 
    )}


export default ItemDetail   