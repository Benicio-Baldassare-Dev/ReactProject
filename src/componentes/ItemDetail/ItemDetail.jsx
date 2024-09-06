import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartServiceContext/CartServiceContext'
import { ContadorRef } from '../ContadorRef/ContadorRef'
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {

  const {addItems} = useContext(CartContext);

   const onAdd = (quantity) => {
     addItems(product, quantity);
   }

  return (
    <div className='card-page'>
      <h2>{product.nombre}</h2>
      <img src={product.img} />
      <div className='card-info'>
        <p>Precio: ${product.precio}</p>
        <p>Stock: {product.stock}</p>
        <p>Categoria: {product.category}</p>
      </div>

      <ContadorRef initial={1} stock={product.stock} onAdd={onAdd}/>

      <div className='GoInicio'>
      <Link to="/" className='volver'> Volver al inicio</Link>
      <Link to="/cart" className='endBuy'>Terminar compra</Link>
      </div>
    </div>
  )
}