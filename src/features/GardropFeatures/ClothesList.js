import React from "react";

import { useSelector } from "react-redux";
/* import { selectClothes } from "./ClothesSlice"; */
import '../../styles/ClothesList.css'
export const ClothesList = () => {

    const clothes = useSelector((state) => state.clothes)
    /*  const clothes = useSelector(selectClothes) */
    console.log(clothes)

    const renderedClothes = clothes.map((clothe) => {
        return (

            <div className="container">
            <h3>Clothe</h3>
            <div className="clothes-list">
                
                <p>id: {clothe.id}</p>
                <p>type: {clothe.type}</p>
                <p>name: {clothe.name}</p>
            </div>
            </div>
        )
    })

    return (

        <div>
            {renderedClothes}
        </div>
    )
}