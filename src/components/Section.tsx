import  React from "react"
import { useState } from "react";
import { SubSection } from "./SubSection.tsx";

export const Section = ({level}: levelProps) => {
    

    return <SubSection level = {level} />
};

export default Section;
