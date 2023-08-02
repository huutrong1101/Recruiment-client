import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";

const RecCandidateCard = (props: any) => {
  const candidate = props.candidate;
  const sliceSkill = candidate.skills.slice(0,3);
  console.log(sliceSkill)
  return (
    <div className="grid grid-cols-1">
      <div className="group bg-white relative overflow-hidden rounded-md shadow dark:shadow-gray-500 text-center p-6 hover:shadow-gray-950">
        <img
          src={candidate.avatar}
          className="h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto"
        />
        <div className="mt-2">
          <a href="#" className="hover:text-emerald-600 font-semibold text-lg">
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
        <div className="flex justify-center mt-2 gap-2">
          <p className="text-slate-400">Phone:</p>
          {candidate.phone}
        </div>
        <div className="pt-4">
          <Link to={`/recruiter/applied-candidates/${candidate.userId}`}>
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecCandidateCard;
