import classNames from "classnames";
import { PlusIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { TextareaAutosize } from "@mui/material";
import InterviewerPopup, { Interviewer } from "./InterviewerPopup";
import { useState } from "react";

export default function Schedule() {
  const personArray = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "111222333",
      date: new Date().toDateString(),
      id: 1,
      position: "Web Designer",
    },
  ];

  const [interviewerArray, setInterviewers] = useState<any[]>([]);

  const handleOnSelectInterviewer = (interviewer: Interviewer) => {
    setInterviewers([...interviewerArray, interviewer]);
  };
  const handleDeleteInterviewer = (interviewerId: string) => {
    const newList = interviewerArray.filter(
      (interviewer: any) => interviewer.interviewerId !== interviewerId,
    );
    setInterviewers(newList);
  };

  return (
    <div
      className={classNames(
        `border bg-white shadow-sm rounded-xl`,
        `px-8 py-8`,
        `text-justify`,
      )}
    >
      <div className={classNames(`flex justify-between `)}>
        <h1 className="text-2xl font-semibold">Schedule</h1>

        {/* Add Interviewer */}
        <InterviewerPopup
          interviewerArray={interviewerArray}
          onSelectInterviewer={handleOnSelectInterviewer}
        />
        {/* /////// */}
      </div>

      <div className="overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-gray-500">
          {/* Candidate's info */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-4">
                Candidate's Name
              </th>
              <th scope="col" className="px-6 py-4">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              {/* <th scope="col" className="px-6 py-4">
                Date created
              </th> */}
              <th scope="col" className="py-4">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {personArray.map((personArray) => (
              <tr className="bg-white border-b " key={personArray.id}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {personArray.name}
                </td>
                <td className="px-6 py-4">{personArray.phone}</td>
                <td className="px-6 py-4">{personArray.email}</td>
                {/* <td className="px-6 py-4">{personArray.date}</td> */}
                <td className="px-4 py-4">
                  <button>
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* ////////////// */}
          {/* Interviewer Info */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
              {/* <th scope="col" className="px-6 py-4">
                Date created
              </th> */}
              <th scope="col" className="py-4">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {interviewerArray.map((interviewers, index) => (
              <tr className="bg-white border-b" key={index}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {interviewers.fullName}
                </td>
                <td className="px-6 py-4">{interviewers.phone}</td>
                <td className="px-6 py-4">{interviewers.email}</td>
                {/* <td className="px-6 py-4">{interviewer.date}</td> */}
                <td className="px-4 py-4">
                  <button
                    onClick={() =>
                      handleDeleteInterviewer(interviewers.interviewerId)
                    }
                  >
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* /////////// */}
        </table>
        <div
          className={classNames(
            `text-sm text-gray-700 uppercase bg-gray-50 font-bold`,
            `px-6 py-4 flex flex-col`,
          )}
        >
          Interview Link:
          <TextareaAutosize
            minRows={1}
            className={classNames(
              `w-full resize-none px-1 text-sm bg-white border rounded-lg`,
            )}
            placeholder="https://meet.google.com/sxi-erat-ejf?authuser=1"
          ></TextareaAutosize>
        </div>
      </div>
      <div className={classNames(`flex justify-center`)}>
        <button
          className={classNames(
            `text-lg font-normal text-white`,
            `flex items-center`,
            `bg-emerald-700 py-2 px-4 rounded-xl`,
          )}
        >
          Save
        </button>
      </div>
    </div>
  );
}
