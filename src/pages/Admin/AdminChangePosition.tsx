// import React, {useState}from 'react'
// // import className from "className";
// import Avatar from "./../../../images/ava.jpg";

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { AcountInterface } from "../../services/services";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import Modal from "../../components/Modal/Modal";
// import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
// import {
//     HiUserCircle,
//     HiEnvelope,
//     HiMapPin,
//     HiPhone,
//     HiKey,
//   } from "react-icons/hi2";
//   import InputIcon from "../../components/InputIcon/InputIcon";
// import axiosInstance from "../../utils/AxiosInstance";

// type JobCardProps = {
// // Các props khác nếu có
//     userId: 2; // Đây là prop để nhận job.userId
// };
// export default function AdminChangePosition({  userId }: JobCardProps) {
//     // const [open, setOpen] = React.useState(false);
//     const [selectedRoleId, setSelectedRoleId] = useState();  
//     // const handleDropdownChange = (event) => {
//     //     setSelectedRoleId(event.target.value);
//     // };

//     // const newData = {
//     //   roleId: selectedRoleId,
//     // };

//     // // Gửi yêu cầu PUT lên API
//     // axiosInstance
//     //     .put(`admin/users/${userId}`, newData)
//     //     .then((response) => {
//     //         // Xử lý response khi thành công
//     //         console.log("Response:", response.data);
//     //         // Hiển thị thông báo hoặc chuyển hướng trang nếu cần
//     //     })
//     //     .catch((error) => {
//     //         // Xử lý error khi có lỗi
//     //         console.error("Error:", error);
//     //     });
//     //     };
//     // const {
//     //     register,
//     //     handleSubmit,
//     //     formState: { errors },
//     //   } = useForm();
//     // console.log(jobs);
//     // const onDataChangeSubmit = (data: any) => {
//     // console.log(jobs);
//     // };
//     const handleDropdownChange = (event) => {
//         setSelectedRoleId(event.target.value);
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
    
//         // Gửi yêu cầu PUT lên API với giá trị mới của selectedRoleId
//         axiosInstance         
//           .put(`admin/users/${userId}`, { roleId: selectedRoleId })
//           .then((response) => {
//             // Xử lý response khi thành công
//             console.log('Response:', response.data);
//             // Hiển thị thông báo hoặc chuyển hướng trang nếu cần
//           })
//           .catch((error) => {
//             // Xử lý error khi có lỗi
//             console.error('Error:', error);
//           });
//         console.log(`admin/users/${userId}`); console.log( selectedRoleId);
//       };
//     return (
//         <div className="p-4 border rounded-xl border-zinc-100">
//             <h1 className="text-2xl font-semibold flex-1 md:mb-4">
//                 Change Role Account
//             </h1>
//             <form className="flex-1 flex flex-col gap-2" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1">
//                     <div className="flex justify-center">
//                     <select
//                         value={selectedRoleId}
//                         onChange={handleDropdownChange}
//                         className="lp ti adp afq bbi bmg bnl chy px-5 py-5 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
//                     >
//                         <option value="2">Recruiter</option>
//                         <option value="3">Candidate</option>
//                         <option value="4">Interviewer</option>
//                     </select>
//                     </div>
//                 </div>
//                 {/* Submit button */}
//                 <div className="flex flex-row-reverse">
//                     <input type="submit" value="Save" />
//                 </div>
//                 </form>
//         </div>
//     );
// }

import React, { useState } from 'react';
import axiosInstance from '../../utils/AxiosInstance';
import {  AcountInterface } from "../../services/services";

type JobCardProps = {
  userId: AcountInterface; // Make sure to set the correct type for userId
};

export default function AdminChangePosition({ userId }: JobCardProps) {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(''); // Set the correct type for selectedRoleId

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoleId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Gửi yêu cầu PUT lên API với giá trị mới của selectedRoleId
    axiosInstance
      .put(`admin/users/2`, { roleId: selectedRoleId })
      .then((response) => {
        // Xử lý response khi thành công
        console.log('Response:', response.data);
        // Hiển thị thông báo hoặc chuyển hướng trang nếu cần
      })
      .catch((error) => {
        // Xử lý error khi có lỗi
        console.error('Error:', error);
      });
    console.log(`admin/users/2`);
    console.log(selectedRoleId);
  };

  return (
    <div className="p-4 border rounded-xl border-zinc-100">
      <h1 className="text-2xl font-semibold flex-1 md:mb-4">
        Change Role Account
      </h1>
      <form className="flex-1 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1">
          <div className="flex justify-center">
            <select
              value={selectedRoleId}
              onChange={handleDropdownChange}
              className="lp ti adp afq bbi bmg bnl chy px-5 py-5 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50"
            >
              <option value="2">Recruiter</option>
              <option value="3">Candidate</option>
              <option value="4">Interviewer</option>
            </select>
          </div>
        </div>
        {/* Submit button */}
        <div className="flex flex-row-reverse">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
