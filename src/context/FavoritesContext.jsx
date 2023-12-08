import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
  const  [favorites, setFavorites] = useLocalStorage("FAVORITES", []);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined)
    throw new Error("consumed context was used outside of provider");
  return context;
}
