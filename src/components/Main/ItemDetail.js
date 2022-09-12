 import React from 'react'

const ItemDetail = (prop) =>{
    return <div>
        {prop.product.map (() => {
            return (
                <div key={prop.producto.title}>
                <div className='cardProductos' >
                    <h2 className='tituloProducto'>{prop.producto.title}</h2>
                    <h3>$ {prop.producto.price}</h3>
                    <p>{prop.producto.description}</p>
                    <img src={prop.producto.img} className="ImgProductos" alt="Prueba"/>
                </div>
            </div> 
               
            )})
        }    </div>
};


export default ItemDetail  