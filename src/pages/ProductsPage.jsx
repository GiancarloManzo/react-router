import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BudgetContext from "../contexts/BudgetContext";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const ctx = useContext(BudgetContext);
  const budgetMode = ctx?.budgetMode ?? false;

  const filteredProducts = budgetMode
    ? products.filter((p) => p.price <= 30)
    : products;

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError("");

    fetch("https://fakestoreapi.com/products", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel recupero prodotti");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Risposta API non valida");
        setProducts(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status" />
        <p className="mt-3">Caricamento prodotti...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <p className="text-danger fw-bold">❌ {error}</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4">
        <h1 className="fw-bold m-0">🛍️ Prodotti</h1>

        {budgetMode && (
          <span className="badge text-bg-success p-2">
            Budget mode attivo (≤ 30€)
          </span>
        )}
      </div>

      <div className="row g-4">
        {filteredProducts.map((p) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <Link
              to={`/prodotti/${p.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm border-0 product-card">
                <img
                  src={p.image}
                  alt={p.title}
                  className="card-img-top p-4"
                  style={{ height: "200px", objectFit: "contain" }}
                />

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-truncate">{p.title}</h6>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary fs-5">
                      {p.price} €
                    </span>
                    <span className="badge text-bg-dark">{p.category}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-muted mt-5">
          Nessun prodotto disponibile con questo filtro.
        </p>
      )}
    </div>
  );
}
