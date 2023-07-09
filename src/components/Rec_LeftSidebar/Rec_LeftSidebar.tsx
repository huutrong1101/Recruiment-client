import React from 'react'
import image from "../../../images/avatar.png"
import { Link, NavLink } from 'react-router-dom'


import { MdOutlineEventAvailable,MdOutlineManageAccounts } from "react-icons/md";
import {HiOutlineFolder, HiOutlineCalendarDays,HiOutlineUser,HiOutlineChartPie } from "react-icons/hi2"
export const links = [
    {
        title: 'Dash board',
        links: [
            {
                name: 'Default',
                icon: <HiOutlineChartPie/>,
                mylink: 'recruiter/dashboard',
            },
            {
                name: 'Calender',
                icon: <HiOutlineCalendarDays/>,
                mylink: 'recruiter/calender',
            },
            {
                name: 'Interviewer',
                icon: <MdOutlineManageAccounts/>,
                mylink: 'recruiter/interviewer',
            },
            {
                name: 'Candidate',
                icon: <HiOutlineUser/>,
                mylink: 'recruiter/candidate',
            },
            {
                name: 'Job',
                icon: <HiOutlineFolder/>,
                mylink: 'recruiter/job-management',
            },
            {
                name: 'Event',
                icon: <MdOutlineEventAvailable/>,
                mylink: 'recruiter/event',
            },

        ],
    },
];

export default function Rec_LeftSidebar() {
  const activeMenu = true;
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gray-200'
  const normalLink = ' flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 hover:bg-gray-200 m-2'
  return (
    <>
      <div className=' bg-white border border-black border-opacity-10 sticky top-0 h-full md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
        {activeMenu && (<>
          <div className='justify-between items-center gap-3 inline-flex ml-8 mt-6 '>
            <img className="Byewind w-11 h-11 relative rounded-[64px]" src={image} />
            <div className="Text text-zinc-900 text-x font-normal leading-tight">ByeWind</div>
          </div>
   
          <div className='ml-2'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 ml-7 mt-4 text-x'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.mylink}`}
                    key={link.name}
                    onClick={() => { }}
                    className={({ isActive }) =>
                    isActive ? activeLink : normalLink}
                  >
                    <span className='text-black ml-1 text-2xl'>{link.icon}</span>
                    <span className=' text-black flex'>
                    {link.name}
                    </span>
                  </NavLink>
                ))}


              </div>
            ))}
          </div>

        </>)}
      </div>


      
    </>
  )
}

