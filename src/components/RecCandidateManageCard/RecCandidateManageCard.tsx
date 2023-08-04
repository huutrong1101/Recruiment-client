import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";

const RecCandidateCard = (props: any) => {
  const candidate = props.candidate;
  const sliceSkill = candidate.skills.slice(0, 3);

  return (
    <div className="grid grid-cols-1">
      <div className="relative p-6 overflow-hidden text-center bg-white rounded-md shadow group dark:shadow-gray-500 hover:shadow-gray-950">
        <img
          src={candidate.avatar}
          className="w-20 h-20 mx-auto rounded-full shadow dark:shadow-gray-700"
        />
        <div className="mt-2">
          <a href="#" className="text-lg font-semibold hover:text-emerald-600">
            {candidate.fullName}
          </a>
        </div>
        <ul className="mt-2 list-none">
          <li className="inline">
            {sliceSkill.map((item: any) => (
              <p
                key={item.skillId}
                className="bg-[#C6DED5] ml-2 inline-block text-[#218F6E] text-xs px-2.5 py-0.5 font-semibold rounded-full"
              >
                {item.name}
              </p>
            ))}
          </li>
        </ul>
        <div className="flex justify-center gap-2 mt-2">
          <p className="text-slate-400">Phone:</p>
          {candidate.phone}
        </div>
        <div className="pt-4">
          <Link to={`/recruiter/applied-candidates/${candidate.userId}`}>
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
