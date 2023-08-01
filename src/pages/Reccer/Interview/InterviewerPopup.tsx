import { PlusIcon, TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import axiosInstance from "../../../utils/AxiosInstance";
import { Checkbox } from "@mui/material";

export interface Interviewer {
  name: string | null;
  email: string | null;
  phone: string | null;
  date: string | null;
  id: string | null;
  position: string | null;
}
interface InterviewerPopupProps {
  interviewerArray: Interviewer[]; // Sử dụng interface ở đây
  onSelectInterviewer: (interviewer: Interviewer) => void;
}

export default function InterviewerPopup({
  interviewerArray,
  onSelectInterviewer,
}: InterviewerPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [interviewerList, setInterviewerList] = useState<any[]>([]);
  useEffect(() => {
    const getInterviewers = async () => {
      try {
        const response = await axiosInstance(`/recruiter/interviewers`);
        setInterviewerList(response.data.result.content);
      } catch (error) {
        console.log(error);
      }
    };
    getInterviewers();
  }, []);

  const [interviewArray, setInterviewArray] =
    useState<Interviewer[]>(interviewerArray);

  // Hàm xử lý thêm người phỏng vấn vào mảng interviewArray
  const handleAdd = (interviewers: Interviewer) => {
    onSelectInterviewer(interviewers);
  };
  const handleDeleteInterviewer = (interviewerId: string) => {
    const newList = interviewerList.filter(
      (interviewer: any) => interviewer.interviewerId !== interviewerId,
    );
    setInterviewerList(newList);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    // Thay đổi trạng thái khi nhấp vào Checkbox
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <button
        className={classNames(
          `text-lg font-normal text-white`,
          `flex items-center`,
          `bg-emerald-700 py-2 px-4 rounded-xl mr-4`,
        )}
        onClick={() => setIsOpen(true)}
      >
        <UserPlusIcon className="w-6 h-6 mr-2" />
        <p>Add Interviewer</p>
      </button>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center">
          <div className="popup-content bg-white border border-gray-300 p-4 rounded-lg flex flex-col">
            <button
              onClick={() => setIsOpen(false)}
              className={classNames(`flex justify-end`)}
            >
              <XCircleIcon className="w-7 h-7" />
            </button>
            <table className="w-full text-sm text-left text-gray-500">
              {/* Interviewer Info */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Interviewer's Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="py-4"></th>
                </tr>
              </thead>
              <tbody>
                {interviewerList.map((interviewers: any) => (
                  <tr
                    className="bg-white border-b"
                    key={interviewers.interviewerId}
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {interviewers.fullName}
                    </td>
                    <td className="px-6 py-4">{interviewers.phone}</td>
                    <td className="px-6 py-4">{interviewers.email}</td>
                    <td className="px-4 py-4">
                      <button
                        className="flex"
                        onClick={() => 
                          handleAdd(interviewers)
                        }
                      >
                        <Checkbox color="success" size="medium" onClick={handleCheck} checked={isChecked}/>
                        {/* <input color="success" type="checkbox" className="w-5 h-5"/> */}
                        {/* <PlusIcon className="w-6 h-6 text-gray" /> */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* /////////// */}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
