import React,{useState} from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import avataractor from "../../../images/ava.jpg";

import TextareaAutosize from "react-textarea-autosize";
import {  BiLogoFacebook,  BiLogoInstagram,  BiLogoLinkedin,  BiLogoGitlab,  BiLogoTwitter,} from "react-icons/bi";
export default function AddEvent() {
      const [avatar, setAvatar] = useState(blog_image);
      const [time, setTime] =     useState('');
      const [organizedBy, setOrganizedBy] = useState('');
      const [date, setDate] = useState('');
      const [eventName, setEventName] = useState('');
      const [eventContent, setEventContent] = useState('');
      const [nameActor, setnameActor] = useState('');
      const [avaActor, setavarActor] = useState(avataractor);
      const [linkFacebook, setFacebook] = useState('');
      const [linkInstagram, setInstagram] = useState('');
      const [linkLinkedin, setLinkedin] = useState('');
      const [linkGitlab, setGitlab] = useState('');
      const [linkTwitter, setTwitter] = useState('');
      const handleImageUpload = (event) => {
          const file = event.target.files[0];
          setAvatar(URL.createObjectURL(file));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        let object = { avatar,time,organizedBy, date, eventName,eventContent,
          nameActor,avaActor,linkFacebook,linkTwitter,linkGitlab,linkInstagram,linkLinkedin};
        console.log(object);
      }
  return (
    <>
        <form className={classnames("flex gap-10 ")} onSubmit={handleSubmit}>
          <div className={classnames("bg-white shadow rounded-lg w-[75%] ")}>
              {/* Img */}
              <div className=" flex items-left px-10 mt-10">
                  <label htmlFor="avatar">
                  {avatar && (
                        <div>
                          <label className="text-zinc-900 text-2xl font-normal leading-7 ">Image here</label>
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

                {/* Title and content */}
                <div className={classnames("flex items-left px-10 mt-10")}>
                    <label className="text-zinc-900 text-2xl font-normal leading-7 ">
                        Event Title:
                        <TextareaAutosize
                          minRows={1}
                          id="eventName"
                          value={eventName}
                          className="resize-none p-2.5 text-[13px] w-full text-justify bg-white border" placeholder="Event title input here"
                          onChange={(event) => setEventName(event.target.value)}
                        />
                    </label>
                </div>
                <div className={classnames("flex items-left px-10 mt-10")}>
                    <label className="text-zinc-900 text-2xl font-normal leading-7">
                        Description:
                        <TextareaAutosize
                          minRows={4}
                          id="contentWidth"
                          className="resize-none p-2.5 text-[13px] w-full text-justify bg-white border"
                          onChange={(event) => setEventContent(event.target.value)}
                          placeholder="Please enter your content in the box below to create a perfect event. We look forward to introducing it to everyone!"
                        />
                    </label>
                </div>
              <div className={classnames("mt-10 text-center px-5 py-4")}>
                <button type="submit" className="px-6 py-3 text-white rounded-full bg-emerald-600 hover:bg-emerald-800">
                    Creact
                </button>
              </div>
            </div>
            <div  className={classnames( "bg-white rounded-lg shadow-lg w-[40%] h-fit sticky top-0" )} >
              {/* Author  */}
              <div  className={classnames( "mp-5 flex items-center justify-center p-2 bg-gray-300 rounded-tl-lg rounded-tr-lg" )}  >
                    <h3  className={classnames(  "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize" )}  >  Author </h3>
                  </div>
                  <div  className={classnames( "flex flex-col gap-1 items-center justify-center my-4")}   >
                    <img
                      src={avaActor}
                      alt=""
                      className={classnames( "w-[175px] h-[175px] rounded-full bg-gray-500")}
                    />
                    <h3>Content Writer - journalist </h3>
                    <TextareaAutosize
                          minRows={1}
                          id="eventName"
                          value={nameActor}
                          className=" text-black text-xl font-medium capitalize leading-[31px] tracking-tight resize-none p-2.5 text-[13px] w-full text-justify bg-white border" placeholder="Cristina Romse"
                          onChange={(event) => setnameActor(event.target.value)}
                        />
                  </div>
                  <div className="flex items-center justify-center p-2 bg-gray-300">
                    <h3
                      className={classnames(
                        "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize"
                      )}
                    >
                      Contract
                    </h3>
                  </div>
                {/* Lien he */}
                {/* FB */}
                <div className={classnames("my-3")}>
                  <div className={classnames("flex items-center justify-center gap-3")} >
                        <div className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                          <BiLogoFacebook size={20} />
                        </div>
                        <div>
                          <input  type="text"
                          value={linkFacebook}
                          onChange={(event) => setFacebook(event.target.value)}
                          placeholder=""
                            />
                        </div>
                  </div>
                  {/* IN */}
                  <div className={classnames("flex items-center justify-center gap-3")} >  
                      <div className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                        <BiLogoInstagram size={20} />
                      </div>
                      <div>
                        <input  type="text"
                          value={linkInstagram}
                          onChange={(event) => setInstagram(event.target.value)}
                          placeholder=""/>
                      </div>
                  </div>
                  {/* LK */}
                  <div className={classnames("flex items-center justify-center gap-3")} >  
                    <div className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoLinkedin size={20} />
                    </div>
                    <div>
                      <input  type="text"
                        value={linkLinkedin}
                        onChange={(event) => setLinkedin(event.target.value)}
                        placeholder=""/>
                    </div>
                  </div>
                  {/* GitlLap */}
                  <div className={classnames("flex items-center justify-center gap-3")} >  
                    <div className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoGitlab size={20} />
                    </div>
                    <div>
                      <input  type="text"
                        value={linkGitlab}
                        onChange={(event) => setGitlab(event.target.value)}
                        placeholder=""/>
                    </div>
                  </div>
                  <div className={classnames("flex items-center justify-center gap-3")} >  
                    <div className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoTwitter size={20} />
                    </div>
                    <div>
                      <input  type="text"
                        value={linkTwitter}
                        onChange={(event) => setTwitter(event.target.value)}
                        placeholder=""/>
                    </div>
                  </div>
                </div>
                {/* Set Time  */}
                <div className={classnames("flex items-center gap-1 justify-between px-10 mt-4")}>
                    <label> By :
                        <input
                              type="text"
                              id="organizedBy"
                              placeholder="Google"
                              value={organizedBy}
                              className="text-emerald-600 text-sm font-medium leading-tight"
                              onChange={(event) => setOrganizedBy(event.target.value)}
                        />
                    </label>
                </div>
                <div className={classnames("flex items-center gap-1 justify-between px-10 mt-4")}>
                    <label className="">Date poted :
                      <input
                        type="date"
                        id="date"
                        className="text-emerald-600 text-sm font-medium leading-tight"
                        value={date}
                        placeholder="2025-02-14"
                        onChange={(event) => setDate(event.target.value)}
                      />
                    </label>
                </div>
                <div className={classnames("flex items-center gap-1  justify-between px-10 mt-4 mb-10")}>
                    <label className="">Time :
                    <input
                        type="time"
                        id="time"
                        className="text-emerald-600 text-sm font-medium leading-tight"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                      />
                    </label>
                </div>
          </div>
      </form>
    </>
  );
}

