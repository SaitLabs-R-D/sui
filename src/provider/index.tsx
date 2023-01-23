import React, { createContext } from "react";
import "../styles/style.scss";

const SuiContext = createContext({});

interface SuiProviderProps {
  template: string;
  children: React.ReactNode;
}

const SuiProvider = ({ template, children }: SuiProviderProps) => {
  return (
    <SuiContext.Provider value={{ template }}>{children}</SuiContext.Provider>
  );
};

export { SuiContext, SuiProvider };
