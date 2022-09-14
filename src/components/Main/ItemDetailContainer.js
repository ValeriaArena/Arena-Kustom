//import { producto } from "../../mock/productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from "../../mock/productos";


const ItemDetailContainer = (props) => {
    
    const [product, setProduct] = useState({});

    const {id} = useParams ();
    
    useEffect (() => {

        const getProduct = () =>
         new Promise ((resolve,rejest) => {
            const prod = productos.find ( 
                (prod) => prod.id ===  id
                );
            setTimeout(() => {
              resolve(prod);
            }, 2000);
        });
  
          getProduct ()
          .then ((data) => {
            setProduct(data);
          })
         //en caso de 'rejest'
              .catch ((error) => {
            console.log ('catch: ', error) })
  }, [id]); 

/*     useEffect (() => {
      //Promise
      const getProduct = new Promise ((resolve,rejest) => {
          const prodFiltradoDet = productos.filter ( (prod) => prod.id === id)
          setTimeout(() => {
            resolve(prodFiltradoDet);
          }, 2000);
      });

        getProduct.then ((data) => {
          setProduct(data);
        })
       //en caso de 'rejest'
            .catch ((error) => {
          console.log ('catch: ', error) })
}, [id]);  */ 

    return (
        <main className="Main">
            <h1> Detalle del producto </h1> 
            <ItemDetail product={product} />  
             
        </main>
    )
}

export default ItemDetailContainer