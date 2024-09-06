import { useState } from 'react'
import './ContadorRef.css'

export const ContadorRef = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(initial);


  const hanldeDecrement = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }


  return (
    <div className='Conteiner-btns'>
      <div className='addCantProduct'>
        <button onClick={hanldeDecrement}>-</button>
        <h1>Cantidad: {count}</h1>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className='addToCart-Conteiner'>
        <button onClick={() => { onAdd(count) }} className='btnAddToCart'>Añadir al carrito</button>
      </div>
    </div>
  )
}
