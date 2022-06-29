import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        id: '1',
        name: 'first clothe skirt',
        type: 'skirt',
        dirty: true
    },
    {
        id: '2',
        name: 'first clothe skirt',
        type: 'skirt',
        dirty: true
    },
    {
        id: '3',
        name: 'first clothe skirt',
        type: 'skirt',
        dirty: true
    },
    {
        id: '4',
        name: 'first clothe skirt',
        type: 'skirt',
        dirty: true
    },
]

const ClothesSlice = createSlice({
    name:'clothes',
    initialState,
    reducers: {
        clotheAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(name, type, dirty){
                return{
                    payload: {
                        id: '12',
                        name: name,
                        type: type,
                        dirty: dirty
                    }
                }
            }
        }
    }
})

export const {clotheAdded} = ClothesSlice.actions

/* export const selectClothes = (state) => state.clothes */
export default ClothesSlice.reducer