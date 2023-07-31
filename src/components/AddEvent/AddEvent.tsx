import React,{useState} from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from "react-textarea-autosize";
import axiosInstance from "../../utils/AxiosInstance";

import {  BiLogoFacebook,  BiLogoInstagram,  BiLogoLinkedin,  BiLogoGitlab,  BiLogoTwitter,} from "react-icons/bi";
import Contact from "./Contact";
export default function AddEvent() {
      
      //Event Content
      const [time, setTime] =     useState('');
      const [startAt, setstartAt] = useState('');
      const [deadline, setDeadline] = useState('');
      const [title, settitle] = useState('');
      const [description, setdescription] = useState('');
      const [location, setlocation] = useState('');

      // Contact
      const [showContact, setShowContact] = useState(false);
      const handleToggleContact = () => {
        setShowContact((prevShowContact) => !prevShowContact);
      };
    

      //Upload event avatar      
      const [avatar, setAvatar] = useState(null); // Thay đổi giá trị của useState thành null
      // Các state khác giữ nguyên

      //Upload event avatar
      const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Lấy file từ sự kiện chọn file
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
          setAvatar(file);
        } else {
          alert('Please choose an image file (jpg or png)');
        }
     };
      // SubmitButon      
      const handleSubmit = (event) => {
        event.preventDefault();
        // const [formData, setFormData] = useState({
        //   title: title,
        //   name: "ghj",
        //   description: description,
        //   file: avatar,
        //   deadline: deadline,
        //   startAt: startAt,
        //   location: location,
        //   time: time,
        //  });
        const formData = new FormData();
        formData.append("title", title);
        formData.append("name", "ghj");
        formData.append("description", description);
        formData.append("file", avatar);
        formData.append("startAt", startAt);
        formData.append("deadline", deadline);
        formData.append("location", location);
        formData.append("time", time);
        // Gửi yêu cầu POST đến URL http://localhost:8080/api/v1/recruiter/events/create với FormData
        axiosInstance.post('recruiter/events/create', formData)
          .then((response) => {
            alert('Successful');
            // Xử lý phản hồi từ server (nếu cần)
            console.log(response.data); // In ra thông tin phản hồi từ máy chủ
            // In tất cả thông tin từ FormData
            console.log(formData);
            setOpen(false);
          })
          .catch((error) => {
            // Xử lý lỗi (nếu có)
            console.error('Error:', error);
          });
        setOpen(false);
      }
      const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
        <form className={classnames("flex flex gap-10")} onSubmit={handleSubmit}>
          <div className={classnames("bg-white shadow rounded-xl w-full ml-5 w-75% mt-5")}>
             {/* Img */}
          <div className={classnames("flex items-left px-10 mt-10")}>
            <label className="text-zinc-900 text-2xl font-normal leading-7">Image here</label>
          </div>
          <div className=" flex items-left px-10 mt-10 justify-center">
            <label htmlFor="avatar">
              {avatar ? (
                <div>
                  <img src={URL.createObjectURL(avatar)} alt="blog_image" className="w-90% h-90% rounded-xl" />
                  <div>{avatar.name.split('.').slice(0, -1).join('.')}</div>
                </div>
              ) : (
                <span>Choose an image</span>
              )}
              <input
                type="file"
                id="avatar"
                className={classnames("w-[50%] ig object-cover ig-center hidden")}
                onChange={handleImageUpload}
              />
            </label>
              </div>
                {/* Title and content */}
                <div className={classnames("flex items-left px-10 mt-10")}>
                    <label className="text-zinc-900 text-2xl font-normal leading-7 ">
                        Event Title:
                    </label>
                </div>
                <div className={classnames("flex items-left px-10 mt-10 ")}>
                <TextareaAutosize
                    minRows={1}
                    id="title"
                    value={title}
                    className="resize-none p-2.5 text-[13px] w-full text-justify bg-white border rounded-xl" placeholder="Event title input here"
                    onChange={(event) => settitle(event.target.value)}
                  />
                </div>
                <div className={classnames("flex items-left px-10 mt-10")}>
                    <label className="text-zinc-900 text-2xl font-normal leading-7">
                        Description:
                    </label>
                </div>
                <div className={classnames("flex items-left px-10 mt-10")}>
                    <TextareaAutosize
                          minRows={10}
                          id="contentWidth"
                          className="resize-none p-2.5 text-[13px] w-full text-justify bg-white border rounded-xl"
                          onChange={(event) => setdescription(event.target.value)}
                          placeholder="Please enter your content in the box below to create a perfect event. We look forward to introducing it to everyone!"
                        />
                </div>
                {/* Creact */}
                <div className={classnames("mt-10 mb-10 text-center ")}>
                  <Button  
                    sx={{
                      backgroundColor: "#059669",
                      '&:hover': {
                        backgroundColor: "#289972",
                      },
                    }}
                    variant="contained" onClick={handleClickOpen}>
                      Create
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title" className='text-center'>
                      {"Are you sure you want to create this event?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                              Or consider carefully before deleting them all changes when pressing the agree button.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Disagree</Button>
                      <Button onClick={handleSubmit} autoFocus type="submit">
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              <div  className={classnames( "bg-white  w-[30%] sticky top-0 " )} >
               <div className="border mt-5 mb-5 rounded-xl">
                  {/* Author  */}
                  <div  className={classnames( "mp-5 flex items-center justify-center p-2 bg-emerald-600 rounded-tl-lg rounded-tr-lg" )}  >
                  <h3  className={classnames(  "text-center text-white text-lg font-medium tracking-wider leading-7 capitalize" )}  >  Author </h3>
                  </div>
                  <div  className={classnames( "flex items-center justify-center")}   >
                    <label htmlFor="avaActor">
                      <img src={avatar} alt="blog_image"  className="w-[175px] h-[175px] rounded-full mt-5 mb-5"/>
                    </label>
                  </div>
                  <div  className={classnames( "flex flex-col gap-1 items-center justify-center my-4 ")}   >
                    <h3>Content Writer</h3>
                    <h2>Name : {}</h2>
                  </div>
                </div>

                {/* Lien he */}
                <div className="border mt-5 mb-5 rounded-xl">
                <div
                  className={classnames(
                    "flex items-center justify-center p-2 bg-emerald-600 rounded-tl-xl rounded-tr-xl cursor-pointer"
                  )}
                  onClick={handleToggleContact}
                >
                  <h3
                    className={classnames(
                      "text-center text-white text-lg font-medium tracking-wider leading-7 capitalize"
                    )}
                  >
                    Contract
                  </h3>
                </div>
                {showContact && <Contact />} {/* Render the Contact component only if showContact is true */}
                </div>
                {/* Set Time  */}
                <div className="border-[2px] rounded-xl">
                <div className={classnames("flex items-center gap-1 justify-between px-10 mb-5 mt-5")}>
                    <label className="">Time:
                      <input
                        type="text"
                        id="time"
                        className="text-emerald-600 border text-sm font-medium leading-tight"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                      />
                    </label>
                </div>
                <div className={classnames("flex items-center gap-1 rounded-xl justify-between px-10 mb-5 mt-5")}>
                    <label className="">Location:
                      <input
                        type="text"
                        id="date"
                        className="text-emerald-600 border text-sm font-medium leading-tight"
                        value={location}
                        onChange={(event) => setlocation(event.target.value)}
                      />
                    </label>
                </div>
                <div className={classnames("flex items-center gap-1 justify-between px-10 mt-4")}>
                    <label className="">Date Start:
                      <input
                        type="datetime-local"
                        id="startAt"
                        className="text-emerald-600 border text-sm font-medium leading-tight"
                        value={startAt}
                        onChange={(event) => setstartAt(event.target.value)}
                      />
                    </label>
                </div>
                <div className={classnames("flex items-center gap-1 justify-between px-10 mb-10 mt-5")}>
                    <label className="">Date End:
                      <input
                        type="datetime-local"
                        id="deadline"
                        className="text-emerald-600 border text-sm font-medium leading-tight"
                        value={deadline}
                        onChange={(event) => setDeadline(event.target.value)}
                      />
                    </label>
                </div>                
              </div>            
          </div>

      </form>
    </>
  );
}
