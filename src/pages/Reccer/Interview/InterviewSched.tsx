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
import ReccerJobDescriptionWidget from "../../../components/RecJob/ReccerJobDescriptionWidget";
import Logo from "../../../../images/logo_FPT.png";
import RecJobInformationCard from "../../../components/RecJob/ReccerJobInformationCard";
import JobCard from "../../../components/JobCard/JobCard";
import { Avatar } from "@mui/material";

import AvatarCandidate from "../../../components/Candidate/Avatar";
import Schedule from "./Schedule";
// import AddMemberForm from "./AddInterviewer";

export default function InterviewSched() {
  const { jobId } = useParams();
  const listSkills = ["React", "Java", "HTML", "Figma", "WordPress"];

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

  const memberList = [
    {
      id: 1,
      name: "John Doe",
      phone: "1234567890",
      email: "john@example.com",
      date: "2023-07-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "9876543210",
      email: "jane@example.com",
      date: "2023-07-02",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "5555555555",
      email: "bob@example.com",
      date: "2023-07-03",
    },
    {
      id: 4,
      name: "Alice Williams",
      phone: "1111111111",
      email: "alice@example.com",
      date: "2023-07-04",
    },
    {
      id: 5,
      name: "Sam Brown",
      phone: "9999999999",
      email: "sam@example.com",
      date: "2023-07-05",
    },
  ];

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
              <h1 className="text-2xl font-semibold">Job description</h1>
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
        </div>
        {/* Right side description */}
        <div className={classNames(`w-full md:w-3/12 flex-1 relative`)}>
          <RecJobInformationCard cardData={jobInformation} />
        </div>
      </div>
      <Schedule />
      {/* <AddMemberForm memberList={memberList} /> */}
    </div>
  );
}
