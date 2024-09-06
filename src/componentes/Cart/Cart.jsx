import { useContext } from 'react'
import { CartContext } from '../CartServiceContext/CartServiceContext'
import { CartDetail } from '../CartDetail/CartDetail'
import "./Cart.css"

export const Cart = () => {

  const { cart, getTotal, totalProducts, removeItem, clearCart } = useContext(CartContext);

  

  return (
    <div className='cart'>
      {cart.length === 0 ? (
        <h1>No hay productos en el carrito</h1>) 
        : (<> <CartDetail cart={cart}/></>)}
    </div>
  )
}
