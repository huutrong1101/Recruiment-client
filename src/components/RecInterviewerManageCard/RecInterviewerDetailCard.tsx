import { avatar } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { GrDocumentText } from "react-icons/gr";
import blog_image from "../../../images/blog_image.png";
import { RecInterviewerInterface } from '../../services/services';
import axiosInstance from '../../utils/AxiosInstance';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import { AcademicCapIcon, BriefcaseIcon, ClockIcon, ComputerDesktopIcon, CurrencyDollarIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline';
import moment from 'moment';

// interface MyComponentProps {
//   userinfor: {
//     name: string,
//     title: string,
//     avatarUrl: string,
//     coverImageUrl: string,
//     decriptionOne: string,
//     decriptionTwo: string,
//   }[],
//   listSkills: {
//     skills: string[],
//   }[]
//   personalDetails: {
//     label: string,
//     value: string,
//   }[],
// }

// const skills = ['Python', 'React', 'Java']
// const personalDetails = [
//   {
//     label: "Email",
//     value: "vargas@mail.com",
//   },
//   {
//     label: "D.O.B", 
//     value: "1st Jan, 2000"
//   },

//   {
//     label: "Address",
//     value: "Some where"
//   },
//   {
//     label: "City",
//     value: "Ho Chi Minh"
//   },
//   {
//     label: "Country",
//     value: "Viet Nam"
//   },
//   {
//     label: "Postal Code",
//     value: "111111"
//   },
//   {
//     label: "Mobile",
//     value: "123-456-7890"
//   },
// ]

export default function RecInterviewerDetailCard() {
  const { interviewerId } = useParams();
  const [interviewer, setInterviewer] = useState<RecInterviewerInterface | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getInterviewerDetail = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(`recruiter/interviewers/${interviewerId}`);
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
  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "" },
    { icon: <MapPinIcon />, name: "Location", value: "" },
    {
      icon: <ComputerDesktopIcon />,
      name: "Job Type",
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
      name: "Posted at",
      value:"",
    },
  ]);
  useEffect(() => {
    if (interviewer) {
      setJobInformation([
        { icon: <UserIcon />, name: "Employee Type", value: interviewer?.email },
        { icon: <MapPinIcon />, name: "Location", value: interviewer?.dateOfBirth },
        {
          icon: <ComputerDesktopIcon />,
          name: "Job Type",
          value: interviewer.email,
        },
        {
          icon: <CurrencyDollarIcon />,
          name: "Salary",
          value: interviewer.email,
        },
        {
          icon: <ClockIcon />,
          name: "Posted at",
          value: interviewer.email,
        },
      ]);
    }
  }, [interviewer]);
  // console.log(intervi)
  return (
    <>
      <section className='relative'>
        <div className=''>
          <div className='relative shrink-0 w-full'>
            <img src="../../../images/cover.jpg" className='h-64 w-full object-cover lg:rounded-xl shadow ' />
          </div>
          <div className='md:flex ms-4 -mt-12'>
            <div className='md:w-full'>
              <div className='relative flex items-end'>
                <img src={interviewer?.avatar || blog_image} className='h-28 w-28 rounded-full ring-4 ring-slate-50 ' />
                <div className='ms-4'>
                  <p className='text-lg font-semibold'>{interviewer?.fullName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative mt-12 md:pb-24 pb-16'>
        <div className=''>
          <div className=''>
            <div className='grid md:grid-cols-12 grid-cols-1 gap-[30px]'>
              <div className='lg:col-span-8 md:col-span-7'>
                <p className='text-xl font-semibold'>Description:</p>
                <p className='text-slate-400 mt-3'>{interviewer?.about}</p>
                <p className='mt-6 text-xl font-semibold'>Skill:</p>
                <div className='grid lg:grid-cols-1 grid-cols-1 mt-4 gap-6'>
                  {isLoading ? (
                    <div className="flex justify-center">
                      <LoadSpinner />
                    </div>
                  ) : (
                    <div className='pt-1'>
                      {
                        interviewer?.skills?.map(({ skill, index }: any) => (
                          <p
                            key={index}
                            className="px-4 py-2 gap-2 ml-2 mt-2 inline-flex bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                          >
                            <div className="flex flex-wrap justify-center items-center mt-[20px] ">
                              {console.log("check")}
                              {console.log(skill)}
                            </div>
                          </p>
                        ))}
                    </div>
                  )}
                </div>
                <div className='mt-6 text-xl font-semibold'>Experience :</div>
                <p className='text-slate-400 mt-3'></p>
              </div>
              <div className='lg:col-span-4 md:col-span-5'>
                <div className='bg-gray-200 rounded-md shadow p-6 sticky top-20'>
                  <p className='class="text-lg font-semibold"'>Personal Detail:</p>
                  {/* {
                    personalDetails.map((items) => (
                      <ul className='list-none mt-4'>
                        <li className='flex justify-between mt-3 items-center font-medium'>
                          <span>
                            <span className='text-slate-400 me-3'>{items.label}</span>
                          </span>
                          <span className=''>{items.value}</span>
                        </li>
                      </ul>
                    ))
                  } */}
                  <div className='mt-3 flex w-full bg-white p-3 items-center justify-center rounded-md shadow '>
                    <GrDocumentText />
                    {/* <span className='font-medium ms-2'>{interviewer.name}.pdf</span> */}
                    <a href='' className="px-4 py-2 gap-2 ml-4 mt-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md">Download</a>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
