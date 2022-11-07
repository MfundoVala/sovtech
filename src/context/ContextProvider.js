import React, { useState, createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const love = ["love"];
  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        love,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
