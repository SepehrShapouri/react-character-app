import { createContext, useContext, useState } from "react";

const SelectedIdContext = createContext();
export function SelectedIdProvider({ children }) {
  const [selectedId, setSelectedId] = useState();
  return (
    <SelectedIdContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelectedIdContext.Provider>
  );
}
export function useSelectedId() {
  const context = useContext(SelectedIdContext);
  return context;
}
