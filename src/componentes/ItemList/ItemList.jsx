import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({product}) => {
  return (
    <div>
         {product.map((item) => (
            <Item key={item.id} item={item}/>
         ))}
    </div>
  )
}

