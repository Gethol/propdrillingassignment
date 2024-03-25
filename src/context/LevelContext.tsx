import React from "react"
import { useContext, createContext, useState } from "react";



export const LevelContext = createContext<LevelContextType>({
    level: 0
});

