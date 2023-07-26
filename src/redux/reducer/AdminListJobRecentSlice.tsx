import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/Status';
import { Dispatch } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/AxiosInstance';


const AdminListJobRecentSlice = createSlice({
    name: 'adminmanagerjobList',
    initialState: {
        adminmanagerjobList: [],
        adminmanagerjobListStatus: STATUS.IDLE,
    },
    reducers: {
        setAdminManagerJobList(state, action){
            state.adminmanagerjobList = action.payload;
        },
        setAdminManagerJobListStatus(state, action){
            state.adminmanagerjobListStatus = action.payload;
        }
    }
});
export default AdminListJobRecentSlice.reducer;

export const {setAdminManagerJobList, setAdminManagerJobListStatus }
= AdminListJobRecentSlice.actions;

export const fetchAdminManagerJobList = () => {
    return async function fetchAdminManagerJobListThunk(dispatch : Dispatch){
        dispatch(setAdminManagerJobListStatus(STATUS.LOADING));
        try{
            const reponse = await axiosInstance.get("admin/jobs?size=10&page=0");
            const data = await reponse.data;
            console.log(data.result.content);
            dispatch(setAdminManagerJobList(data.result.content));
            dispatch(setAdminManagerJobListStatus(STATUS.IDLE));
        }catch(error){
            dispatch(setAdminManagerJobListStatus(STATUS.ERROR));
        }
    };
}