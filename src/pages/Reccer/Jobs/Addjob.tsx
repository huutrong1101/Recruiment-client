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
import { useState } from "react";
import JobDescriptionWidget from "./ReccerJobDescriptionWidget";
import Logo from "../../../../images/logo_FPT.png";
import JobInformationCard from "./AddJobCard";
import JobCard from "../../../components/JobCard/JobCard";
import { Avatar } from "@mui/material";

import AvatarCandidate from "../../../components/Candidate/Avatar";
import Applied from "./AppliedCandidate";
import Suggested from "./SuggestedCandidate";
import TextareaAutosize from "react-textarea-autosize";
import Example2 from "../../../components/Button/Adding1";

export default function Addjob() {
  const { jobId } = useParams();
  const listSkills = ["React", "Java", "HTML", "Figma", "WordPress"];

  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "" },
    { icon: <MapPinIcon />, name: "Location", value: "" },
    {
      icon: <ComputerDesktopIcon />,
      name: "Job Type",
      value: "",
    },
    { icon: <BriefcaseIcon />, name: "Experience", value: "" },
    { icon: <AcademicCapIcon />, name: "Qualification", value: "" },
    {
      icon: <CurrencyDollarIcon />,
      name: "Salary",
      value: "",
    },
    {
      icon: <ClockIcon />,
      name: "Posted at",
      value: "",
    },
  ]);

  return (
    <div className={classNames(`job-detail`, `flex flex-col gap-6`)}>
      <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
        {/* Left side description */}
        <div className={classNames(`w-full md:w-8/12`, `flex flex-col gap-6`)}>
          {/* Widgets */}
          <JobDescriptionWidget
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
              <h1 className="text-2xl font-semibold">Job description</h1>
              <TextareaAutosize
                id="description"
                minRows={4}
                className="resize-none p-2.5 w-full text-justify bg-white border"
                placeholder="Job description here..."
              />
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
              <TextareaAutosize
                id="responsibility"
                minRows={4}
                className="resize-none p-2.5 w-full text-justify bg-white border"
                placeholder="Responsibility here..."
              />
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
              <Example2 />
            </div>
          </div>
          {/* /Skill */}

          <div className={classNames(`px-8 py-8`, `text-justify`)}>
            <button
              className="rounded-lg bg-[#059669] hover:bg-green-900 px-4 py-2 mx-2 my-1 text-white"
              // onClick={routeChange}
            >
              Add Job
            </button>
          </div>
        </div>
        {/* Right side description */}
        <div className={classNames(`w-full md:w-3/12 flex-1 relative`)}>
          <JobInformationCard
            cardData={jobInformation}
            setCardData={setJobInformation}
          />
        </div>
      </div>

      {/* /Applied Candidate */}
      {/* <Applied /> */}

      {/* Suggested Candidate*/}
      {/* <Suggested /> */}
    </div>
  );
}
