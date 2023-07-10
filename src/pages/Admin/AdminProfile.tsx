
import React, {useState}from 'react'

export default function AdminProfile() {
  const [ChangInfoAdmin, AdminProfileState] = useState(false);
  const [AdminProfile] = useState([
    {
      name: "Nguyen Van Admin",
      email: "nguyenvanadmin@gmail.com",
      phone: "123",
      adress: "admin o mo toi hk bt",
      avatarUrl: "#",
    }
  ]);
  return (
    // <div className=" bg-white rounded-[30px] border border border border border-black">
    //   <div className="absolute">

    //     <div className = "absolute">
    //     <div className = "w-[107.49px] h-[37.57px] pl-5 pr-[18px] py-2.5 left-[393.51px] top-[379.33px] absolute bg-emerald-600 rounded-lg justify-center items-center inline-flex">
    //       <div className = "h-7 justify-center items-center gap-2 flex">
    //         <div className = "text-white text-[18px] font-semibold capitalize leading-7 tracking-wide">Save</div>
    //       </div>
    //     </div>
    //     <div className = "w-[497px] h-[26px] left-[1px] top-0 absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Full name</div>
    //     <div className = "w-[495px] h-[25px] left-[3px] top-[90px] absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Email</div>
    //     <div className = "w-[500px] h-[25px] left-[1px] top-[179px] absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Address</div>
    //     <div className = "w-[499.63px] h-[53.75px] left-[1.37px] top-[294.10px] absolute flex-col justify-start items-start inline-flex">
    //       <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
    //         <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
    //           <div className = "self-stretch justify-start items-end gap-2 inline-flex">
    //             <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
    //               <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
    //                 <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">0773696410</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className = "w-[497.62px] h-[53.15px] left-[0.54px] top-[114.47px] absolute flex-col justify-start items-start inline-flex">
    //       <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
    //         <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
    //           <div className = "self-stretch justify-start items-end gap-2 inline-flex">
    //             <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
    //               <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
    //                 <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">huutrong1101@gmail.com</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className = "w-[497.62px] h-[53.15px] left-[0.54px] top-[24.66px] absolute flex-col justify-start items-start inline-flex">
    //       <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
    //         <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
    //           <div className = "self-stretch justify-start items-end gap-2 inline-flex">
    //             <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
    //               <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
    //                 <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">huutrong1101@gmail.com</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className = "w-[500.13px] h-[54.07px] left-[0.54px] top-[204.28px] absolute flex-col justify-start items-start inline-flex">
    //       <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
    //         <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
    //           <div className = "self-stretch justify-start items-end gap-2 inline-flex">
    //             <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
    //               <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
    //                 <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">Bà Rịa Vũng Tàu</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className = "w-[501px] h-[26px] left-0 top-[270px] absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Phone Number</div>
    //     </div>
    //     <div className = "w-[183px] h-[26px] left-0 top-0 absolute text-emerald-600 text-[32px] font-bold leading-7">Information</div>
    //     <div className = "w-[164.04px] h-[258.02px] left-[9.16px] top-[87.49px] absolute">
    //     <img alt ="" className = "w-[164.04px] h-[154.90px] left-0 top-0 absolute rounded-[64px]" src="https://via.placeholder.com/164x155" />
    //     <div className = "w-[106.31px] h-[37.57px] pl-5 pr-[18px] py-2.5 left-[29.33px] top-[220.44px] absolute bg-emerald-600 rounded-lg justify-center items-center inline-flex">
    //       <div className = "h-7 justify-center items-center gap-2 flex">
    //         <div className = "text-white text-[18px] font-semibold capitalize leading-7 tracking-wide">Change</div>
    //       </div>
    //     </div>
    //     </div>
    //   </div>
    // </div>
    <div className = "">
        <div className = "bg-white p-3 shadow-sm rounded-sm">
        {/* <div className = "grid grid-cols-3">
            <div className = "text-center my-2">
                <img className = "h-16 w-16 rounded-full mx-auto"
                    src="#"
                    alt="">
                    <a href="#" className = "text-main-color"></a>
                </img>
            </div>
        </div> */}
            <div className = "flex items-center space-x-2 font-semibold text-green-500 leading-8">
                <span className = "tracking-wide absolute text-emerald-600 text-[32px] font-bold leading-7">Information</span>
            </div>
            <div className = "text-gray-700">
                <div className = "grid md:grid-cols-1 text-sm">
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide"> FullName</div>
                        <div className = "px-4 py-2">Jane</div>
                    </div>
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide">Contact No.</div>
                        <div className = "px-4 py-2">+11 998001001</div>
                    </div>
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide">Current Address</div>
                        <div className = "px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>
                    <div className = "grid grid-cols-1">
                        <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide">Email.</div>
                        <div className = "px-4 py-2">
                            <a className = "" href="mailto:jane@example.com">jane@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
