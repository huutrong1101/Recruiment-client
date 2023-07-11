import React from 'react'

export default function NoteSuccessful() {
  return (
    <div className="w-[596px] h-[399px] relative bg-white">
    <div className="w-[63px] h-[38px] left-[384px] top-[172px] absolute bg-emerald-600 rounded-lg flex-col justify-center items-center inline-flex">
    <div className="h-[41px] pl-5 pr-[18px] py-2.5 bg-emerald-600 justify-center items-center inline-flex">
        <div className="justify-center items-center gap-2 flex">
        <div className="text-white text-[12px] font-semibold capitalize leading-7 tracking-wide">Done</div>
        </div>
    </div>
    </div>
    <div className="w-[255px] h-4 left-[194px] top-[112px] absolute text-black text-[14px] font-medium leading-10">Successfully delete the item.</div>
    <div className="w-[52px] h-[51px] left-[123px] top-[106px] absolute justify-center items-center inline-flex">
    <div className="w-[52px] h-[51px] relative">
        <div className="w-[52px] h-[51px] left-0 top-0 absolute bg-neutral-200 rounded-full" />
        <div className="w-6 h-6 left-[14px] top-[14px] absolute" />
    </div>
    </div>
    </div>
  )
}
