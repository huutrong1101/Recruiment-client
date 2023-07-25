import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/Status';
import { Dispatch } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/AxiosInstance';


const AdminListPassRecentSlice = createSlice({
    name: 'adminmanagerpassList',
    initialState: {
        adminmanagerpassList: [],
        adminmanagerpassListStatus: STATUS.IDLE,
    },
    reducers: {
        setAdminManagerPassList(state, action){
            state.adminmanagerpassList = action.payload;
        },
        setAdminManagerPassListStatus(state, action){
            state.adminmanagerpassListStatus = action.payload;
        }
    }
});
export default AdminListPassRecentSlice.reducer;

export const {setAdminManagerPassList, setAdminManagerPassListStatus }
= AdminListPassRecentSlice.actions;

export const fetchAdminManagerPassList = () => {
    return async function fetchAdminManagerPassListThunk(dispatch : Dispatch){
        dispatch(setAdminManagerPassListStatus(STATUS.LOADING));
        try{
            const reponse = await axiosInstance.get("admin/passs?size=10&page=0");
            const data = await reponse.data;
            console.log(data.result.content);
            dispatch(setAdminManagerPassList(data.result.content));
            dispatch(setAdminManagerPassListStatus(STATUS.IDLE));
        }catch(error){
            dispatch(setAdminManagerPassListStatus(STATUS.ERROR));
        }
    };
}