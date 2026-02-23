import { Link } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

export default function Navbar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  function toggleBudgetMode() {
    setBudgetMode(!budgetMode);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React Store
        </Link>

        <div className="d-flex gap-2">
          <Link className="btn btn-outline-primary" to="/prodotti">
            Prodotti
          </Link>

          <button className="btn btn-primary" onClick={toggleBudgetMode}>
            {budgetMode
              ? "Disattiva Modalità Budget"
              : "Attiva Modalità Budget"}
          </button>
        </div>
      </div>
    </nav>
  );
}
