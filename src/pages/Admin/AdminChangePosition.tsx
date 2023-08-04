import React, { useState,useEffect } from "react";
import axiosInstance from '../../utils/AxiosInstance';
import {  AcountFrofileInterface,AcountFrofileInterfaceConfig } from "../../services/services";
import useQueryParams from "../../hooks/useQueryParams";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import moment from "moment";
import classNames from "classnames";

export default function AdminChangePosition() {
  const {userId} = useParams();  
  const jobs:  AcountFrofileInterface[] = useAppSelector((state) => state.adminacountuseprofileRecent.adminacountuseprofileRecent);
  const [showJobLists, setAdminuseprofile] = useState(jobs);
  const [isLoading, setIsLoading] = useState(false);
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
  const [roleId,selectedRoleId]= useState();
  const handleDropdownChange = (event: any) => {
    selectedRoleId(event.target.value); // Cập nhật giá trị được chọn vào state
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(roleId)
    if(roleId !== undefined){
      axiosInstance.put(`admin/users/${userId}`, { roleId })
    .then((response) => {
      alert('Successful');
      // Xử lý phản hồi từ server (nếu cần)
      console.log(response.data); // In ra thông tin phản hồi từ máy chủ
      // In tất cả thông tin từ FormData      
    })
    .catch((error) => {
      // Xử lý lỗi (nếu có)
      console.error('Error:', error);
    });
    }
    else{
      alert("Co1 loi64")
    }
   
  };

  return (      
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
                placeholder= {showJobLists.name} />
            </div>
            {/* Phone */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                placeholder={showJobLists.phone}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>                                
            {/* Email */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                placeholder={showJobLists.email}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
            {/* Address */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                placeholder={showJobLists.address}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
          </div>
        </div>
        {showJobLists.blackReason === null ?(
        <div className="p-4 border rounded-xl border-zinc-100">
          {/* Title */}
           <div className = "mt-10 px-5 py-4 flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
            <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Change Role Account</span>
          </div>
          <form className="flex-1 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1">
              <div className="flex justify-center">
                <p className="lp ti adp afq bbi bmg bnl chy px-5 py-5 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0">
                  Role:
                </p>
                <select
                  value={roleId}
                  onChange={handleDropdownChange}
                  className="lp ti adp afq bbi bmg bnl chy px-5 py-5 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                >
                  <option value="1">{showJobLists.role}</option>
                  <option value="2">Recruiter</option>
                  <option value="4">Candidate</option>
                  <option value="3">Interviewer</option>
                </select>
              </div>
            </div>
            {/* Submit button */}
            <div className="flex flex-row-reverse mt-10 text-center px-5 py-4">
              <button 
                type="submit" onClick={goBack} 
                className="px-6 py-3 text-white rounded-full bg-red-600 py-2 px-4 l-2 r-2  hover:bg-red-800">
                Cancel   
              </button>
              <button
                className="bg-emerald-600 rounded-full hover:bg-green-700 text-white font-bold  l-2 r-2 .py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>):(
            <div className="p-4 border rounded-xl border-zinc-100">
            {/* Title */}
             <div className = "mt-10 px-5 py-4 flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
              <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Resion Add blacklist</span>
            </div>
            {/* Resion Blacklist */}
            <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Resion</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                placeholder={showJobLists.blackReason}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
            {/* Resion Blacklist */}
             <div className = "grid grid-cols-1">
                <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Add blackList Date</div>
                <input className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                placeholder={showJobLists.blackDate}
                readOnly // Thêm thuộc tính readOnly vào input
                />
            </div>
            <div className={classNames("mt-10 text-center px-5 py-4")}>
              <button type="submit" onClick={goBack} className="px-6 py-3 text-white rounded-full bg-red-600     hover:bg-red-800">  Cancel   </button>
              <button type="submit" className="px-6 py-3 text-white rounded-full bg-emerald-600 hover:bg-emerald-800 ml-5">  Delete   </button>
            </div>      
          </div>
        )}
    </div>
  );
}
