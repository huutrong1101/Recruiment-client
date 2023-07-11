import React from "react";

export default function DashboardFooter() {
  return (
    <>
       <footer className="Footer w-full h-[72px] px-6 bg-white justify-between items-center inline-flex bottom-0 absolute">
        <div className="Copyright justify-start items-start inline-flex">
          <div className="2023Snow text-black text-opacity-40 text-[12px] font-normal leading-none">
            © 2023 Group2
          </div>
        </div>
        <div className="Tab justify-end items-start gap-1 inline-flex">
          <div className="Tab1 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
            <div className="Tab text-black text-opacity-40 text-[12px] font-normal leading-none">
              About
            </div>
          </div>
          <div className="Tab2 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
            <div className="Tab text-black text-opacity-40 text-[12px] font-normal leading-none">
              Support
            </div>
          </div>
          <div className="Tab3 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
            <div className="Tab text-black text-opacity-40 text-[12px] font-normal leading-none">
              Contact Us
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
