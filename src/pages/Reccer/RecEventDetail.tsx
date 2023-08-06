import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useParams } from "react-router-dom";
// import { EventInterface } from "../../services/services";
import { useAppSelector } from "../../hooks/hooks";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/AxiosInstance";
import moment from "moment";
import { CalendarDaysIcon, ExclamationTriangleIcon, MapPinIcon } from "@heroicons/react/24/outline";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { ClockIcon } from "@mui/x-date-pickers";
export default function RecEventDetail() {
  const { eventId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // const events:  EventInterface[] = useAppSelector((state) => state.recevent.RecEventRecent);
  // Define the initial state outside the useEffect hook
  const [avatar, setAvatar] = useState('');
  const [avatar1, setAvatar1] = useState(null);
  const [dayend, setDayend] = useState('');
  const [daystar, setDaystar] = useState('');
  const [daycheck, setcheck] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [time, setTime] = useState('');
  const [location, setlocation] = useState('');
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [openSave, setOpenSave] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpenSave(false);
    setOpenDelete(true);
  };
  const handleClose = () => {
    setOpenSave(false);
    setOpenDelete(false);
  };
  //Upload event avatar
  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    setAvatar1(file);
    setAvatar(URL.createObjectURL(file));
  };

  useEffect(() => {
    setIsLoading(true);      
    const getEventDetail = async () => {
      try {
        const response = await axiosInstance(`/recruiter/events/${eventId}`);
        // Set state with the response data
        setAvatar(response.data.result.img);
        setDayend(moment(response.data.result.deadline).format("YYYY-MM-DD"));
        setDaystar(moment(response.data.result.startAt).format("YYYY-MM-DD"));
        setcheck(moment(response.data.result.startAt).format("YYYY-MM-DD"));
        setTime(response.data.result.time);
        setlocation(response.data.result.location);
        settitle(response.data.result.title);
        setdescription(response.data.result.description);        
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getEventDetail();
  }, [eventId]);
  
  // Change Event
  const DateStart = new Date();        

  const handleSubmit = (event: any) => {
    event.preventDefault();      
    // Convert the selected dates to Date objects
    const startDateObj = new Date(daystar);
    const endDateObj = new Date(dayend);        
    // Check if "Date Start" is earlier than "Date End"
    if (startDateObj >= endDateObj) {
      toast.error('Date Start must be earlier than Date End');
      return;
    } 
    //     
    const formData = new FormData();
    const formattedValueStart = moment(daystar).format("YYYY-MM-DD");
    const formattedValueDeadline = moment(dayend).format("YYYY-MM-DD");
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", avatar1 !== null ? avatar1 : new File([], ''));
    formData.append("startAt", formattedValueStart);
    formData.append("deadline", formattedValueDeadline);
    formData.append("location", location);
    formData.append("time", time);     
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Gửi yêu cầu POST đến URL http://localhost:8080/api/v1/recruiter/events/create với FormData
    axiosInstance.put( `/recruiter/events/${eventId}`, formData)
      .then((response) => {
        setOpenSave(true);
        setOpenDelete(false);
        // Xử lý phản hồi từ server (nếu cần)
        toast.success(response.data.message); // Display the response message from the server
        // In tất cả thông tin từ FormData
        window.history.back();
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        toast.error(error.response.data.message); // Display an error message
      }) 
      .finally(() => {
        setIsSubmitting(false); // Reset the submitting state after handling the request
      });
    setOpenSave(false);
  }
 
  //Delete
  const handleDelete = (event:any) => {
    // Gửi yêu cầu DELETE đến API
    event.preventDefault();      
    axiosInstance
      .delete(`recruiter/events/${eventId}`)
      .then((response) => {
        // Xử lý phản hồi từ server nếu cần
        toast.success(response.data.message);
        // Tùy chỉnh hành động sau khi xóa thành công, ví dụ: điều hướng trang, cập nhật danh sách sự kiện, v.v.
        window.history.back();
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        toast.error(error.response.data.message);
      });
      setOpenSave(false);
      setOpenDelete(true);
    };
  return (
    <>
    {isLoading ? 
      (
        <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-10 mb-10">
          <LoadSpinner className="text-2xl text-[#059669] " />
      </div>
      ):(
      <div className={classnames("flex gap-10")}>
        <div  className={classnames("bg-white shadow rounded-xl w-full md:w-8/12`, `flex flex-col gap-6 mt-5")}>
            <div className={classnames("flex items-left px-10 mt-10")}>
              <label className="text-zinc-900 text-2xl font-normal leading-7 ">Image here</label>
            </div>
            <div className="flex items-left px-10 mt-10 justify-center ">
            <label htmlFor="avatar">
            {avatar ? (
                <div>
                  {avatar1 === null ? (
                    <img src={avatar} alt="blog_image" 
                      className="w-auto h-auto max-w-[300px] max-h-[300px] rounded-xl" />
                  ) : (
                    <div>
                      <img src={URL.createObjectURL(avatar1)} alt="blog_image" 
                      className="w-auto h-auto max-w-[300px] max-h-[300px] rounded-xl" />
                      <div>{avatar1.name.split('.').slice(0, -1).join('.')}</div>
                    </div>
                  )}
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
            <div className={classnames("mt-4 px-10")}>

              <div
                className={classnames(
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
                  onChange={(event) => settitle(event.target.value)}
                />
                </div>
              </div>
              
              <div className={classnames("mt-2")}>
                {/* Description: */}
                <div
                  className={classnames(
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
                        value={description}
                        className="resize-none p-2.5 text-[16px] w-full text-justify bg-white "
                        onChange={(event) => setdescription(event.target.value)}
                      />
                  </div>
                </div>
              </div>

              <div className={classnames("mt-10 text-center px-6 py-3")}>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 ml-5 text-white rounded-full bg-emerald-600 hover:bg-emerald-800"
                >
                  Save
                </button>          
                <button
                  className="px-6 py-3 ml-5 text-white bg-red-600 rounded-full hover:bg-emerald-800"
                  onClick={handleClickOpen1}
                >
                  Delete
                </button>
                <Dialog
                  open={openDelete}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                  <p className="font-extrabold pt-4 text-center">Delete Event</p>
                  </DialogTitle>
                  <DialogContent className="text-center">
                    <div className="text-center px-6">
                      <DialogContent className="font-semibold text-lg mb-2">
                        Are you sure you want to delete name "{title}"?
                      </DialogContent>
                      <DialogContentText
                        id="alert-dialog-description"
                        className="border bg-orange-100 px-3 py-2 "
                      >
                        <div className="flex">
                          <ExclamationTriangleIcon className="w-6 h-6 text-red-800" />
                          <p className="flex text-red-800 font-semibold px-2">
                            WARNING
                          </p>
                        </div>
                        <div className="text-left font-semibold">
                          This action cannot be undone, the deleted item
                          cannot be restored.
                        </div>
                      </DialogContentText>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleDelete} type="submit">
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>  
            </div>
          
        </div>


        <div  className={classnames( "w-full md:w-3/12 flex-1 relative mt-5" )} >
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
                          className="text-emerald-600 text-sm font-medium leading-tight"
                          value={daystar}
                          min={daycheck < DateStart ? daycheck : DateStart}
                          // readOnly
                          onChange={(event) => setDaystar(event.target.value)}
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
                          value={dayend}
                          min ={daystar}
                          onChange={(event) => setDayend(event.target.value)}
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
                  <div className={classnames("items-center gap-1 rounded-xl justify-between px-10 mb-5 mt-5 ")}>
                      <div className="flex  mt-1 mb-1">
                        <MapPinIcon className="w-6 h-6 mr-2 "/>
                        <h3>Location:</h3>
                      </div>
                      <div className="">
                        <select
                          value={location}
                          onChange={(event) => setlocation(event.target.value)}
                          className="cursor-pointer flex items-center justify-between w-full px-1 border rounded-full bg-gray-100  "
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
      </div>
    )} 
    </>   
  );  
}