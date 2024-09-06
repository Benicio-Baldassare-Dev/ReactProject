import './itemListConteiner.css'
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

export const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

     setLoading(true)

     const db = getFirestore();
     const myProducts = categoryId ? query(collection(db, "item"), where("category", "==", categoryId)) : collection(db, "item");

     getDocs(myProducts).then((res) => {
       const newProducts = res.docs.map((doc) => {
         const data = doc.data();
         return {id: doc.id, ...data};
       });
       setProducts(newProducts);
     })
     .finally(() => setLoading(false));
  }, [categoryId])

    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const filteredProducts = categoryId ? data.filter((p) => p.category === categoryId) : data;
        setProducts(filteredProducts);
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    }
    fetchData();
   [categoryId];


  return (
    <div className="conteiner">
      <h1>{greeting}</h1>

      {loading ? <Spinner/> : <ItemList product={products} />}
    </div>
  );
}
