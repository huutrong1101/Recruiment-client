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
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../../../images/logo_FPT.png";
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner";
import ReccerJobDescriptionWidget from "../../../components/RecJob/ReccerJobDescriptionWidget";
import RecJobInformationCard from "../../../components/RecJob/ReccerJobInformationCard";
import { JobInterface } from "../../../services/services";
import axiosInstance from "../../../utils/AxiosInstance";
import { JOB_POSITION } from "../../../utils/Localization";
import Schedule from "./Schedule";

export default function ReccerJobDetail() {
  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "" },
    { icon: <MapPinIcon />, name: "Location", value: "" },
    {
      icon: <ComputerDesktopIcon />,
      name: "Position",
      value: "Back-end Developer",
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
      name: "End at",
      value: "",
    },
  ]);
  const { jobId } = useParams();

  const [job, setJob] = useState<JobInterface | null>(null);

  useEffect(() => {
    const getJobDetail = async () => {
      const response = await axiosInstance.get(`recruiter/jobs/${jobId}`); //Viết API cho BE viết lấy 1 job trong list job của reccer
      setJob(response.data.result);
    };
    getJobDetail();
  }, [jobId]);

  useEffect(() => {
    if (job) {
      setJobInformation([
        {
          icon: <UserIcon />,
          name: "Employee Type",
          value: JOB_POSITION[job.jobType],
        },
        {
          icon: <MapPinIcon />,
          name: "Location",
          value: JOB_POSITION[job.location],
        },
        {
          icon: <ComputerDesktopIcon />,
          name: "Position",
          value: JOB_POSITION[job.position.name],
        },
        {
          icon: <CurrencyDollarIcon />,
          name: "Salary",
          value: job.salaryRange,
        },
        {
          icon: <ClockIcon />,
          name: "End at",
          value: moment(job.deadline).format("Do MMM, YYYY"),
        },
      ]);
    }
  }, [job]);

  return (
    <>
      <div className={classNames(`job-detail`, `flex flex-col gap-6`)}>
        {job ? (
          <>
            <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
              {/* Left side description */}
              <div
                className={classNames(
                  `w-full md:w-8/12`,
                  `flex flex-col gap-6 mt-2`,
                )}
              >
                {/* Widgets */}
                <ReccerJobDescriptionWidget
                  companyName="FPT Software"
                  jobRole={job?.name}
                  publishDate={moment(job?.createdAt)
                    .format("Do MMM, YYYY")
                    .toString()}
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
                    <p>{job?.description}</p>
                  </div>
                </div>

                {/* Requirement */}
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Requirement</h1>
                    <p>{job?.requirement}</p>
                  </div>
                </div>

                {/* Benefit */}
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Benefit</h1>
                    <p>{job?.benefit}</p>
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
                      {job?.skills.map((item, index) => (
                        <div key={index}>
                          <span
                            key={index}
                            className="rounded-lg bg-[#78AF9A] bg-opacity-40 p-2 mx-2 my-1 text-[#218F6E]"
                          >
                            {item.name}
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
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-30 mb-30">
            <LoadSpinner className="text-2xl" />{" "}
          </div>
        )}
      </div>
    </>
  );
}
