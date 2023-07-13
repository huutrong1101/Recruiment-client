import React, {useState}from 'react'
import classnames from "classnames";

export default function AdminChangePosition() {
    const [Info] = useState([{
        avatar:"../../../images/blog_image.png",
        name: "Nguyen Van A",
        email: "ngan@example.com",
        phone: "012367xxx",
        address: "123 Main St Ba Ria Vung Tau St",
        positon: "Recruiter",
    }]);
    return (
        Info.map((item) => (
            <>
                {/* Information */}
                <div className="flex gap-5">
                    <div className="bg-white rounded-lg shadow-lg w-[50%] top-4 ">
                        <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[13px] pb-[11px]">
                                {/* Title */}
                                <div className = "flex items-center text-center space-x-2 font-semibold text-green-500">
                                    <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Information</span>
                                </div>
                                {/* Name */}
                                <div className = "grid grid-cols-1">
                                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide "> FullName</div>
                                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.name}</div>
                                </div>
                                {/* Phone */}
                                <div className = "grid grid-cols-1">
                                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.phone}</div>
                                </div>
                                {/* Address */}
                                <div className = "grid grid-cols-1">
                                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.address}</div>
                                </div>
                                {/* Email */}
                                <div className = "grid grid-cols-1">
                                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.email} </div>
                                </div>
                            </div>
                        </div>

                        {/* Change Positon */}
                        <div className="bg-white rounded-lg shadow-lg w-[50%] h-fit sticky">
                            {/* Avatar */}
                            <div className=''>
                                <div className='flex justify-center'> <img src={item.avatar} className='w-[150px] h-[150px] justify-center rounded-full' alt="blog_image" /></div>
                            </div>
                            {/* Title */}
                            <div className = "mt-10 px-5 py-4 flex items-center text-center space-x-2 font-semibold text-green-500">
                                    <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Position</span>
                            </div>
                            {/* Set Positon */}
                            <div className = "grid grid-cols-1 ">
                                <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.email} </div>
                            </div>
                            <div className={classnames("mt-10 text-center px-5 py-4")}>
                                <button type="submit" className="px-6 py-3 text-white rounded-full bg-emerald-600 hover:bg-emerald-800">
                                    Save
                                </button>
                            </div>
                        </div>
                </div>
            </>
        ))
    );
}
