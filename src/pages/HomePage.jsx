import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="hero">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="display-5 fw-bold mb-3">
              Benvenuto in <span className="text-primary">React Store</span> 🛒
            </h1>

            <p className="lead text-muted mb-4">
              Prodotti reali da FakeStore API, UI pulita con Bootstrap e
              modalità Budget per filtrare i prezzi.
            </p>

            <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
              <Link to="/products" className="btn btn-primary btn-lg">
                Vai ai prodotti 🚀
              </Link>

              <Link to="/about" className="btn btn-outline-secondary btn-lg">
                Chi siamo
              </Link>
            </div>

            <div className="mt-4 d-flex gap-2 flex-wrap justify-content-center justify-content-lg-start">
              <span className="badge text-bg-dark p-2">React Router</span>
              <span className="badge text-bg-dark p-2">Context API</span>
              <span className="badge text-bg-dark p-2">Bootstrap</span>
              <span className="badge text-bg-dark p-2">FakeStore API</span>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card shadow-lg border-0 p-4 home-card">
              <h5 className="fw-bold mb-3">🔥 Modalità Budget</h5>
              <p className="text-muted mb-3">
                Attiva la modalità Budget dalla navbar e vedrai solo i prodotti
                sotto una certa soglia.
              </p>

              <div className="d-flex gap-2">
                <div className="p-3 rounded bg-light flex-fill text-center">
                  <div className="fw-bold">Filtro</div>
                  <div className="text-muted small">Prezzo ≤ 30€</div>
                </div>
                <div className="p-3 rounded bg-light flex-fill text-center">
                  <div className="fw-bold">UI</div>
                  <div className="text-muted small">Cards + Hover</div>
                </div>
                <div className="p-3 rounded bg-light flex-fill text-center">
                  <div className="fw-bold">Routing</div>
                  <div className="text-muted small">Pagine & Dettagli</div>
                </div>
              </div>

              <div className="mt-4">
                <Link to="/products" className="btn btn-dark w-100">
                  Sfoglia catalogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
