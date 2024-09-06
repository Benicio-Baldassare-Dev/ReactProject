import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"

export const ItemDetailConteiner = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();

    useEffect(() => {
       const db = getFirestore();
       const newDoc = doc(db, "item", id);

       getDoc(newDoc)
       .then(res => {
         const data = res.data();
         const newProduct = {id: res.id, ...data};
         setProduct(newProduct);
       })
      }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const newProduct = data.find((product) => product.id === Number(id));
        setProduct(newProduct);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {product == undefined ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
}

