import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nel recupero prodotti");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>❌ {error}</p>;

  return (
    <div>
      <h1>Prodotti</h1>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} — <strong>{p.price}€</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
