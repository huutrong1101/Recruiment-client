import { avatar } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { RecInterviewerInterface } from "../../services/services";
import axiosInstance from "../../utils/AxiosInstance";
import { useParams } from "react-router-dom";
import {
  MdOutlineEmail,
  MdOutlineCalendarMonth,
  MdOutlineLocationOn,
} from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import InterviewerRecent from "../../pages/Interviewer/InterviewRecent/InterviewRecent";
import RecInterviewerIn4Card from "../../components/RecInterviewerManageCard/RecInterviewerIn4Card";
import moment from "moment";
import InterviewRecent from "../../pages/Interviewer/InterviewRecent/InterviewRecent";
import RecInterviewrecent from "./RecInterviewRecent";
import RecInterviewRecent from "./RecInterviewRecent";
import classNames from "classnames";
import { toast } from "react-toastify";
import user from "../../../images/uses.png";
import thumbnailCover from "../../../images/cover2.jpg";

export default function InterviewerDetail() {
  const { interviewerId } = useParams();
  const [interviewer, setInterviewer] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getInterviewerDetail = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(
          `recruiter/interviewers/${interviewerId}`,
        );
        setInterviewer(response.data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getInterviewerDetail();
  }, [interviewerId]);
  // console.log(interviewer?.skills[0].name)
  const [InterviewerInformation, setInterviewerInformation] = useState([
    { icon: <MdOutlineEmail />, name: "", value: "" },
    { icon: <MdOutlineCalendarMonth />, name: "", value: "" },
    { icon: <MdOutlineLocationOn />, name: "", value: "" },
    { icon: <HiOutlineDeviceMobile />, name: "", value: "" },
  ]);

  useEffect(() => {
    if (interviewer) {
      setInterviewerInformation([
        { icon: <MdOutlineEmail />, name: "Email", value: interviewer?.email },
        {
          icon: <MdOutlineCalendarMonth />,
          name: "D.O.B",
          value: moment(interviewer?.dateOfBirth).format("Do MMM, YYYY"),
        },
        {
          icon: <MdOutlineLocationOn />,
          name: "Address",
          value: interviewer?.address,
        },
        {
          icon: <HiOutlineDeviceMobile />,
          name: "Phone",
          value: formatPhoneNumber(interviewer?.phone),
        },
      ]);
    }
  }, [interviewer]);

  function formatPhoneNumber(phoneNumber: string) {
    // Remove any non-digit characters from the phone number using regex
    if (phoneNumber == null) {
      return;
    }
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

    // Check if the cleaned phone number has 10 digits (i.e., "0373412489")
    if (cleanedPhoneNumber.length === 10) {
      // Format the phone number as "0373-412-489"
      return cleanedPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }

    // If the phone number doesn't have 10 digits, return the original value
    return phoneNumber;
  }
  // console.log(interviewer)
  const handleLink = (url: string) => {
    url ? window.open(url) : toast.error("Not Available ");
  };
  console.log(interviewer?.avatar);
  return (
    <div>
      {interviewer ? (
        <>
          <section className="relative">
            <div className="w-full shrink-0">
              <img
                src={thumbnailCover}
                className="object-cover w-full h-64 shadow lg:rounded-b-md "
              />
            </div>
            <div className="-mt-12 md:flex ms-4">
              <div className="md:w-full">
                <div className="relative flex items-end ">
                  <img
                    src={interviewer?.avatar || user}
                    className="bg-white rounded-full h-28 w-28 ring-4 ring-slate-50"
                  />
                  <div className="ms-4">
                    <p className="text-lg font-semibold">
                      {interviewer?.fullName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative pb-10 mt-12 md:pb-15">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-8 md:col-span-7">
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Description</h1>
                    <p>{interviewer?.about}</p>
                  </div>
                </div>
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                    `mt-5`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Skill</h1>
                    <p>
                      <div>
                        {JSON.parse(interviewer.information)?.skills?.map(
                          (skill: any, index: any) => (
                            <p
                              key={index}
                              className="inline-flex gap-2 px-4 py-2 ml-2 text-white rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600"
                            >
                              {skill.label}
                            </p>
                          ),
                        )}
                      </div>
                    </p>
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
                  <div className="flex flex-wrap gap-4">
                    {JSON.parse(interviewer.information)?.education?.map(
                      (edu: any, index: any) => (
                        <>
                          <div
                            key={index}
                            className="px-2 py-2 mt-3 text-lg border rounded-lg shadow text-zinc-600 w-fit bg-emerald-50"
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
                  <div className="flex flex-wrap gap-4">
                    {JSON.parse(interviewer.information)?.project?.map(
                      (edu: any, index: any) => (
                        <div>
                          <div
                            key={index}
                            className="px-2 py-2 mt-3 text-lg border rounded-t-lg shadow text-zinc-600 w-fit bg-emerald-50"
                          >
                            <p>Project: {edu.name}</p>
                            <p>Description: {edu.description}</p>
                            {/* <p>Link: {edu.url}</p> */}
                          </div>
                          <button
                            className="w-full p-1 text-center text-white border rounded-b-lg shadow bg-emerald-500 hover:bg-emerald-700 border-emerald-600"
                            onClick={() => handleLink(edu.url)}
                          >
                            View Project
                          </button>
                        </div>
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
                  <div className="flex flex-wrap gap-4">
                    {JSON.parse(interviewer.information)?.experience?.map(
                      (edu: any, index: any) => (
                        <>
                          <div
                            key={index}
                            className="px-2 py-2 mt-3 text-lg border rounded-lg shadow text-zinc-600 w-fit bg-emerald-50"
                          >
                            <p>Company Name: {edu.companyName}</p>
                            <p>Position: {edu.position}</p>
                            <p>From: {edu.dateFrom + " to " + edu.dateTo}</p>
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
                  <div className="text-2xl font-semibold">Certificate</div>
                  <div className="flex flex-wrap gap-4">
                    {JSON.parse(interviewer.information)?.certificate?.map(
                      (edu: any, index: any) => (
                        <div>
                          <div
                            key={index}
                            className="px-2 py-2 mt-3 text-lg border rounded-t-lg shadow text-zinc-600 w-fit bg-emerald-50"
                          >
                            <p>Title: {edu.name}</p>
                            <p>Id: {edu.id}</p>
                            <p>Received Date: {edu.receivedDate}</p>
                            {/* <p>Link: {edu.url}</p> */}
                          </div>
                          <button
                            className="w-full p-1 text-center text-white border rounded-b-lg shadow bg-emerald-500 hover:bg-emerald-700 border-emerald-600"
                            onClick={() => handleLink(edu.url)}
                          >
                            View Project
                          </button>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="sticky lg:col-span-4 md:col-span-5 top-20 ">
                <RecInterviewerIn4Card cardData={InterviewerInformation} />
              </div>
            </div>
          </section>
          <div>
            <RecInterviewRecent />
          </div>
        </>
      ) : (
        <div className="grid items-center justify-center pt-5 min-h-[70vh]">
          <LoadSpinner className="text-4xl " />
        </div>
      )}
    </div>
  );
}
