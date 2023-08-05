// import { avatar } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import classNames from "classnames";
import RecCandidateinfoCard from "./RecCandidateInfoCard";
import {
  MdOutlineEmail,
  MdOutlineCalendarMonth,
  MdOutlineLocationOn,
} from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import moment from "moment";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import InterviewHistory from "./InterviewHistory";

export default function RecCandidateDetailCard(props: any) {
  const candidate = props.candidate;

  const [CandidateInformaiton, setCandidateInformation] = useState([
    { icon: <MdOutlineEmail />, name: "", value: "" },
    { icon: <MdOutlineCalendarMonth />, name: "", value: "" },
    { icon: <MdOutlineLocationOn />, name: "", value: "" },
    { icon: <HiOutlineDeviceMobile />, name: "", value: "" },
  ]);

  useEffect(() => {
    if (candidate) {
      setCandidateInformation([
        { icon: <MdOutlineEmail />, name: "Email", value: candidate?.email },
        {
          icon: <MdOutlineCalendarMonth />,
          name: "D.O.B",
          value: moment(candidate?.dateOfBirth).format("Do MMM, YYYY"),
        },
        {
          icon: <MdOutlineLocationOn />,
          name: "Address",
          value: candidate.address,
        },
        {
          icon: <HiOutlineDeviceMobile />,
          name: "Phone",
          value: formatPhoneNumber(candidate?.phone),
        },
      ]);
    }
  }, [candidate]);

  function formatPhoneNumber(phoneNumber: any) {
    if (phoneNumber == null) {
      return;
    }
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    if (cleanedPhoneNumber.length === 10) {
      return cleanedPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
    return phoneNumber;
  }

  return (
    <div>
      {candidate ? (
        <>
          <section className="relative">
            <div className="">
              <div className="relative shrink-0 w-full">
                <img
                  src="../../../images/cover2.jpg"
                  className="h-64 w-full object-cover lg:rounded-xl shadow "
                />
              </div>
              <div className="md:flex ms-4 -mt-12">
                <div className="md:w-full">
                  <div className="relative flex items-end">
                    <img
                      src={candidate.avatar}
                      className="h-28 w-28 rounded-full ring-4 ring-slate-50 "
                    />
                    <div className="ms-4 mb-7">
                      <p className="text-lg font-semibold">
                        {candidate?.fullName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative mt-12 md:pb-15 pb-10">
            <div className="">
              <div className="">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div
                      className={classNames(
                        `border bg-white shadow-sm rounded-xl`,
                        `px-8 py-8`,
                        `text-justify`,
                      )}
                    >
                      <h1 className="text-2xl font-semibold">Description:</h1>
                      {/* <p className='text-zinc-600 mt-3 text-lg'>{candidate?.about}</p> */}
                      <p className="">{candidate?.about}</p>
                    </div>
                    <div className="grid lg:grid-cols-1 grid-cols-1 mt-4 gap-6">
                      <div
                        className={classNames(
                          `border bg-white shadow-sm rounded-xl`,
                          `px-8 py-8`,
                          `text-justify`,
                        )}
                      >
                        <div className="text-2xl font-semibold">Skill:</div>
                        <div>
                          {JSON.parse(candidate.information)?.skills?.map(
                            (skill, index) => (
                              <p
                                key={index}
                                className="px-4 py-2 gap-2 ml-2 inline-flex bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                              >
                                {skill.label}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          `border bg-white shadow-sm rounded-xl`,
                          `px-8 py-8`,
                          `text-justify`,
                        )}
                      >
                        <div className="text-2xl font-semibold">Education</div>
                        <div className="flex gap-4 flex-wrap">
                          {JSON.parse(candidate.information)?.education?.map(
                            (edu: any, index: any) => (
                              <>
                                <div
                                  key={index}
                                  className="text-zinc-600 mt-3 text-lg border rounded-lg w-fit py-2 px-2 shadow bg-emerald-50"
                                >
                                  <p>School: {edu.school}</p>
                                  <p>Major: {edu.major}</p>
                                  <p>Graduated Year: {edu.graduatedYear}</p>
                                </div>
                              </>
                            ),
                          )}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          `border bg-white shadow-sm rounded-xl`,
                          `px-8 py-8`,
                          `text-justify`,
                        )}
                      >
                        <div className="text-2xl font-semibold">Project</div>
                        <div className="flex gap-4 flex-wrap">
                          {JSON.parse(candidate.information)?.project?.map(
                            (edu: any, index: any) => (
                              <>
                                <div
                                  key={index}
                                  className="text-zinc-600 mt-3 text-lg border rounded-lg w-fit py-2 px-2 shadow bg-emerald-50"
                                >
                                  <p>Project: {edu.school}</p>
                                  <p>Major: {edu.major}</p>
                                  <p>Graduated Year: {edu.graduatedYear}</p>
                                </div>
                              </>
                            ),
                          )}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          `border bg-white shadow-sm rounded-xl`,
                          `px-8 py-8`,
                          `text-justify`,
                        )}
                      >
                        <div className="text-2xl font-semibold">Experience</div>
                        {JSON.parse(candidate.information)?.experience?.map(
                          (edu: any, index: any) => (
                            <>
                              <div
                                key={index}
                                className="text-zinc-600 mt-3 text-lg border rounded-lg w-fit py-2 px-2 shadow bg-emerald-50"
                              >
                                <p>Project: {edu.school}</p>
                                <p>Major: {edu.major}</p>
                                <p>Graduated Year: {edu.graduatedYear}</p>
                              </div>
                            </>
                          ),
                        )}
                      </div>
                      <div
                        className={classNames(
                          `border bg-white shadow-sm rounded-xl`,
                          `px-8 py-8`,
                          `text-justify`,
                        )}
                      >
                        <div className="text-2xl font-semibold">
                          Certificate
                        </div>
                        {JSON.parse(candidate.information)?.certificate?.map(
                          (edu: any, index: any) => (
                            <>
                              <div
                                key={index}
                                className="text-zinc-600 mt-3 text-lg border rounded-lg w-fit py-2 px-2 shadow bg-emerald-50"
                              >
                                <p>Project: {edu.school}</p>
                                <p>Major: {edu.major}</p>
                                <p>Graduated Year: {edu.graduatedYear}</p>
                              </div>
                            </>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 md:col-span-5">
                    <div
                      className={classNames(
                        `w-full bg-gray-200 drop-shadow-md px-4 py-6 rounded-xl border sticky top-20`,
                        `flex flex-col gap-4`,
                      )}
                    >
                      <RecCandidateinfoCard cardData={CandidateInformaiton} />
                      <div className="mt-3 flex w-full bg-white p-3 items-center justify-center rounded-md shadow ">
                        <GrDocumentText />
                        <span className="font-medium ms-2">
                          {candidate?.fullName}.pdf
                        </span>
                        {/* <a href="linkResume" download></a> */}
                        {/* DOWNLOAD */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="">
            <InterviewHistory />
          </div>
        </>
      ) : (
        <div className="grid items-center justify-center pt-5">
          <LoadSpinner className="text-4xl " />
        </div>
      )}
    </div>
  );
}

interface JobInformationCardItemProps {
  icon: React.ReactElement;
  name: string;
  value: string;
}

function JobInformationCardItem({
  icon,
  name,
  value,
}: JobInformationCardItemProps) {
  return (
    <div className={classNames(`flex flex-row items-center gap-4`)}>
      <div className={classNames(`w-1/12 mx-2 text-3xl`)}>{icon}</div>
      <div className={classNames(`flex flex-col flex-1`)}>
        <span>{name}</span>
        <span className={classNames(`text-teal-700`)}>{value}</span>
      </div>
    </div>
  );
}
