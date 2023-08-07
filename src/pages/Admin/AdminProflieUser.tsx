import React, { useState,useEffect } from "react";
import axiosInstance from '../../utils/AxiosInstance';
import {  AcountFrofileUsersInterface} from "../../services/services";
import { useParams } from "react-router-dom";
import {  useAppSelector } from '../../hooks/hooks';
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import DummyAvatar from "../../components/DummyAvatar/DummyAvatar";

export default function AdminProflieUser() {
  const {userId} = useParams(); 
  const jobs:  AcountFrofileUsersInterface[] = useAppSelector((state) => state.adminacountuseprofileRecent.adminacountuseprofileRecent);
  const [showJobLists, setAdminuseprofile] = useState(jobs);
  const [isLoading, setIsLoading] = useState(false);
  const goBack = () => {
    window.history.back();
  };
  //
  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {      
        const response = await axiosInstance(`admin/users/${userId}`);
        console.log(response.data.result);
        setAdminuseprofile(response.data.result);
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
      <div className="flex flex-wrap mx-4 mt-[50px]">
      <div className="w-full px-4 mb-10 md:w-1/2 ">
        <div className="bg-white rounded-lg shadow-lg mt-5 ">
          {/* Avatar */}
          <div className="mt-20">
              <div className="px-4 py-2 mb-2 font-semibold text-black capitalize leading-7 tracking-wide text-center">Avatar Users</div>
              <div className="flex justify-center">
              {showJobLists.avatar === null ? (
              <DummyAvatar iconClassName=" w-2/3 h-2/3 mx-auto rounded-full shadow dark:shadow-gray-700 aspect-square w-[200px] h-[200px]"/>):
              ( <img
                className="rounded-full  w-2/3 h-2/3 mx-auto rounded-full shadow dark:shadow-gray-700 aspect-square w-[200px] h-[200px]"
                alt="avatar"
                  src={showJobLists.avatar}
                />
              )}
            </div>
          </div>    

          <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[15px] pb-[15px]">      
            {/* Address */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-center text-black capitalize leading-7 tracking-wide">
                  Role Acount: {showJobLists.role}
                </div>
            </div>
          </div>         
        </div> 
      </div> 
        {/* Information */}
        <div className="w-full px-4 mb-10 md:w-1/2 ">
          <div className = "bg-white rounded-lg shadow-lg w-full mt-5 border">
            <div className = "flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
                <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Information</span>
            </div>
            {/* Name */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide "> FullName</div>
                <input className = "ml-5 px-4 mr-5  py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                readOnly // Thêm thuộc tính readOnly vào input
                value= {showJobLists.name} />
            </div>
            {/* Phone */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                <input className = "ml-5 px-4  mr-5 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.phone}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>                                
            {/* Email */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                <input className = "ml-5  mr-5 px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.email}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div> 

             {/* Address */}
          <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[15px] pb-[15px]">     
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                <input className = "ml-5 mr-5 px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.address}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>  
          </div>                   
          </div>
        </div>
              
      </div>
    )} 
    </>   
  );  
}
