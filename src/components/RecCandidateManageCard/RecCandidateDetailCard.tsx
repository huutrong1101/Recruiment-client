// import { avatar } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import blog_image from "../../../images/blog_image.png";
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
    if(phoneNumber==null) return
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
                      src={blog_image}
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
          <section className="relative mt-12 md:pb-24 pb-16">
            <div className="">
              <div className="">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <p className="text-xl font-semibold">Description:</p>
                    {/* <p className='text-zinc-600 mt-3 text-lg'>{candidate?.about}</p> */}
                    <p className="text-zinc-600 mt-3 text-lg">
                      {candidate?.about}
                    </p>
                    <p className="mt-6 text-xl font-semibold">Skill:</p>
                    <div className="grid lg:grid-cols-1 grid-cols-1 mt-4 gap-6">
                      <div>
                        {candidate?.skills?.map((skill, index) => (
                          <p
                            key={index}
                            className="px-4 py-2 gap-2 ml-2 inline-flex bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                          >
                            {skill.name}
                          </p>
                        ))}
                      </div>
                      <div className="mt-4 text-xl font-semibold">
                        Education
                      </div>
                      {candidate?.educations?.map((education, index) => (
                        <>
                          <p
                            key={index}
                            className="text-zinc-600 mt-3 text-lg "
                          >
                            {education.educationId}. {education.schoolName} -{" "}
                            {education.specialized} - {education?.certificate}
                          </p>
                        </>
                      ))}
                      <div className="mt-4 text-xl font-semibold">Course</div>
                      {candidate?.courses?.map((course, index) => (
                        <>
                          <p
                            key={index}
                            className="text-zinc-600 mt-3 text-lg "
                          >
                            {course.courseId}. {course.courseName} -{" "}
                            {course.trainningOrganizations} -{" "}
                            {moment(course?.completionTime).format(
                              "Do MMM, YYYY",
                            )}
                          </p>
                        </>
                      ))}

                      <div className="mt-4 text-xl font-semibold">Project</div>
                      {candidate?.projects?.map((project, index) => (
                        <>
                          <p
                            key={index}
                            className="text-zinc-600 mt-3 text-lg "
                          >
                            {project.projectId}. {project.projectName} -{" "}
                            {project.positionInProject}
                          </p>
                          <p
                            key={index}
                            className="text-zinc-600 mt-3 text-lg ml-4"
                          >
                            {project.description}
                          </p>
                        </>
                      ))}
                      <div className="mt-4 text-xl font-semibold">
                        Experience
                      </div>
                      {candidate?.experiences?.map((experience, index) => (
                        <>
                          <p
                            key={index}
                            className="text-zinc-600 mt-3 text-lg "
                          >
                            {experience.experienceId}. {experience.companyName}{" "}
                            - {experience.position} - {experience.time}
                          </p>
                        </>
                      ))}
                      <div className="mt-4 text-xl font-semibold">Award</div>
                      {candidate?.awards?.map((award, index) => (
                        <>
                          <p
                            key={index}
                            className="text-zinc-600 mt-3 text-lg "
                          >
                            {award.awardId}. {award.awardName} -{" "}
                            {award.awardOrganization} -{" "}
                            {moment(award?.awardWinningTime).format(
                              "Do MMM, YYYY",
                            )}
                          </p>
                        </>
                      ))}
                      <div className="mt-4 text-xl font-semibold">
                        Certificate
                      </div>
                      {candidate?.certificates?.map((certificate, index) => (
                        <>
                          <p
                            key={index}
                            className="text-zinc-600 mt-3 text-lg "
                          >
                            {certificate.certificateId}.{" "}
                            {certificate.certificateName} -{" "}
                            {certificate.certificateBody} -{" "}
                            {moment(certificate?.certificationTime).format(
                              "Do MMM, YYYY",
                            )}
                          </p>
                        </>
                      ))}
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
                        <a
                          href=""
                          className="px-4 py-2 gap-2 ml-4 mt-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
