import React from 'react'

const Item = (prop) =>{
            return (
                 <div key={prop.producto.id}>
                        <div className='cardProductos' >
                            <h2 className='tituloProducto'>{prop.producto.title}</h2>
                            <h3>$ {prop.producto.price}</h3>
                            <p>{prop.producto.description}</p>
                            <img src={prop.producto.img} className="ImgProductos" alt="Prueba"/>
                        </div>
                    </div> 
            )}

export default Item  