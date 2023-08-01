import React, { useState,useEffect } from "react";
import axiosInstance from '../../utils/AxiosInstance';
import {  AcountFrofileInterface,AcountFrofileInterfaceConfig } from "../../services/services";
import useQueryParams from "../../hooks/useQueryParams";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

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
  const [roleId,selectedRoleId]= useState();
  const handleDropdownChange = (event) => {
    selectedRoleId(event.target.value); // Cập nhật giá trị được chọn vào state
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.put(`admin/users/${userId}`, { roleId });
      // Xử lý response khi thành công, nếu cần
    } catch (error) {
      console.error('Error:', error);
      // Xử lý error khi có lỗi, nếu cần
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
        <div className="p-4 border rounded-xl border-zinc-100">
          {/* Title */}
           <div className = "mt-10 px-5 py-4 flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
            <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Change Role Account</span>
          </div>
          <form className="flex-1 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1">
              <div className="flex justify-center">
                <select
                  value={roleId}
                  onChange={handleDropdownChange}
                  className="lp ti adp afq bbi bmg bnl chy px-5 py-5 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
                >
                  <option value="2">Recruiter</option>
                  <option value="4">Candidate</option>
                  <option value="3">Interviewer</option>
                </select>
              </div>
            </div>
            {/* Submit button */}
            <div className="flex flex-row-reverse mt-10 text-center px-5 py-4">
              <button
                className="bg-emerald-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}
