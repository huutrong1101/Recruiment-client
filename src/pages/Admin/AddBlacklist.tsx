import React,{useState,useEffect} from 'react'
import classnames from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import { NavLink } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import axiosInstance from "../../utils/AxiosInstance";
import {AcountFrofileInterface} from "../../services/services";
import {useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { toast } from "react-toastify";
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';

export default function AddBlacklist() {
    const {userId} = useParams();  
    const jobs:  AcountFrofileInterface[] = useAppSelector((state) => state.adminacountuseprofileRecent.adminacountuseprofileRecent);
    const [showJobLists, setAdminuseprofile] = useState(jobs);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
   
    useEffect(() => {
        const fetchPosition = async () => {
        setIsLoading(true);
        try {      
            const response = await axiosInstance(`admin/users/${userId}`);
            setAdminuseprofile(response.data.result);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
        fetchPosition();
    }, []);
    const goBack = () => {
        window.history.back();
    }; 
    const [reason,setReason] = useState('');
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(reason);   
        setOpen(false);
        axiosInstance.post(`admin/users/blacklist/${userId}`, {reason})
        .then((response) => {
            // Xử lý phản hồi từ server (nếu cần)
            toast.success(response.data.message); // In ra thông tin phản hồi từ máy chủ
            window.history.back();
            // In tất cả thông tin từ FormData      
        })
        .catch((error) => {
            // Xử lý lỗi (nếu có)
            toast.error(error.response.data.message);
        });
    } 
    return (
    <> 
    {isLoading ? (
      <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-20 mb-20">
        {/* <Loader  className ="l-20flex items-center justify-center" /> */}
        <LoadSpinner className='text-2xl text-[#059669]'/>
    </div>
    ):(
        <div className="flex gap-5 md:flex mt-10 " style={{ fontFamily: "Outfit, sans-serif" }}>            
            {/* Information */}
            <div className="bg-white rounded-lg shadow-lg w-1/3 mt-10 ml-10">
                <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[13px] pb-[11px]">
                    {/* Title */}
                    <div className = "flex items-center text-center space-x-2  font-semibold  text-green-500 justify-center">
                        <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Information</span>
                    </div>
                    {/* Name */}
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2  font-semibold  text-black capitalize leading-7 tracking-wide "> FullName</div>
                        <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                        readOnly // Thêm thuộc tính readOnly vào input
                        value= {showJobLists.name} />
                    </div>
                    {/* Phone */}
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2  font-semibold  text-black capitalize leading-7 tracking-wide">Contact No.</div>
                        <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                        value={showJobLists.phone}
                        readOnly // Thêm thuộc tính readOnly vào input
                        />
                    </div>                                
                    {/* Email */}
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2  font-semibold  text-black capitalize leading-7 tracking-wide">Email.</div>
                        <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                        value={showJobLists.email}
                        readOnly // Thêm thuộc tính readOnly vào input
                        />
                    </div>
                    {/* Address */}
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2  font-semibold  text-black capitalize leading-7 tracking-wide">Current Address</div>
                        <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                        value={showJobLists.address}
                        readOnly // Thêm thuộc tính readOnly vào input
                        />
                    </div>
                </div>
            </div>
            
            <div className="p-4 border mt-10 w-1/2 rounded-xl border-zinc-100">
                {/* Title */}
                <div className = "flex items-center text-center space-x-2  font-semibold  text-green-500 justify-center">
                    <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Add BlackList Account</span>
                </div>
                {/* Reasion */}
                <div className = "grid grid-cols-1">
                    <div className = "px-4 py-2  font-semibold  text-black capitalize leading-7 tracking-wide"> Reasion </div>
                    <TextareaAutosize
                        id="reasion"
                        minRows={10}
                        className="resize-none p-2.5 w-full text-justify bg-white border rounded-lg border border-zinc-900 border-opacity-50"
                        onChange={(event) => setReason(event.target.value)}
                        value={reason}
                        placeholder="Reasion description here..."
                    />
                    </div>
                    {/* AdBacklist */}
                    <div className={classnames("mt-10 text-center px-5 py-4")} >
                        <NavLink to="#" onClick={goBack}>
                            <button type="submit" className="px-6 py-3 text-white rounded-xl bg-red-600 hover:bg-red-800">  Cancel   </button>
                        </NavLink>
                        <button type="submit" className="px-6 py-3 text-white rounded-xl bg-emerald-600 hover:bg-emerald-800 ml-5" variant="outlined" onClick={handleClickOpen}>  Save   </button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <div className="text-center px-6">
                            <DialogContent className=" font-semibold  text-lg" style={{ fontFamily: "Outfit, sans-serif" }}>
                               <h1  className=" font-semibold  text-lg mb-2"> Are you sure you want to add menber to Blacklist ?</h1>
                               <h1  className=" font-semibold  text-lg mb-2 text-center">{showJobLists.name}</h1>
                            </DialogContent>
                            <DialogContentText
                                id="alert-dialog-description"
                                className="border bg-orange-100 px-3 py-2 "
                            >
                                <div className="flex justify-center p-4 py-2">
                                <ExclamationTriangleIcon className="w-6 h-6 text-red-800" />
                                <p className="flex text-red-800 text-center font-semibold  px-2">
                                    WARNING
                                </p>
                                </div>
                                <div className="text-center font-semibold " style={{ fontFamily: "Outfit, sans-serif" }}>
                                    <p>You definitely want to continue. Be careful with your decisions</p>
                                </div>
                            </DialogContentText>
                        </div>
                            <DialogActions style={{ justifyContent: 'center' }}>
                                <button
                                className="rounded-lg bg-red-700 hover:bg-red-900 px-2 py-2 mx-1 my-1 text-white"
                                onClick={handleClose}
                                >
                                Cancel
                                </button>
                                <button
                                className="rounded-lg bg-[#059669] hover:bg-green-900 px-2 py-2 mx-1 my-1 text-white"
                                onClick={handleSubmit}
                                autoFocus
                                >
                                Agree
                            </button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
        </div>
        )}
    </>
    )
}
