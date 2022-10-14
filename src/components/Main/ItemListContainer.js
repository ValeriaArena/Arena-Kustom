
import { productos } from "../../mock/productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Counter from "../Counter/ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = (props) => {
    
    const [product, setProduct] = useState([]);

    //const parametroURL = useParams ()
    //console.log ( 'parametro', parametroURL.categoryId)
    const {categoryId} = useParams ()
   // console.log ('ver', categoryId)

    useEffect (() => {
        if (categoryId) {
            const getProduct = new Promise ((resolve,rejest) => {
                const prodFiltrado = productos.filter ( (prod) => prod.category === categoryId)
                setTimeout(() => {
                resolve(prodFiltrado);
                }, 2000);
            });
    
            getProduct.then ((data) => {
                setProduct(data);
            })
             //en caso de 'rejest'
                .catch ((error) => {
                console.log ('catch: ', error) })
        } else {
                    //Promise
        const getProduct = new Promise ((resolve,rejest) => {
            setTimeout(() => {
            resolve(productos);
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
        }
    }, [categoryId]);
        
  

   // console.log(product)

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

export default ItemListContainer