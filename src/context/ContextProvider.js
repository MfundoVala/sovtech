import React, { useState, createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("home");

  const love = ["love"];
  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        activeButton,
        setActiveButton,
        love,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
