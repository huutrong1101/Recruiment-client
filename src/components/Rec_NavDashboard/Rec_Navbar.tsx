import React from 'react'
import { Outlet } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom'

import { PiSidebar, PiStarLight } from "react-icons/pi";

const Rec_Navbar = () => {
  return (
    <>
    <div className='ml-[0.5%]'>
      <button className="group relative h-12 w-[5%] overflow-hidden rounded-lg bg-white text-lg ">
        <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative left-[30%] text-black "><PiSidebar /></span>
      </button>

      <button className="group relative ml-2 h-12 w-[5%] overflow-hidden rounded-lg bg-white text-lg">
        <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative left-[30%] text-black "><PiStarLight /></span>
      </button>
      <button className="group relative h-12 w-28 overflow-hidden rounded-lg bg-white text-lg">
        <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black ">Dashboard</span>
      </button>
      <span>/</span>
      <button className="group relative h-12 w-20 overflow-hidden rounded-lg bg-white text-lg">
        <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black ">Default</span>
      </button >
      </div>

      {/* <nav className="flex-1">
    //   <nav className="HeaderA w-full h-[72px] px-7 py-[22px] bg-white border border-black border-opacity-10 justify-center items-start gap-[616px] inline-flex">
    //     <div className="IconBreadcrumb justify-start items-center gap-2 inline-flex">
    //       <div className="Button w-7 h-7 p-1 rounded-lg justify-center items-center gap-1 flex">
    //         <div className="SidebarD w-5 h-5 relative">
    //           <img className="Vector w-[16.25px] h-[13.75px] left-[1.88px] top-[3.12px] absolute" src="https://via.placeholder.com/16x14" />
    //         </div>
    //       </div>
    //       <div className="Button w-7 h-7 p-1 rounded-lg justify-center items-center gap-1 flex">
    //         <div className="StarD w-5 h-5 relative">
    //           <img className="Vector w-[17.49px] h-[16.88px] left-[1.25px] top-[1.25px] absolute" src="https://via.placeholder.com/17x17" />
    //         </div>
    //       </div>
    //       <div className="Breadcrumb w-44 justify-start items-center gap-1 flex">
    //         <div className="Button w-[98px] px-2 py-1 rounded-lg justify-center items-center gap-1 flex">
    //           <div className="Text text-center text-black text-opacity-40 text-[14px] font-normal leading-tight">Dashboards</div>
    //         </div>
    //         <div className=" text-black text-opacity-20 text-[14px] font-normal leading-tight">/</div>
    //         <div className="Button w-[65px] px-2 py-1 rounded-lg justify-center items-center gap-1 flex">
    //           <div className="Text text-center text-zinc-900 text-[14px] font-normal leading-tight">Default</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="IconButton justify-end items-center gap-2 inline-flex">
    //       <div className="Button w-7 h-7 p-1 rounded-lg justify-center items-center gap-1 flex">
    //         <div className="RightbarS w-5 h-5 relative">

    //           <img className="Vector w-[16.25px] h-[13.75px] left-[1.88px] top-[3.12px] absolute" src="https://via.placeholder.com/16x14" />
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    //   <Outlet />
</nav> */}


    </>

  )
}

export default Rec_Navbar

