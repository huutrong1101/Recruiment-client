
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
            <div className="bg-white rounded-lg shadow-lg w-[40%]">
            <label htmlFor="avatar">
                  {avatar && (
                        <div>
                          <img src={avatar} alt="blog_image" />
                        </div>
                      )}
                    <input
                        type="file"
                        id="avatar"
                        accept="image/*"
                        className={classnames("w-[50%] ig object-cover ig-center")}
                        onChange={handleImageUpload}
                    />
                  </label>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-[60%] h-fit sticky">
                <div className = "flex items-center text-center space-x-2 font-semibold text-green-500">
                    <span className = "tracking-wide text-center  text-emerald-600 text-[28px]">Information</span>
                </div>
                <div className = "text-gray-700">
                    <div className = "grid md:grid-cols-1 text-sm">
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide"> FullName</div>
                            <div className = "px-4 py-2">{item.name}</div>
                        </div>
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide">Contact No.</div>
                            <div className = "px-4 py-2">{item.phone}</div>
                        </div>
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide">Current Address</div>
                            <div className = "px-4 py-2">{item.adress}</div>
                        </div>
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-green-500 capitalize leading-7 tracking-wide">Email.</div>
                            <div className = "px-4 py-2">      {item.email}       </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )))
}
