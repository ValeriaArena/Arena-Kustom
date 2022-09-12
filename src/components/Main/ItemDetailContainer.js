import { producto } from "../../mock/productos";
import { useState, useEffect } from "react";
//import Counter from "../Counter/ItemCount";
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

   /*  function gracias() {
        alert('Gracias por su compra');
    } */

    return (
        <main className="Main">
            <h1> Detalle del producto </h1> 

              <ItemDetail product={product} />  
             
            {/* <ItemList product={product} /> */}
            {/* <Counter stock='10' inicial='0' onAdd= {gracias}/> */}
        </main>
    )
}

export default MainDetalle