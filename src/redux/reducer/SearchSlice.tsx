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

export const searchByName = (objs : any) => {
    const {text} = useAppSelector((state:any) => state.searchFeature)
    return objs.filter((obj : any) => obj.name.toLowerCase().includes(text.toLowerCase()));
};

export const searchByRole = (objs : any) => {
    const {text} = useAppSelector((state:any) => state.searchFeature)
    return objs.filter((obj : any) => obj.role.toLowerCase().includes(text.toLowerCase()));
};



