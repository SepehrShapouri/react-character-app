import { createContext, useContext, useState } from "react";

const OpenContext = createContext();
export function OpenProvider({ children }) {
  const [open, setOpen] = useState();
  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
}
export function useOpen() {
  const open = useContext(OpenContext);
  return open;
}
