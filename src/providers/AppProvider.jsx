import React from "react";
import { SelectedIdProvider } from "../context/SelectedIdContext";
import { OpenProvider } from "../context/OpenContext";
import { FavoritesProvider } from "../context/FavoritesContext";

function AppProvider({ children }) {
  return (
    <FavoritesProvider>
    <SelectedIdProvider>
      <OpenProvider>{children}</OpenProvider>
    </SelectedIdProvider>
    </FavoritesProvider>
  );
}

export default AppProvider;
