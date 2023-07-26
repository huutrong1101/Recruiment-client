import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../hooks/hooks";

const SearchSlice = createSlice({
    name: 'searchFeature',
    initialState: {
        text: ""
    },
    reducers: {
        setText(state, action){
            state.text = action.payload;
        }
    },
});

export default SearchSlice.reducer;
export const {setText} = SearchSlice.actions;



