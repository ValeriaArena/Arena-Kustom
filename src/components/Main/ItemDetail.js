import React, { useContext } from 'react';
import {useState} from 'react';
import { CartContext } from '../../context/CartContext';
import Counter from "../Counter/ItemCount";
import { Link } from 'react-router-dom';


 const ItemDetail = (prop) =>{
    const [cantidad, setCantidad] = useState(0);
    const {cart, addToCart} = useContext (CartContext)

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem)
        addToCart(prop, cantidadItem)
        
    };

    console.log (cart);

    return (
         <div style={{ display: "flex", justifyContent: "center"}} key={prop.product.id}>
                <div className='cardProductos' >
                    <h2 className='tituloProducto'>{prop.product.title}</h2>
                    <h3>$ {prop.product.price}</h3>
                    <p>{prop.product.description}</p>
                    <img src={prop.product.img} className="ImgProductos" alt={prop.product.title}/>
                    {cantidad === 0 ? (
                    <Counter stock={prop.product.stock} inicial={0} onAdd= {onAdd}/>
                    ) : (
                        <Link to="/cart">Ir al carrito</Link>
                    )}
                </div>
            </div> 
    )}


export default ItemDetail   