import { useState, useContext } from "react"
import { CartContext } from "../CartServiceContext/CartServiceContext"
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from "firebase/firestore"
import "./Checkout.css"

export const Checkout = () => {

  const { cart, getTotal, totalProducts, clearCart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [titularTarjeta, setTitularTarjeta] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [codigoSeguridad, setCodigoSeguridad] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !celular || !email || !emailConfirmacion || !titularTarjeta || !numeroTarjeta || !fechaVencimiento || !codigoSeguridad) {
      setError("¡Completa todos los campos para confirmar!")
    }

    if (email !== emailConfirmacion) {
      setError("¡Los emails no coinciden!")
    }

    const db = getFirestore();
    const order = {
      items: cart.map((product) => ({
        id: product.product.id,
        name: product.product.nombre,
        quantity: product.quantity,
      })),
      total: getTotal(),
      date: new Date(),
      nombre,
      apellido,
      celular,
      email,
    };
    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "item", productOrder.id)
        const productDoc = await getDoc(productRef);
        const stock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stock - productOrder.quantity
        })
      })
    ).then(() => {
      addDoc(collection(db, "orders"), order)
        .then((docRef) => {
          setOrderId(docRef.id);
          clearCart();
        })
        .catch((error) => {
          setError("¡No se puede actualizar el stock, intentelo nuevamente!", error);
        });
    })
      .catch((error) => {
        setError("¡No se puede actualizar el stock, intentelo nuevamente!", error);
      });
  };

  return (
    <div>

      <h2>Productos a confirmar</h2>

      {cart.map((product) => (
        <div key={product.product.id} className="productos-confirmar">
          <p>{""}{product.product.nombre}</p>
          <p>{""}cantidad: {product.quantity}</p>
          <p>{""}${product.product.precio}</p>
          <hr />
        </div>
      ))}

      <h2>Ingresar Datos</h2>

      <form onSubmit={handleForm}>

        <div className="formulario">
          <div className="campos-form">
            <label>Nombre</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>Apellido</label>
            <input type="text" onChange={(e) => setApellido(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>Celular</label>
            <input type="number" onChange={(e) => setCelular(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>Email Confirmacion</label>
            <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>Titular de Tarjeta</label>
            <input type="text" onChange={(e) => setTitularTarjeta(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>Numero de Tarjeta</label>
            <input type="number" onChange={(e) => setNumeroTarjeta(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>Fecha de vencimiento</label>
            <input type="month" onChange={(e) => setFechaVencimiento(e.target.value)} />
          </div>

          <div className="campos-form">
            <label>codigo de seguridad</label>
            <input type="number" onChange={(e) => setCodigoSeguridad(e.target.value)} />
          </div>
        </div>

        <button onClick={handleForm} type="submit">Confirmar Compra</button>

        {error && <p>{error}</p>}
        {orderId && (
          <p>¡Gracias por la compra! Numero de orden: {orderId}</p>
        )}

      </form>
    </div>
  )
}
