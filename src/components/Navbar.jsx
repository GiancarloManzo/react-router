import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";

export default function Navbar() {
  const ctx = useContext(BudgetContext);

  if (!ctx) return null;

  const { budgetMode, toggleBudgetMode } = ctx;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🛒 React Store
        </Link>

        <div className="d-flex gap-2 align-items-center">
          <NavLink to="/" className="btn btn-outline-light">
            Home
          </NavLink>

          <NavLink to="/prodotti" className="btn btn-outline-light">
            Prodotti
          </NavLink>

          <button
            className={`btn ${budgetMode ? "btn-success" : "btn-warning"}`}
            onClick={toggleBudgetMode}
            type="button"
          >
            {budgetMode ? "Budget ON 💸" : "Budget OFF 💰"}
          </button>
        </div>
      </div>
    </nav>
  );
}
