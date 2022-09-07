
import { productos } from "../../mock/productos";
import { useState, useEffect } from "react";
//import Counter from "../Counter/ItemCount";
import ItemList from "./ItemList";


const Main = (props) => {
    
    const [product, setProduct] = useState([]);

    useEffect (() => {
        //Promise
        const getProduct = new Promise ((resolve,rejest) => {
            setTimeout(() => {
            resolve(productos);
            }, 2000);
        });

        getProduct.then ((data) => {
            setProduct(data);
        })
        /* //en caso de 'rejest'
            .catch ((error) => {
            console.log ('catch: ', error) */
            //se ejecuta más allá del 'resultado'
            .finally(() => {
                console.log ('Terminé');
            });
    }, []);  

    console.log(product)

   /*  function gracias() {
        alert('Gracias por su compra');
    } */

    return (
        <main className="Main">
            <h1> KUSTOM </h1> 
            <h3>{props.saludo} </h3>
            <ItemList product={product} />
            {/* <Counter stock='10' inicial='0' onAdd= {gracias}/> */}
        </main>
    )
}

export default Main