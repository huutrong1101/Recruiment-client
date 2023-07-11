import React from "react";
// import image from "../../../images/avatar.png";
export default function LeftSidebar() {
  return (
    <>
      <aside className="w-[13.67%] bg-gray-200">
        <div className="Sidebar w-full h-full relative bg-white border border-black border-opacity-10">
          <div className="AvatarName w-[172px] h-8 pl-1 pr-2 py-1 left-[20px] top-[20px] absolute rounded-lg justify-start items-center gap-2 inline-flex">
            <div className="Avatar w-9 h-9 justify-center items-center gap-2.5 flex">
              <div className="Wbadge w-9 h-9 relative">
                <img
                  className="Avatar w-9 h-9 left-0 top-0 absolute rounded-[64px]"
                  // src={image}
                />
                <div className="Border w-[10.80px] h-[10.80px] p-[1.80px] left-[25.20px] top-[25.20px] absolute bg-white rounded-[64px] justify-center items-center inline-flex">
                  <div className="Badge w-[7.20px] h-[7.20px] relative flex-col justify-start items-start flex">
                    <div className="Badge w-[7.20px] h-[7.20px] bg-green-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">
              ByeWind
            </div>
          </div>
          <div className="Nav h-[264  px] left-[16px] top-[68px] absolute flex-col justify-start items-start gap-7 inline-flex">
            <div className="Dashboards self-stretch h-[216px] flex-col justify-start items-start gap-2 flex">
              <div className="Title self-stretch px-3 justify-start items-start inline-flex">
                <div className="Dashboards text-black text-opacity-40 text-[14px] font-normal leading-tight">
                  Dashboards
                </div>
              </div>
              <div className="Container self-stretch h-[188px] flex-col justify-start items-start gap-1 flex">
                <div className="SidebarItem w-[180px] h-7 relative bg-black bg-opacity-5 rounded-lg">
                  <div className="Rectangle1 w-1 h-4 left-0 top-[6px] absolute bg-zinc-900 rounded-sm" />
                  <div className="ChartpiesliceD w-5 h-5 left-[20px] top-[4px] absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </div>
                  <div className="Text left-[52px] top-[4px] absolute text-zinc-900 text-[14px] font-normal leading-tight">
                    Default
                  </div>
                </div>
                <div className="SidebarItem w-[180px] h-7 pl-2 pr-[67px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                  <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                  <div className="ShoppingbagopenD w-5 h-5 relative flex-col justify-start items-start flex">
                    <img
                      className="Vector w-[16.25px] h-[13.75px]"
                      src="https://via.placeholder.com/16x14"
                    />
                  </div>
                  <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">
                    Calender
                  </div>
                </div>
                <div className="SidebarItem w-[180px] h-7 pl-2 pr-[53px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                  <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                  <div className="FoldernotchD w-5 h-5 relative flex-col justify-start items-start flex">
                    <img
                      className="Vector w-[8.75px] h-[5px]"
                      src="https://via.placeholder.com/9x5"
                    />
                  </div>
                  <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">
                    Interviewer
                  </div>
                </div>
                <div className="SidebarItem w-[180px] h-7 pl-2 pr-[58px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                  <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                  <div className="BookopenD w-5 h-5 relative flex-col justify-start items-start flex">
                    <img
                      className="Vector w-[9.38px] h-[15px]"
                      src="https://via.placeholder.com/9x15"
                    />
                  </div>
                  <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">
                    Candidate
                  </div>
                </div>
                <div className="SidebarItem w-[180px] h-7 pl-2 pr-24 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                  <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                  <div className="BookopenD w-5 h-5 relative flex-col justify-start items-start flex">
                    <img
                      className="Vector w-[9.38px] h-[15px]"
                      src="https://via.placeholder.com/9x15"
                    />
                  </div>
                  <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">
                    Jobs
                  </div>
                </div>
                <div className="SidebarItem w-[180px] h-7 pl-2 pr-[90px] py-1 rounded-lg justify-start items-center gap-1 inline-flex">
                  <div className="ArrowlinerightS w-4 h-4 relative flex-col justify-start items-start flex" />
                  <div className="BookopenD w-5 h-5 relative flex-col justify-start items-start flex">
                    <img
                      className="Vector w-[9.38px] h-[15px]"
                      src="https://via.placeholder.com/9x15"
                    />
                  </div>
                  <div className="Text text-zinc-900 text-[14px] font-normal leading-tight">
                    Event
                  </div>
                </div>
              </div>
            </div>
            <div className="Pages self-stretch h-5" />
          </div>
          <div className="Logo w-[211px] h-[76px] px-[73px] left-0 top-[948px] absolute bg-gradient-to-b from-white to-white justify-center items-center inline-flex">
            <div className="Logo w-[65px] h-5 relative" />
          </div>
        </div>
      </aside>
    </>
  );
}
