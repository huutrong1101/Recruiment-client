import React, { useState,useEffect } from "react";
import axiosInstance from '../../utils/AxiosInstance';
import {  AcountFrofileInterface } from "../../services/services";
import { useParams } from "react-router-dom";
import {  useAppSelector } from '../../hooks/hooks';
import moment from "moment";
import classNames from "classnames";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
export default function AdminChangePosition() {
  const {userId} = useParams(); 
  const jobs:  AcountFrofileInterface[] = useAppSelector((state) => state.adminacountuseprofileRecent.adminacountuseprofileRecent);
  const [showJobLists, setAdminuseprofile] = useState(jobs);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);  
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
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
 
  const reloadPage = () => {
    // Reload the page
    history.go(0);
  };
  const handleSubmitDelete = async (event: any) => {
    event.preventDefault();    
    axiosInstance.delete(`admin/blacklist?candidateId=${userId}`, { userId })
      .then((response) => {
      // Xử lý phản hồi từ server (nếu cần)
      toast.success(response.data.message);
      // In tất cả thông tin từ FormData  
      window.history.back();
    })
    .catch((error) => {
      // Xử lý lỗi (nếu có)
       toast.error(error.response.data.result);
      });
  };

  return ( 
    <> 
    {isLoading ? (
      <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-10 mb-10">
        {/* <Loader  className ="l-20flex items-center justify-center" /> */}
        <LoadSpinner className="text-2xl text-[#059669]"/>
    </div>
    ):(
      <div className="flex gap-5 top-5 ">
        {/* Information */}
        <div className="bg-white rounded-lg shadow-lg w-[50%] top-4 ">
          <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[13px] pb-[11px]">
            {/* Title */}
            <div className = "flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
                <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Information</span>
            </div>
            {/* Name */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide "> FullName</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                readOnly // Thêm thuộc tính readOnly vào input
                value= {showJobLists.name} />
            </div>
            {/* Phone */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                value={showJobLists.phone}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>                                
            {/* Email */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                value={showJobLists.email}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
            {/* Address */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                value={showJobLists.address}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
          </div>
        </div>
        <div className="p-4 border rounded-xl border-zinc-100">
            {/* Title */}
             <div className = "mt-10 px-5 py-4 flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
              <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Resion Add blacklist</span>
            </div>
            {/* Resion Blacklist */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Resion</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                value={showJobLists.blackReason}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
            {/* Resion Blacklist */}
             <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Add blackList Date</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                value={moment(showJobLists.blackDate).format("HH:mm:ss DD-MM-YYYY")}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
            <div className={classNames("mt-10 text-center px-5 py-4")}>
              <button type="submit" onClick={goBack} className="px-6 py-3 text-white rounded-xl bg-red-600     hover:bg-red-800">  Cancel   </button>
              <button type="submit" onClick ={handleClickOpen}className="px-6 py-3 text-white rounded-xl bg-emerald-600 hover:bg-emerald-800 ml-5">  Delete   </button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        className="text-center"
                      >
                        <p className="font-extrabold pt-4">Delete Blacklist</p>
                      </DialogTitle>
                      <DialogContent className="text-center">
                        <div className="text-center px-6">
                          <DialogContent className="font-semibold text-lg mb-2">
                            <p>Are you sure you want to delete "</p>
                            <p>{showJobLists.name} "?</p>
                          </DialogContent>
                          <DialogContentText
                            id="alert-dialog-description"
                            className="border bg-orange-100 px-3 py-2 "
                          >
                            <div className="flex">
                              <ExclamationTriangleIcon className="w-6 h-6 text-red-800" />
                              <p className="flex text-red-800 font-semibold px-2">
                                WARNING
                              </p>
                            </div>
                            <div className="text-left font-semibold">
                              This action cannot be undone, the deleted item
                              cannot be restored.
                            </div>
                          </DialogContentText>
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <button
                          className="rounded-lg bg-[#059669] hover:bg-green-900 px-4 py-2 mx-1 my-1 text-white"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                        <button
                          className="rounded-lg bg-red-700 hover:bg-red-900 px-4 py-2 mx-1 my-1 text-white"
                          onClick={handleSubmitDelete}
                          autoFocus
                        >
                          Delete
                        </button>
                      </DialogActions>
                    </Dialog>
            </div>      
          </div>
    </div>
    )} 
    </>   
  );  
}
