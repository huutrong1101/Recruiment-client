import { NoSymbolIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import user from "../../../images/uses.png";

const RecCandidateCard = (props: any) => {
  const candidate = props.candidate;

  // console.log((JSON.parse(candidate.information)?.skills)?.length)

  return (
    <Link to={`/recruiter/candidates/${candidate.userId}`}>
      <div
        className={classNames(
          `relative px-6 py-4 overflow-hidden text-center bg-white rounded-md group`,
          `border shadow-sm hover:border-emerald-600 group flex flex-col gap-2`,
        )}
      >
        {candidate.blackList === true ? (
          <div className="bg-black rounded-lg p-1 font-light text-sm text-white flex h-fit w-fit gap-1 opacity-60">
            <NoSymbolIcon className="w-5 h-5 items-center" />
            <span className="hidden group-hover:inline-block group-focus:inline-block transition-all ease-in-out">
              Blacklisted
            </span>
          </div>
        ) : (
          <div></div>
        )}
        <img
          src={candidate.avatar || user}
          className="w-20 h-20 mx-auto rounded-full shadow dark:shadow-gray-700 aspect-square"
        />
        <div className="mt-2">
          <a className=" font-semibold">{candidate.fullName}</a>
        </div>

        <div className=" min-h-[4vh]">
          <div className="flex flex-row items-center justify-center">
            {JSON.parse(candidate.information)
              ?.skills?.slice(0, 2)
              .map((skill: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#C6DED5] ml-2 text-[#218F6E] text-xs px-2.5 py-0.5 rounded-full"
                >
                  {skill.label}
                </div>
              ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-2 items-center">
          <AiFillPhone className="text-gray-300 text-xs" />
          <span className="text-gray-600 text-sm">{candidate.phone}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecCandidateCard;
