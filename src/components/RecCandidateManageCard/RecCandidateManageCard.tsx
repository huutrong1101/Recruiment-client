import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";

const RecCandidateCard = (props: any) => {
  const candidate = props.candidate;

  // console.log((JSON.parse(candidate.information)?.skills)?.length)

  return (
    <div className="grid grid-cols-1">
      <div className="relative p-6 overflow-hidden text-center bg-white rounded-md shadow group dark:shadow-gray-500 hover:shadow-gray-950">
        <img
          src={candidate.avatar}
          className="w-20 h-20 mx-auto rounded-full shadow dark:shadow-gray-700"
        />
        <div className="mt-2">
          <a className="text-lg font-semibold">
            {candidate.fullName}
          </a>
        </div>
        <ul className="mt-2 list-none ">
          <li className="inline">
            {JSON.parse(candidate.information)
              ?.skills?.slice(0, 3)
              .map((skill: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#C6DED5] ml-2 inline-block text-[#218F6E] text-xs px-2.5 py-0.5 font-semibold rounded-full"
                >
                  {skill.label}
                </div>
              ))}
          </li>
          {JSON.parse(candidate.information)?.skills?.length > 2 ? (
            <div className="bg-[#C6DED5] ml-2 inline-block text-[#218F6E] text-xs px-2.5 py-0.5 font-semibold rounded-full">
              ...
            </div>
          ) : (
            <div></div>
          )}
        </ul>
        <div className="flex justify-center gap-2 mt-2">
          <p className="text-slate-400">Phone:</p>
          {candidate.phone}
        </div>
        <div className="pt-4">
          <Link to={`/recruiter/candidates/${candidate.userId}`}>
            <button className="px-4 py-2 text-white rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecCandidateCard;
