import  React from "react"
import { useState } from "react";
import { Section } from "./Section.tsx";

 
export const PropDrilling = () => {
    const [level, setLevel] = useState<number>(1)

    return <Section level = {level} />
};

export default PropDrilling;