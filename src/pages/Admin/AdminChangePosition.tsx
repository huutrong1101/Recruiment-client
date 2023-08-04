import React, { useState,useEffect } from "react";
import axiosInstance from '../../utils/AxiosInstance';
import {  AcountFrofileInterface,AcountFrofileInterfaceConfig } from "../../services/services";
import { useParams } from "react-router-dom";
import {  useAppSelector } from '../../hooks/hooks';
import moment from "moment";
import classNames from "classnames";
import Loader from "../../components/Loader/Loader";

export default function AdminChangePosition() {
  const {userId} = useParams(); 
  const jobs:  AcountFrofileInterface[] = useAppSelector((state) => state.adminacountuseprofileRecent.adminacountuseprofileRecent);
  const [showJobLists, setAdminuseprofile] = useState(jobs);
  const [isLoading, setIsLoading] = useState(false);
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
  const handleDropdownChange = (event: any) => {
    selectedRoleId(event.target.value); // Cập nhật giá trị được chọn vào state
  };
  const reloadPage = () => {
    // Reload the page
    history.go(0);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();    
    if(roleId !== undefined){
      axiosInstance.put(`admin/users/${userId}`, { roleId })
      .then((response) => {
      // Xử lý phản hồi từ server (nếu cần)
      alert(response.data.message); // In ra thông tin phản hồi từ máy chủ
      // In tất cả thông tin từ FormData  
      reloadPage(); // Reload the page after successful submission    
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error('Error:', error);
      });
    }
    else{
      alert("Error:")
    }   
  };

  return ( 
    <> 
    {isLoading ?(
      <div className="flex items-center justify-center w-full h-[50px] text-[15px] mt-10 mb-10">
        <Loader  className ="l-20flex items-center justify-center" />
    </div>
    ):(
      <div className="flex gap-5 mt-10 ">
        {/* Information */}
        <div className="bg-white rounded-lg shadow-lg w-[50%] mt-4 border ">
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
            {/* Address */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                <input className = "px-4 py-2 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border   "
                value={showJobLists.address}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
          </div>
        </div>
        <div className="border rounded-xl justify-center items-center mt-5">
          {/* Title */}
          <div className = "px-5 py-4 flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
            <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Change Role Account</span>
          </div>
          <form className="flex-1 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1">
              <div className="flex justify-center">
                <p className="px-5 py-5 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0">
                  Role present:
                </p>
                <select
                  value={roleId}
                  onChange={handleDropdownChange}
                  className="lp ti adp afq bbi bmg bnl chy px-5 py-5 self-stretch pt-[15px] pb-[15px] bg-white bg-opacity-0 rounded-lg border-2    "
                  >
                  <option value="1">{showJobLists.role}</option>
                  <option value="2">Recruiter</option>
                  <option value="4">Candidate</option>
                  <option value="3">Interviewer</option>
                </select>
              </div>
            </div>
            {/* Submit button */}
            <div className="flex-row-reverse mt-10 text-center px-5 py-4">
              <button 
                type="submit"
                onClick={goBack}
                className="text-white rounded-xl bg-red-600 py-2 px-4 mr-10 hover:bg-red-800"
              >
                Cancel   
              </button>
              <button
                className="bg-emerald-600 rounded-xl hover:bg-emerald-700 text-white font-bold py-2 px-4 "
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
    </div>
    )} 
    </>   
  );  
}
