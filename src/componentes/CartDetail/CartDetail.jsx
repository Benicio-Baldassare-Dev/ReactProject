import { useContext } from 'react';
import { CartContext } from '../CartServiceContext/CartServiceContext';
import "./CartDetail.css"
import { Link } from 'react-router-dom';

export const CartDetail = ({ cart }) => {

  const { getTotal, totalProducts, removeItem, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2 className='title-cart-null'> Carrito de Compras</h2>

      {cart.map((item) => (
        <div className='products-in-cart' key={item.product.id}>
          <img src={item.product.img} />
          <p>{item.product.nombre}</p>
          <p>Cantidad:{item.quantity}</p>
          <p >Precio: ${item.product.precio}</p>

          <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
        </div>
      ))}

      <div className='cart-info'>
        <h3>Total productos: {totalProducts()}</h3>
        <h3>Precio Final: ${getTotal()}</h3>
        <div>
           <button onClick={clearCart}>Vaciar</button>
            <Link to="/checkout"><button>Comprar</button></Link>
        </div>

      </div>

    </div>
  )
}