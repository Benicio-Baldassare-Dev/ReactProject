import { useState } from "react"

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const decrement = ()  => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const increment = ()  => {
        if(count < 100){
            setCount(count + 1);
        }
    }

    const addToCart = ()  => {
        alert(`Se agrego ${count} al carrito`)
    }

  return (
    <div>
        <h1>Contador:</h1> 
        <p>Contador: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={addToCart}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount