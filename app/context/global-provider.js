"use client";

import React, { createContext, useState, useContext } from "react";

export const GlboalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProdiver = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];
    return (
        <GlboalContext.Provider value={{theme}}>
            <GlobalUpdateContext.Provider value={setGlobalState}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlboalContext.Provider>
    );
}
