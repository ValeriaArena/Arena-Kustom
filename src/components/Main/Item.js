import React from 'react'
import { Link } from 'react-router-dom'

const Item = (prop) =>{
            return (
                 <div style={{ display: "flex", justifyContent: "center"}} key={prop.producto.id}>
                        <div className='cardProductos' >
                            <h2 className='tituloProducto'>{prop.producto.title}</h2>
                            <img src={prop.producto.img} className="ImgProductos" alt={prop.producto.title}/>
                            <Link to={`/item/${prop.producto.id}`}>
                            <button >Ver detalle</button>
                            </Link>
                        </div>
                    </div> 
            )}

export default Item  