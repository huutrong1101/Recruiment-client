
import React, {useState}from 'react'
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
export default function AdminProfile() {
  const [ChangInfoAdmin, AdminProfileState] = useState(false);
  const [avatar, setAvatar] = useState(blog_image);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };
  const [AdminProfile] = useState([
    {
      name: "Nguyen Van Admin",
      email: "nguyenvanadmin@gmail.com",
      phone: "123",
      adress: "admin o mo toi khong biet",
      avatarUrl: "../../../images/blog_image.png",
    }
  ]);
  return (
    AdminProfile.map((item) => (
        <div className="flex gap-5">
            <div className="bg-white rounded-lg shadow-lg w-[50%] top-4 ">
            <label htmlFor="avatar">
                  {avatar && (
                        <div>
                            <div className='flex justify-center'> <img src={item.avatarUrl} className='w-[150px] h-[150px] justify-center rounded-full' alt="blog_image" /></div>
                        </div>
                      )}
                      <div className='flex justify-center'>
                        <input
                            type="file"
                            id="avatar"
                            accept="image/*"
                            className={classnames("ig object-cover ig-center")}
                            onChange={handleImageUpload}
                        />
                      </div>
                  </label>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-[50%] h-fit sticky">
                <div className = "flex items-center text-center space-x-2 font-semibold text-green-500">
                    <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Information</span>
                </div>
                <div className = "text-gray-700 ">
                    <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[13px] pb-[11px]">
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide "> FullName</div>
                            <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.name}</div>
                        </div>
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                            <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.phone}</div>
                        </div>
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                            <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.adress}</div>
                        </div>
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                            <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">      {item.email}       </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className={classnames("mt-10 text-center px-5 py-4")}>
                  <button type="submit" className="px-6 py-3 text-white rounded-full bg-emerald-600 hover:bg-emerald-800">
                      Save
                  </button>
                </div>
            </div>
              
        </div>
    )))
}
