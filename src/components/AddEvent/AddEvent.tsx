import React,{useState} from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import TextareaAutosize from "react-textarea-autosize";

export default function AddEvent() {
      const [avatar, setAvatar] = useState(blog_image);
      const [time, setTime] =     useState('');
      const [organizedBy, setOrganizedBy] = useState('');
      const [date, setDate] = useState('');
      const [eventName, setEventName] = useState('');
      const [eventContent, setEventContent] = useState('');

      const handleImageUpload = (event) => {
          const file = event.target.files[0];
          setAvatar(URL.createObjectURL(file));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        let object = { avatar,time,organizedBy, date, eventName,eventContent};
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
                          // id="description"
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
            {/* Author  */}
            <div  className={classnames( "bg-white rounded-lg shadow-lg w-[40%] h-fit sticky top-0" )} >
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
                <div className={classnames("flex items-center gap-1  justify-between px-10 mt-4")}>
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
              <br />
          </div>
      </form>
    </>
  );
}

