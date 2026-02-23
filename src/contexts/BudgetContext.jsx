import { createContext, useMemo, useState } from "react";

export const BudgetContext = createContext(null);

export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const toggleBudgetMode = () => setBudgetMode((prev) => !prev);

  const value = useMemo(
    () => ({ budgetMode, setBudgetMode, toggleBudgetMode }),
    [budgetMode],
  );

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}
