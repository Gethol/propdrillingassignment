import React from "react"
import { useContext, createContext, useState } from "react";
import { LevelContext } from "./LevelContext.tsx";
import Section from "./Section.tsx";

export const ContextProvider = () => {
    const [level, setLevel] = useState(0)

    return(
    <LevelContext.Provider value = {{level}}>
        <Section />
    </LevelContext.Provider>
    );
}

export default ContextProvider;