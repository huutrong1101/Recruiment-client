import React from "react";
import AvatarInterviewer from "../../components/Candidate/Avatar";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import user from "../../../images/uses.png";
import DummyAvatar from "../DummyAvatar/DummyAvatar";
import classNames from "classnames";
import { AiFillPhone } from "react-icons/ai";

const RecInterviewerManageCard = (props: any) => {
  const interviewer = props.interviewer;
  const { interviewerId } = interviewer;
  return (
    <Link to={`/recruiter/interviewers/${interviewerId}`}>
      <div className="grid grid-cols-1">
        <div
          className={classNames(
            `relative flex flex-col items-center justify-center p-6 overflow-hidden text-center
          rounded-md shadow group dark:shadow-gray-500 hover:shadow-gray-95`,
            `hover:border-emerald-600 border`,
          )}
        >
          <img
            src={interviewer.avatar || user}
            className="w-20 h-20 mx-auto rounded-full shadow dark:shadow-gray-700 aspect-square"
          />
          <div className="mt-2">
            <a
              href="#"
              className="text-lg font-semibold hover:text-emerald-600"
            >
              {interviewer.fullName}
            </a>
          </div>
          <ul className="mt-2 list-none">
            <div className="flex flex-row min-h-[3vh]">
              {JSON.parse(interviewer.information)
                ?.skills?.slice(0, 3)
                .map((skill: any, index: any) => (
                  <div
                    key={index}
                    className="bg-[#C6DED5] ml-2 inline-block text-[#218F6E] text-xs truncate px-2.5 py-0.5 font-semibold rounded-full"
                  >
                    {skill.label}
                  </div>
                ))}
            </div>
            {/* {JSON.parse(interviewer.information)?.skills?.length > 2 ? (
              <div className="bg-[#C6DED5] ml-2 inline-block text-[#218F6E] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                ...
              </div>
            ) : (
              <div></div>
            )} */}
          </ul>
          <div className="flex gap-2 mt-2 text-gray-400 text-sm items-center">
            {/* <p className="">Phone</p> */}
            <AiFillPhone className="text-gray-200" />
            {interviewer.phone}
          </div>
          {/* <div className="pt-4">
            <Link to={`../interviewers/${interviewer.interviewerId}`}>
              <button className="px-4 py-2 text-white rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600">
                Profile
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default RecInterviewerManageCard;
