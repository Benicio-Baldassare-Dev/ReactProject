import React from 'react'
import './Item.css'
import { Link } from "react-router-dom"

export const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`}>
            
            <div key={item.id} className='card'>

                <img src={item.img} className='hola' />
                <h2>{item.nombre}</h2>
                <p>${item.precio}</p>

            </div>
        </Link>
    )
}
