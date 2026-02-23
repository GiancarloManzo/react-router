import { createContext, useMemo, useState } from "react";

const BudgetContext = createContext(null);

export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const toggleBudgetMode = () => setBudgetMode((prev) => !prev);

  const value = useMemo(
    () => ({
      budgetMode,
      toggleBudgetMode,
    }),
    [budgetMode],
  );

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}

export default BudgetContext;
