import React, { useState,useEffect } from "react";
import axiosInstance from '../../utils/AxiosInstance';
import {  AcountFrofileInterface,AcountFrofileInterfaceConfig } from "../../services/services";
import { useParams } from "react-router-dom";
import {  useAppSelector } from '../../hooks/hooks';
import moment from "moment";
import classNames from "classnames";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

export default function AdminProflieUser() {
  const {userId} = useParams(); 
  const jobs:  AcountFrofileInterface[] = useAppSelector((state) => state.adminacountuseprofileRecent.adminacountuseprofileRecent);
  const [showJobLists, setAdminuseprofile] = useState(jobs);
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState('');
  const goBack = () => {
    window.history.back();
  };
  const [roleId,selectedRoleId]= useState();
  //
  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {      
        const response = await axiosInstance(`admin/users/${userId}`);
        console.log(response.data.result);
        setAdminuseprofile(response.data.result);
        setAvatar(response.data.result.avatar);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosition();
  }, []);
  //
  
  const reloadPage = () => {
    // Reload the page
    history.go(0);
  };
  return ( 
    <> 
    {isLoading ?(
      <div className="flex items-center justify-center w-full text-[15px] mt-5 mb-5">
          <LoadSpinner className="text-2xl text-[#059669] " />
    </div>
    ):(
      <div className="flex gap-5 md:flex-row md:flex">
        {/* Information */}
        <div className="bg-white rounded-lg shadow-lg w-1/2 mt-5 border">
          <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[15px] pb-[15px]">
            {/* Title */}
            <div className = "flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
                <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Information</span>
            </div>
            {/* Name */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide "> FullName</div>
                <input className = "px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                readOnly // Thêm thuộc tính readOnly vào input
                value= {showJobLists.name} />
            </div>
            {/* Phone */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                <input className = "px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.phone}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>                                
            {/* Email */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                <input className = "px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.email}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>                    
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg w-1/2 mt-5 border">
          {/* Avatar */}
          <div className="">
             <div className="px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Avatar Users</div>
           <div>
                 <img
                   className="rounded-full flex justify-center"
                  alt="avatar"
                   src={showJobLists.avatar}
                 />
               </div>
            </div>
          {/* Address */}
          <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[15px] pb-[15px]">     

          <div className = "grid grid-cols-1 mt-10">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                <input className = "px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.address}
                readOnly // Thêm thuộc tính readOnly vào input
                />
          </div>  
          </div>
          <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[15px] pb-[15px]">      
            {/* Address */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Role Acount</div>
                <input className = "px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.role}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
          </div>
        </div>         
      </div>
    )} 
    </>   
  );  
}
