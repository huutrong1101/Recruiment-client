import React,{useState,useEffect} from "react";
import classnames from "classnames";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from "react-textarea-autosize";
import axiosInstance from "../../utils/AxiosInstance";
import moment from "moment";
import { toast } from "react-toastify";
import classNames from "classnames";
import { CalendarDaysIcon, ExclamationTriangleIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@mui/x-date-pickers";
export default function AddEvent() {
      
      //Event Content
      const [time, setTime] =     useState('');
      const [title, settitle] = useState('');
      const [description, setdescription] = useState('');
      const [location, setlocation] = useState('');
      //Upload event avatar      
      const [avatar, setAvatar] = useState(null); // Thay đổi giá trị của useState thành null
      //Upload event avatar
      const handleImageUpload = (event: any) => {
        const file = event.target.files[0]; // Lấy file từ sự kiện chọn file
        setAvatar(file);        
      };
      //
      // SubmitButon 
      const [startAt, setstartAt] = useState("");
      useEffect(() => {
        // Set the default value for "Day Start" to the current date
        const currentDate = moment().format("YYYY-MM-DD");
        setstartAt(currentDate);
      }, []); 
      const [deadline, setDeadline] = useState("");
      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        // Check if the avatar is null
        if (!avatar) {
          toast.error('Please choose an image.');
          return;
        }
        // Check if the title or description is empty
        if (title.trim() === '' || description.trim() === ''|| time.trim() === '' || location.trim() === '' || !startAt || !deadline) {
          toast.error('Please fill in all required fields.');
          return;
        }
        // Convert the selected dates to Date objects
        const startDateObj = new Date(startAt);
        const endDateObj = new Date(deadline);        
        // Check if "Date Start" is earlier than "Date End"
        if (startDateObj >= endDateObj) {
          toast.error('Date Start must be earlier than Date End');
          return;
        } 
        //        
        const formData = new FormData();
        const formattedValueStart = moment(startAt).format("YYYY-MM-DD");
        const formattedValueDeadline = moment(deadline).format("YYYY-MM-DD");

        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", avatar);
        formData.append("startAt", formattedValueStart);
        formData.append("deadline", formattedValueDeadline);
        formData.append("location", location);
        formData.append("time",  time+":00");       

        // Gửi yêu cầu POST đến URL http://localhost:8080/api/v1/recruiter/events/create với FormData
        axiosInstance.post('recruiter/events/create', formData)
          .then((response) => {
            toast.success(response.data.result);
            toast.success("Sussecfull event created! ");
            window.history.back();
          })
          .catch((error) => {
            // console.error('Error:', error);
            toast.error(error.response.data.result);
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
        <div className={classNames(`job-detail`)}>
          <form className={classnames("flex gap-10 md:flex-row")} onSubmit={handleSubmit}>
            <div className={classnames("bg-white w-full md:w-8/12 ")}>
            {/* Img */}
            <div
              className={classNames(
                `border bg-white shadow-sm rounded-xl mb-5`,
                `px-8 py-8`,
                `text-justify`,
              )}
            >   
              <h1 className="text-zinc-900 text-2xl font-normal leading-7">Image here</h1>
              <label htmlFor="avatar">
                {avatar ? (
                  <div className="flex justify-center">
                    <img src={URL.createObjectURL(avatar)} alt="blog_image" className=" rounded-xl w-[300px] h-[300px]"/>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <span >Choose an image</span>
                  </div>
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
            <div
              className={classNames(
                `border bg-white shadow-sm rounded-xl mb-5`,
                `px-8 py-8`,
                `text-justify`,
              )}
            >                       
              <h1 className="text-zinc-900 text-2xl font-normal leading-7 "> Event Title: </h1>
              <div className={classnames("flex items-left px-10 mt-5 rounded-xl")}>
              <TextareaAutosize
                minRows={1}
                id="title"
                value={title}
                className="resize-none p-2.5 text-[16px] w-full text-justify bg-white" 
                placeholder="Event title input here"
                onChange={(event) => settitle(event.target.value)}
              />
              </div>
            </div>

            {/* Description: */}
            <div
              className={classNames(
                `border bg-white shadow-sm rounded-xl`,
                `px-8 py-8`,
                `text-justify`,
              )}
            >                      
              <h1 className="text-zinc-900 text-2xl font-normal leading-7 "> Description:</h1>
              <div className={classnames("flex items-left px-10 mt-5 rounded-xl")}>
                  <TextareaAutosize
                    minRows={10}
                    id="contentWidth"
                    className="resize-none p-2.5 text-[16px] w-full text-justify bg-white "
                    onChange={(event) => setdescription(event.target.value)}
                    placeholder="Please enter your content in the box below to create a perfect event. We look forward to introducing it to everyone!"
                  />
              </div>
            </div>


            {/* Creact */}
            <div className={classnames("mt-10 mb-10 text-center")}>
               <button
              onClick={handleClickOpen}
              className="px-6 py-3 ml-5 text-white rounded-xl bg-emerald-600 hover:bg-emerald-800"
              >
                Create
              </button> 
              
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <div className="text-center px-6">
                  <DialogTitle id="alert-dialog-title" className='text-center' style={{ fontFamily: "Outfit, sans-serif" }}>
                      <h2 className='text-center' style={{ fontFamily: "Outfit, sans-serif" }}>Are you sure you want to create event name: </h2>
                      <h2 className="justify text-center">"{title}"</h2>
                  </DialogTitle>
                  <DialogContent>

                  <div className="flex">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-800" />
                    <p className="flex text-red-800 font-semibold px-2 justify-center text-center">
                      WARNING
                    </p>
                  </div>                 
                  </DialogContent>
                </div>

                <DialogActions>
                  <button
                    className="rounded-lg bg-red-700 hover:bg-red-900 px-4 py-2 mx-1 my-1 text-white"
                    onClick={handleClose}
                  >
                    Disagree
                  </button>
                  <button
                    className="rounded-lg bg-[#059669] hover:bg-green-900  px-4 py-2 mx-1 my-1 text-white"
                    onClick={handleSubmit}
                    autoFocus
                  >
                    Agree
                  </button>
                </DialogActions>
              </Dialog>
            </div>
            </div>   
            <div  className={classnames( "w-full md:w-3/12 flex-1 relative " )} >
              <div className="border-[2px] rounded-xl shadow">
                <div className={classnames("mt-5 mb-5 px-3")}>
                  {/* Lien he */}
                  {/* Set Time  */}
                  <div className="items-center gap-1 justify-between px-10 mt-4">
                      <div className="flex mt-1 mb-1">
                      <CalendarDaysIcon className="w-6 h-6 mr-2 "/>
                      <h3>Day Start :</h3>
                      </div>
                      <div className="">
                        <input
                          type="date"
                          id="startAt"
                          className="text-emerald-600 border text-sm font-medium leading-tight"
                          value={startAt}
                          min ={startAt}
                          max ={deadline}
                          onChange={(event) => setstartAt(event.target.value)}
                          />
                      </div>
                  </div>
                  <div className="items-center gap-1 justify-between px-10 mb-5 mt-5">
                      <div className="flex  mt-1 mb-1">
                        <CalendarDaysIcon className="w-6 h-6 mr-2 "/>
                        <h3>Day End :</h3>
                      </div>
                      <div className="">
                        <input
                          type="date"
                          id="deadline"
                          className="text-emerald-600  border text-sm font-medium leading-tight"
                          value={deadline}
                          min ={startAt}
                          onChange={(event) => setDeadline(event.target.value)}
                          />
                      </div>
                  </div> 
                  <div className={classnames("items-center gap-1 justify-between px-10 mb-5 mt-5")}>
                        <div className="flex  mt-1 mb-1">
                          <ClockIcon className="w-6 h-6 mr-2 "/>
                          <h3>Time:</h3>
                        </div>
                        <div className="">
                          <input
                            type="time"
                            id="time"
                            className="ml-2 text-emerald-600 border text-sm font-medium leading-tight"
                            value={time}
                            onChange={(event) => setTime(event.target.value)}
                          />
                        </div>
                  </div>
                  <div className={classnames("items-center gap-1 rounded-xl justify-between px-10 mb-5 mt-5")}>
                      <div className="flex  mt-1 mb-1">
                        <MapPinIcon className="w-6 h-6 mr-2 "/>
                        <h3>Location:</h3>
                      </div>
                      <div className="">
                        <select
                          value={location}
                          onChange={(event) => setlocation(event.target.value)}
                          className="cursor-pointer flex items-center justify-between w-[60%] px-1 border rounded-full bg-gray-100  "
                        >
                          <option value="" disabled> Choose</option>
                          <option value="F-Town 1">F-Town1</option>
                          <option value="F-Town 2">F-Town2</option>
                          <option value="F-Town 3">F-Town3</option>
                        </select>
                      </div>
                  </div> 
                </div>
              </div>                        
            </div>
          </form>
        </div>
    </>
  );
}
