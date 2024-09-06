import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>¡Error 404, la pagina no a sido encontrada!</h1>
        
        <Link to="/">Inicio</Link>
    </div>
  )
}

