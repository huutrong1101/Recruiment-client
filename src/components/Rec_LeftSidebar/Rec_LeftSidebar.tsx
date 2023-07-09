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
                link: 'recruiter/dashboard',
            },
            {
                name: 'Calender',
                icon: <HiOutlineCalendarDays/>,
                link: 'recruiter/calender',
            },
            {
                name: 'Interviewer',
                icon: <MdOutlineManageAccounts/>,
                link: 'recruiter/interviewer',
            },
            {
                name: 'Candidate',
                icon: <HiOutlineUser/>,
                link: 'recruiter/candidate',
            },
            {
                name: 'Job',
                icon: <HiOutlineFolder/>,
                link: 'recruiter/job-management',
            },
            {
                name: 'Event',
                icon: <MdOutlineEventAvailable/>,
                link: 'recruiter/event',
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
      <div className=' bg-white border border-black border-opacity-10 h- md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
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
                    to={`/${link.link}`}
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


      {/* <div className="Sidebar w-[212px] h-[1024px] relative bg-white border border-black border-opacity-10">
        <div className="AvatarName w-[172px] h-8 pl-1 pr-2 py-1 left-[20px] top-[20px] absolute rounded-lg justify-start items-center gap-2 inline-flex">
          <img className="Byewind w-6 h-6 relative rounded-[64px]" src="https://via.placeholder.com/24x24" />
          <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">ByeWind</div>
        </div>
        <div className="Nav h-[644px] left-[16px] top-[68px] absolute flex-col justify-start items-start gap-7 inline-flex">
          <div className="Favorites w-[180px] h-[92px] relative">
            <div className="Tab left-[4px] top-0 absolute justify-start items-start gap-1 inline-flex">
              <div className="Tab1 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
                <div className="Tab text-black text-opacity-40 text-[14px] font-normal leading-tight">Favorites</div>
              </div>
              <div className="Tab2 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
                <div className="Tab text-black text-opacity-20 text-[14px] font-normal leading-tight">Recently</div>
              </div>
            </div>
            <div className="Container h-[60px] left-0 top-[32px] absolute flex-col justify-start items-start gap-1 inline-flex">
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[85px] py-1 rounded-lg justify-start items-center gap-2 inline-flex">
                <div className="Dot2S w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Overview</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[94px] py-1 rounded-lg justify-start items-center gap-2 inline-flex">
                <div className="Dot2S w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Projects</div>
              </div>
            </div>
          </div>
          <div className="Dashboards self-stretch h-[152px] flex-col justify-start items-start gap-2 flex">
            <div className="Title self-stretch px-3 justify-start items-start inline-flex">
              <div className="Dashboards text-black text-opacity-40 text-[14px] font-normal leading-tight">Dashboards</div>
            </div>
            <div className="Container self-stretch h-[124px] flex-col justify-start items-start gap-1 flex">
              <div className="SidebarItem w-[180px] h-7 relative bg-black bg-opacity-5 rounded-lg">
                <div className="Rectangle1 w-1 h-4 left-0 top-[6px] absolute bg-zinc-900 rounded-sm" />
                <div className="ChartpiesliceD w-5 h-5 left-[28px] top-[4px] absolute">
                  <img className="Vector w-[6.25px] h-[9.70px] left-[1.87px] top-[2.30px] absolute" src="https://via.placeholder.com/6x10" />
                </div>
                <div className="Text left-[52px] top-[4px] absolute text-zinc-900 text-[14px] font-normal leading-tight">Default</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[47px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="ShoppingbagopenD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[16.25px] h-[13.75px]" src="https://via.placeholder.com/16x14" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">eCommerce</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[74px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="FoldernotchD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[8.75px] h-[5px]" src="https://via.placeholder.com/9x5" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Projects</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[27px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="BookopenD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[9.38px] h-[15px]" src="https://via.placeholder.com/9x15" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Online Courses</div>
              </div>
            </div>
          </div>
          <div className="Pages self-stretch h-[344px] flex-col justify-start items-start gap-2 flex">
            <div className="Title self-stretch px-3 justify-start items-start inline-flex">
              <div className="Pages text-black text-opacity-40 text-[14px] font-normal leading-tight">Pages</div>
            </div>
            <div className="Container self-stretch h-[316px] flex-col justify-start items-start gap-1 flex">
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[50px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinedownS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="IdentificationbadgeD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[16.25px] h-[13.75px] origin-top-left rotate-90" src="https://via.placeholder.com/16x14" />
                  <img className="Vector w-[12.50px] h-[15px]" src="https://via.placeholder.com/12x15" />
                  <img className="Vector w-[6.25px] h-[6.25px]" src="https://via.placeholder.com/6x6" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">User Profile</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-[52px] pr-[65px] py-1 rounded-lg justify-start items-center inline-flex">
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Overview</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-[52px] pr-[74px] py-1 rounded-lg justify-start items-center inline-flex">
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Projects</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 px-[52px] py-1 rounded-lg justify-center items-center inline-flex">
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Campaigns</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 px-[52px] py-1 rounded-lg justify-center items-center inline-flex">
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Documents</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-[52px] pr-[65px] py-1 rounded-lg justify-start items-center inline-flex">
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Followers</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[73px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="IdentificationcardD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[16.25px] h-[13.75px]" src="https://via.placeholder.com/16x14" />
                  <img className="Vector w-[15px] h-[12.50px]" src="https://via.placeholder.com/15x12" />
                  <img className="Vector w-[5px] h-[5px]" src="https://via.placeholder.com/5x5" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Account</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[60px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="UsersthreeD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[7.50px] h-[7.50px]" src="https://via.placeholder.com/7x7" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Corporate</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[98px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="NotebookD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[15px] h-[15px]" src="https://via.placeholder.com/15x15" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Blog</div>
              </div>
              <div className="SidebarItem w-[180px] h-7 pl-2 pr-[87px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="ChatsteardropD w-5 h-5 relative flex-col justify-start items-start flex">
                  <img className="Vector w-[12.50px] h-[12.50px]" src="https://via.placeholder.com/12x12" />
                </div>
                <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">Social</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Logo w-[211px] h-[76px] px-[73px] left-0 top-[948px] absolute bg-gradient-to-b from-white to-white justify-center items-center inline-flex">
          <div className="Logo grow shrink basis-0 self-stretch justify-center items-center inline-flex">
            <div className="SnowuiLogo w-[65px] h-5 justify-center items-center gap-[5.98px] inline-flex">
              <div className="SnowuiIcon w-[19.43px] h-5 relative flex-col justify-start items-start flex" />
              <div className="SnowuiLogo w-[39.60px] h-[9.23px] relative flex-col justify-start items-start flex" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

