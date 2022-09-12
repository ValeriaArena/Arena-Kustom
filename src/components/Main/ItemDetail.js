 import React from 'react'
 import Counter from "../Counter/ItemCount";

 function gracias() {
    alert('Gracias por su compra');
} 

 const ItemDetail = (prop) =>{
    return (
         <div key={prop.product.id}>
                <div className='cardProductos' >
                    <h2 className='tituloProducto'>{prop.product.title}</h2>
                    <h3>$ {prop.product.price}</h3>
                    <p>{prop.product.description}</p>
                    <img src={prop.product.img} className="ImgProductos" alt="Prueba"/>
                    <Counter stock='10' inicial='0' onAdd= {gracias}/>
                </div>
            </div> 
    )}


export default ItemDetail   