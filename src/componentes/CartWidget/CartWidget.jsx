import { useContext } from 'react'
import { CartContext } from '../CartServiceContext/CartServiceContext';
import "./CartWidget.css"

export const CartWidget = () => {

   const { totalProducts } = useContext(CartContext);

  return (
    <div className='nav-cart'>
        {totalProducts() === 0 ? 0 : totalProducts()}
    </div>
  )
}

