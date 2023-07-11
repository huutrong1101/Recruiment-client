import React from 'react'

export default function NoteDelete() {
  return (
  <div className = "w-[596px] h-[399px] pl-[117px] pr-[132px] py-[124px] bg-white justify-start items-center inline-flex">
    <div className = "w-[347px] h-[151px] relative">
      <div className = "w-[52px] h-[51px] left-[16px] top-[33px] absolute">
        <div className = "w-[52px] h-[51px] left-0 top-0 absolute bg-neutral-200 rounded-full"></div>
        <div className = "w-[35.09px] h-[39.80px] left-[8.46px] top-[5.80px] absolute"></div>
      </div>
      <div className = "w-[245px] h-[17px] left-[85px] top-[35px] absolute text-black text-[14px] font-medium leading-10">Are you sure you want to delete ?</div>
      <div className = "w-[245px] h-4 left-[85px] top-[53px] absolute text-zinc-600 text-[10px] font-medium leading-10">Your information still can be recover.</div>
      <div className = "w-3.5 h-[13.39px] left-[316px] top-[10px] absolute">
        <div className = "w-3.5 h-[13.39px] left-0 top-0 absolute bg-gray-200 rounded-[100px]"></div>
        <div className = "w-[12.17px] h-[12.17px] left-[1.12px] top-[0.56px] absolute"></div>
      </div>
      {/* // Button */}
      <button className = "w-[62px] h-[37px] left-[268px] top-[98px] absolute bg-red-600 bg-opacity-95 rounded-lg flex-col justify-center items-center inline-flex">
          <div className = "w-[58px] text-center text-white text-[12px] font-semibold capitalize leading-7 tracking-wide">Delete</div>
      </button>

      <button className = "w-[63px] h-[38px] left-[190px] top-[97px] absolute bg-emerald-600 rounded-lg flex-col justify-center items-center inline-flex">
        <div className = "h-[41px] pl-5 pr-[18px] py-2.5 bg-emerald-600 justify-center items-center inline-flex">
          <div className = "justify-center items-center gap-2 flex">
            <div className = "text-white text-[12px] font-semibold capitalize leading-7 tracking-wide">Cancel</div>
          </div>
        </div>
      </button>
    </div>
  </div>
  )
}
