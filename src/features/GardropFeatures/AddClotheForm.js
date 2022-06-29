import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { clotheAdded } from "./ClothesSlice";

import '../../styles/AddClotheForm.css';

export const AddCotheForm = () => {

    const [clotheName, setClotheName] = useState('');

    const [clotheType, setClotheType] = useState('t-shirt');

    const [dirty, setDirty] = useState(false);

    const dispatch = useDispatch();
    
    const onClotheNameChanged = (e) => {setClotheName(e.target.value)}

    const onAddClotheClicked = () => {
        if(clotheName && clotheType){
            dispatch(clotheAdded(clotheName, clotheType, dirty))
            setClotheName('')
            setClotheType('')
        }
    }


    return ( 

        

            <div className='add-clothe-form'>


                <input value={clotheName} type="text" onChange={onClotheNameChanged} placeholder="Enter clothe name" id="inputBar" />


                <div className='clothe-type-topdown-list'>
                    <label>Clothe Type:</label>
                    <select
                        value={clotheType}
                        onChange={(e) => setClotheType(e.target.value)}
                    >
                        <option value="t-shirt">t-shirt</option>
                        <option value="skirt">skirt</option>
                        <option value="pants">pants</option>
                        <option value="accessory">accessory</option>

                    </select>
                </div>
                <button id="inputSubmitButton" onClick={onAddClotheClicked}>Add Clothe</button>
            </div>

    )
}