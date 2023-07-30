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
import { useState, useEffect } from "react";
import JobDescriptionWidget from "./JobDescriptionWidget";
import Logo from "./../../../images/logo_FPT.png";
import JobInformationCard from "./JobInformationCard";
import JobCard from "../../components/JobCard/JobCard";
import axiosInstance from "../../utils/AxiosInstance";
import Loader from "../../components/Loader/Loader";
import moment from "moment";
import { JobInterface } from "../../services/services";
import { useAppSelector } from "../../hooks/hooks";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

export default function JobDetail() {
  const { jobId } = useParams();

  const [job, setJob] = useState<JobInterface | null>(null);

  const jobs = useAppSelector((state) => state.Home.jobs);

  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "" },
    { icon: <MapPinIcon />, name: "Location", value: "" },
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
      const response = await axiosInstance.get(`jobs/${jobId}`);
      setJob(response.data.result);
    };
    getJobDetail();
  }, [jobId]);

  useEffect(() => {
    if (job) {
      setJobInformation([
        { icon: <UserIcon />, name: "Employee Type", value: job.jobType },
        { icon: <MapPinIcon />, name: "Location", value: job.location },
        {
          icon: <ComputerDesktopIcon />,
          name: "Job Type",
          value: job.position.name,
        },
        {
          icon: <CurrencyDollarIcon />,
          name: "Salary",
          value: job.salaryRange,
        },
        {
          icon: <ClockIcon />,
          name: "Posted at",
          value: moment(job.createdAt).format("Do MMM, YYYY"),
        },
      ]);
    }
  }, [job]);

  return (
    <>
      <div className={classNames(`job-detail`)}>
        {job ? (
          <>
            {" "}
            <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
              {/* Left side description */}
              <div
                className={classNames(
                  `w-full md:w-8/12`,
                  `flex flex-col gap-6`,
                )}
              >
                {/* Widgets */}
                <JobDescriptionWidget
                  companyName="FPT Software"
                  jobRole={job.name}
                  quantity={job.quantity}
                  publishDate={moment(job.createdAt)
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
                <JobInformationCard cardData={jobInformation} />
              </div>
            </div>
            {/* Footer */}
            <div
              className={classNames(
                `flex flex-col gap-2 items-center justify-center my-12`,
              )}
            >
              <h1 className={classNames(`text-3xl font-semibold`)}>
                Related Vacancies
              </h1>
              <h2 className={classNames(`text-lg text-zinc-500`)}>
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+
                companies worldwide.
              </h2>
              <div className={classNames(`flex flex-col md:flex-row gap-6`)}>
                {/* TODO: add job fetch data */}
                {jobs.slice(0, 3).map((data) => {
                  return <JobCard job={data} />;
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center my-4">
            <LoadSpinner className="text-3xl text-emerald-500" />
          </div>
        )}
      </div>
    </>
  );
}
