import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReccerJobDescriptionWidget from "../../../components/RecJob/ReccerJobDescriptionWidget";
import Logo from "../../../../images/logo_FPT.png";
import RecJobInformationCard from "../../../components/RecJob/ReccerJobInformationCard";
import JobCard from "../../../components/JobCard/JobCard";
import { Avatar } from "@mui/material";

import AvatarCandidate from "../../../components/Candidate/Avatar";
import Applied from "./AppliedCandidate";
import Suggested from "./SuggestedCandidate";
import { JobInterface } from "../../../services/services";
import axiosInstance from "../../../utils/AxiosInstance";

export default function ReccerJobDetail() {
  const { jobId } = useParams();
  const listSkills = ["React", "Java", "HTML", "Figma", "WordPress"];

  const [job, setJob] = useState<JobInterface | null>(null);

  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "Full time" },
    { icon: <MapPinIcon />, name: "Location", value: "Ftown3" },
    {
      icon: <ComputerDesktopIcon />,
      name: "Job Type",
      value: "Back-end Developer",
    },
    { icon: <BriefcaseIcon />, name: "Experience", value: "2+ years" },
    { icon: <AcademicCapIcon />, name: "Qualification", value: "MCA" },
    {
      icon: <CurrencyDollarIcon />,
      name: "Salary",
      value: "12 Mil (negotiable)",
    },
    {
      icon: <ClockIcon />,
      name: "Posted at",
      value: new Date().toDateString(),
    },
  ]);

  useEffect(() => {
    const getJobDetail = async () => {
      const response = await axiosInstance.get(`recruiter/jobs/${jobId}`);//Viết API cho BE viết lấy 1 job trong list job của reccer
      setJob(response.data.result);
    };
    getJobDetail();
  }, [jobId]);
  

  return (
    <div className={classNames(`job-detail`, `flex flex-col gap-6`)}>
      <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
        {/* Left side description */}
        <div className={classNames(`w-full md:w-8/12`, `flex flex-col gap-6`)}>
          {/* Widgets */}
          <ReccerJobDescriptionWidget
            companyName="FPT Software"
            jobRole="Web Designer"
            publishDate={new Date()}
            logo={{ src: Logo, alt: "image" }}
          />
          {/* Details */}
          <div
            className={classNames(
              `border bg-white shadow-sm rounded-xl`,
              `px-8 py-8`,
              `text-justify`,
            )}
          >
            <div>
              <h1 className="text-2xl font-semibold">{job?.name}</h1>
              <p>
               {job?.description}
              </p>
            </div>
          </div>

          {/* Responsibility */}
          <div
            className={classNames(
              `border bg-white shadow-sm rounded-xl`,
              `px-8 py-8`,
              `text-justify`,
            )}
          >
            <div>
              <h1 className="text-2xl font-semibold">
                Responsibility and Duties
              </h1>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
            </div>
          </div>

          {/* Skill */}
          <div
            className={classNames(
              `border bg-white shadow-sm rounded-xl`,
              `px-8 py-8`,
              `text-justify`,
            )}
          >
            <div>
              <h1 className="text-2xl font-semibold">Skills Require</h1>
              <div className="flex flex-wrap p-4">
                {listSkills.map((item, index) => (
                  <div key={index}>
                    <span
                      key={index}
                      className="rounded-lg bg-[#78AF9A] bg-opacity-40 p-2 mx-2 my-1 text-[#218F6E]"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* /Skill */}

          <div className={classNames(`px-8 py-8`, `text-justify`)}>
            <button
              className="rounded-lg bg-[#059669] hover:bg-green-900 px-4 py-2 mx-2 my-1 text-white"
              // onClick={routeChange}
            >
              Edit Job
            </button>
          </div>
        </div>
        {/* Right side description */}
        <div className={classNames(`w-full md:w-3/12 flex-1 relative`)}>
          <RecJobInformationCard cardData={jobInformation} />
        </div>
      </div>

      {/* /Applied Candidate */}
      <Applied />

      {/* Suggested Candidate*/}
      <Suggested />
    </div>
  );
}
