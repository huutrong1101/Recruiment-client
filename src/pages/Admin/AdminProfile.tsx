// import React, { useState } from 'react';
// import avatar from '../../../images/uses.png'

// function AdminProfile() {
//     // const [buttonPopUp,setbuttonPopup]=useState(false)
//     // function ChangePassword(props) {
//     //     return (props.trigger)?(
//     //     <div className="ChangePassword d-flex justify-content-center align-items-center ">
//     //         <div className="container bg-white col-4 p-4 rounded position-relative">
//     //             <h4 className='mt-3'>Đổi mật khẩu</h4>
//     //             <label className="form-label mt-3">Mật khẩu hiện tại</label>
//     //             <input type="password" className="form-control "/>
//     //             <label className="form-label mt-3">Mật khẩu mới</label>
//     //             <input type="password" className="form-control "/>
//     //             <label className="form-label mt-3">Nhập lại mật khẩu mới</label>
//     //             <input type="password" className="form-control mb-4"/>
//     //             <button type="button" className="btn bg-success float-end px-3">Ok</button>
//     //             <button type="button" className="btn border-2 float-end p-1 me-2"
//     //                onClick={()=>setbuttonPopup(false)}>
//     //             Cancel</button>
//     //             <button type="button" className="btn-close p-2" aria-label="Close"
//     //                 onClick={()=>setbuttonPopup(false)}
//     //             ></button>
//     //         </div>
//     //     </div>
//     //     ):""
//     // }
// }
// export default  AdminProfile();
import React, {useState}from 'react'

export default function AdminProfile() {
  const [ChangInfoAdmin, AdminProfileState] = useState(false);
  const [AdminProfile] = useState([
    { 
      name: "Nguyen Van Admin",
      email: "nguyenvanadmin@gmail.com",
      phone: "123",
      avatarUrl: "./img/",
    }
  ]);
  return (
    <div className="w-[900px] h-[703px] left-[0px]  bg-white rounded-[30px] border border border border border-black">
      <div className="w-[900px] h-[703px] left-[309px] top-[156px] absolute">

        <div className = "w-[501px] h-[416.90px] left-[201px] top-[1px] absolute">
        <div className = "w-[107.49px] h-[37.57px] pl-5 pr-[18px] py-2.5 left-[393.51px] top-[379.33px] absolute bg-emerald-600 rounded-lg justify-center items-center inline-flex">
          <div className = "h-7 justify-center items-center gap-2 flex">
            <div className = "text-white text-[18px] font-semibold capitalize leading-7 tracking-wide">Save</div>
          </div>
        </div>
        <div className = "w-[497px] h-[26px] left-[1px] top-0 absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Full name</div>
        <div className = "w-[495px] h-[25px] left-[3px] top-[90px] absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Email</div>
        <div className = "w-[500px] h-[25px] left-[1px] top-[179px] absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Address</div>
        <div className = "w-[499.63px] h-[53.75px] left-[1.37px] top-[294.10px] absolute flex-col justify-start items-start inline-flex">
          <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
            <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className = "self-stretch justify-start items-end gap-2 inline-flex">
                <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
                  <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">0773696410</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "w-[497.62px] h-[53.15px] left-[0.54px] top-[114.47px] absolute flex-col justify-start items-start inline-flex">
          <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
            <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className = "self-stretch justify-start items-end gap-2 inline-flex">
                <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
                  <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">huutrong1101@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "w-[497.62px] h-[53.15px] left-[0.54px] top-[24.66px] absolute flex-col justify-start items-start inline-flex">
          <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
            <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className = "self-stretch justify-start items-end gap-2 inline-flex">
                <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
                  <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">huutrong1101@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "w-[500.13px] h-[54.07px] left-[0.54px] top-[204.28px] absolute flex-col justify-start items-start inline-flex">
          <div className = "self-stretch px-2 pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border border border border-zinc-900 border-opacity-50 justify-start items-center gap-2 inline-flex">
            <div className = "grow shrink basis-0 py-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className = "self-stretch justify-start items-end gap-2 inline-flex">
                <div className = "grow shrink basis-0 h-6 justify-start items-start gap-2 flex">
                  <div className = "grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className = "self-stretch text-zinc-900 text-opacity-70 text-[16px] font-normal leading-normal">Bà Rịa Vũng Tàu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "w-[501px] h-[26px] left-0 top-[270px] absolute text-black text-[16px] font-semibold capitalize leading-7 tracking-wide">Phone Number</div>
        </div>
        <div className = "w-[183px] h-[26px] left-0 top-0 absolute text-emerald-600 text-[32px] font-bold leading-7">Information</div>
        <div className = "w-[164.04px] h-[258.02px] left-[9.16px] top-[87.49px] absolute">
        <img alt ="" className = "w-[164.04px] h-[154.90px] left-0 top-0 absolute rounded-[64px]" src="https://via.placeholder.com/164x155" />
        <div className = "w-[106.31px] h-[37.57px] pl-5 pr-[18px] py-2.5 left-[29.33px] top-[220.44px] absolute bg-emerald-600 rounded-lg justify-center items-center inline-flex">
          <div className = "h-7 justify-center items-center gap-2 flex">
            <div className = "text-white text-[18px] font-semibold capitalize leading-7 tracking-wide">Change</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
