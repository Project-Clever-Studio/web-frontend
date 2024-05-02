import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [locoScroll, setLocoScroll] = useState(null);
  const [cursorSettings, setCursorSettings] = useState({
    size: 1,
    isSticky: false,
    color: "transparent",
    isBlending: false,
    text: "",
    border: "#00000057",
  });
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const updateBounds = (element) => {
    const rect = element.getBoundingClientRect();
    setBounds({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });
  };

  const resetBounds = () => {
    setBounds({ left: 0, top: 0, width: 0, height: 0 });
  };

  return (
    <GlobalContext.Provider
      value={{
        locoScroll,
        setLocoScroll,
        setCursorSettings,
        cursorSettings,
        bounds,
        updateBounds,
        resetBounds,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useContextProvider = () => {
  return useContext(GlobalContext);
};
