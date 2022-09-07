import React from 'react'
import Item from './Item';


const ItemList = (prop) =>{
    return <div>
        {prop.product.map ((producto) => {
            return (
                <Item producto={producto}/>
               
            )})
        }    </div>
};


export default ItemList  