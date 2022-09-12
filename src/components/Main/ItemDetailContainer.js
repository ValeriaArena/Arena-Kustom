import { producto } from "../../mock/productos";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


const MainDetalle = (props) => {
    
    const [product, setProduct] = useState({});

    useEffect (() => {
        //Promise
        const getProduct = new Promise ((resolve,rejest) => {
            setTimeout(() => {
            resolve(producto);
            }, 2000);
        });

        getProduct.then ((data) => {
            setProduct(data);
        })
         //en caso de 'rejest'
            .catch ((error) => {
            console.log ('catch: ', error) })
          /*   //se ejecuta más allá del 'resultado'
            .finally(() => {
                console.log ('Terminé');
            }); */
    }, []);  

    console.log( 'hola',  product)

 

    return (
        <main className="Main">
            <h1> Detalle del producto </h1> 
            <ItemDetail product={product} />  
             
        </main>
    )
}

export default MainDetalle