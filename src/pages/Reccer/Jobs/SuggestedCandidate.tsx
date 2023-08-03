import classNames from "classnames";
import AvatarCandidate from "../../../components/Candidate/Avatar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/AxiosInstance";
import { CalendarDaysIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Suggested() {
  const { jobId } = useParams();
  let navigate = useNavigate();
  const routeChange = (userId: string) => {
    let path = `interview-schedule/${userId}`;
    navigate(path);
  };
  const [suggestCandidate, setSuggestCandidate] = useState<any[]>([]);

  useEffect(() => {
    const getSuggestedCandidates = async () => {
      const response = await axiosInstance.get(
        `recruiter/jobs/${jobId}/suggested-users`,
      );
      setSuggestCandidate(response.data.result.content);
    };
    getSuggestedCandidates();
  }, [jobId]);

  return (
    <div
      className={classNames(
        `border bg-white shadow-sm rounded-xl`,
        `px-8 py-8`,
        `text-justify`,
      )}
    >
      <div>
        <h1 className="text-2xl font-semibold">Suggested Candidate</h1>
        <div
          className={classNames(
            `flex flex-col md:flex-row gap-12 justify-center`,
            `py-4`,
          )}
        >
          {suggestCandidate.length > 0 ? (
            suggestCandidate.map((candidates, index) => (
              <div className="w-[22%] bg-white rounded-xl drop-shadow-lg border-2 border-gray-300">
                <button className="text-left flex flex-col px-4 pt-4">
                  <EnvelopeIcon
                    className="w-6 h-6"
                    onClick={() => routeChange(candidates.userId)}
                  />
                </button>
                <div className="flex flex-col items-center justify-center px-6 pb-4 ">
                  <AvatarCandidate imageUrl={candidates.avatar} size="sm" />
                  <div key={index} className="text-lg font-semibold">
                    {candidates.fullName}
                  </div>
                  {/* <div key={index} className="flex flex-row">
                {candidates.skills.map((skill:any, index:number) => (
                  <p
                    key={index}
                    className="rounded-lg bg-[#78AF9A] bg-opacity-40  p-1 mx-1 my-1 text-sm text-[#218F6E] flex flex-col items-center"
                  >
                    {skill}
                  </p>
                ))}
              </div> */}
                  <div className="flex flex-row font-light text-gray-500">
                    <p>Phone: </p>
                    <div className="font-semibold text-black">
                      {candidates.phone}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      to={`/recruiter/applied-candidates/${candidates.userId}`}
                    >
                      <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">
                        Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Cannot found candidate suggest for job!</div>
          )}
        </div>
      </div>
    </div>
  );
}
