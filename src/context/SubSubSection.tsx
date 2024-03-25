import React from "react"
import { useContext, createContext, useState } from "react";
import SubSection from "./SubSection.tsx";
import { LevelContext } from "./LevelContext.tsx";

const SubSubSection = () => {
    const {level} = useContext(LevelContext);

    return (
        <>
        <h1>{ level }</h1>
        </>
    );
} 

export default SubSection;