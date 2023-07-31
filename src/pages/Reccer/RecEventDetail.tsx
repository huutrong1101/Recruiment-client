import React, { useEffect, useState } from "react";
import classnames from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGitlab,
  BiLogoTwitter,
} from "react-icons/bi";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "react-router-dom";
import { EventInterface } from "../../services/services";
import { useAppSelector } from "../../hooks/hooks";
import axiosInstance from "../../utils/AxiosInstance";
import moment from "moment";
export default function RecEventDetail() {
  const { eventId } = useParams();

  const [event, setEvent] = useState<EventInterface | null>(null);

  const events: EventInterface[] = useAppSelector((state) => state.Home.events);

  let [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    alert("Apply success");
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const getEventDetail = async () => {
      const response = await axiosInstance.get(`events/${eventId}`);
      setEvent(response.data.result);
    };
    getEventDetail();
  }, [eventId]);
  console.log(event?.img)
  const formattedDate = moment(event?.startAt).format("Do MMMM, YYYY");
  const [openSave, setOpenSave] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleClickOpen = () => {
    setOpenSave(true);
    setOpenDelete(false);
  };
  const handleClickOpen1 = () => {
    setOpenSave(false);
    setOpenDelete(true);
  };
  const handleClose = () => {
    setOpenSave(false);
    setOpenDelete(false);
  };
  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };

  const handleImageUploadActor = (event: any) => {
    const file = event.target.files[0];
    setavarActor(URL.createObjectURL(file));
  };
  const [avatar, setAvatar] = useState("../../../images/blog_image.png");
  const [dayend, setDayend] = useState("2023-04-23T08:30");
  const [daystar, setDaystar] = useState("2023-07-23T08:30");
  const [time, setTime] =     useState('');
  const [location, setlocation] = useState('');
  const [eventName, setEventName] = useState('' );
  const [eventContent, setEventContent] = useState(""  );
  const [avaActor, setavarActor] = useState("../../../images/ava.jpg");
  //Delete
  const handleDelete = () => {
    // Gửi yêu cầu DELETE đến API
    axiosInstance
      .delete(`recruiter/events/${event?.id}`)
      .then((response) => {
        // Xử lý phản hồi từ server nếu cần
        console.log("Delete success");
        // Tùy chỉnh hành động sau khi xóa thành công, ví dụ: điều hướng trang, cập nhật danh sách sự kiện, v.v.
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error:", error);
        // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác tùy theo trường hợp
      });
      setOpenSave(false);
      setOpenDelete(true);
    };
  return (
    <>
      <div className={classnames("flex pt-5 justify-center gap-5")}>
        <div className={classnames("bg-white rounded-lg shadow-lg item-center w-70%")}>
          <div className={classnames("flex items-left px-10 mt-10")}>
            <label className="text-zinc-900 text-2xl font-normal leading-7 ">Image here</label>
          </div>
          <div className=" flex items-left px-10 mt-10 justify-center ">
              <label htmlFor="avatar">
                {avatar && (
                    <div>
                      <img src = {event?.img} alt="blog_image" className="dai" />
                    </div>
                  )}
                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    className={classnames("w-[50%] ig object-cover ig-center hidden")}
                    onChange={handleImageUpload}
                />
              </label>
          </div>
        
          <div
            className={classnames(
              "flex items-center justify-between px-10 mt-4",
            )}
          >
            <div className={classnames("flex items-center gap-1")}>
              <h3>Start:</h3>
              <label className="">                  
                <input
                  type="datetime-local"
                  id="datestart"
                  className="text-sm font-medium leading-tight border text-emerald-600"
                  value={daystar}
                  onChange={(event) => setDaystar(event.target.value)}
                />
              </label>
            </div>
            <div className={classnames("flex items-center gap-1")}>
                <h3>End:</h3>
                <label className="">                
                <input
                  type="datetime-local"
                  id="dateend"
                  className="text-sm font-medium leading-tight border text-emerald-600"
                  value={dayend}
                  onChange={(event) => setDayend(event.target.value)}
                />
              </label>
            </div>
          </div>
          <div className={classnames("mt-4 px-10")}>
          <div className={classnames("flex items-center gap-1")}>
                <h3 >Time</h3>
                <label className="">                
                <input
                  type="time"
                  id="time"
                  className="text-sm font-medium leading-tight border text-emerald-600"
                  value={event?.time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </label>
            </div>
            <div className={classnames("flex items-center gap-1")}>
                <h3 >Location</h3>
                <label className="">                
                <input
                  type="text"
                  id="location"
                  className="text-sm font-medium leading-tight border text-emerald-600"
                  value={event?.location}
                  onChange={(event) => setlocation(event.target.value)}
                />
              </label>
            </div>
          
          </div>

          <div className={classnames("mt-4 px-10")}>
            <h3
              className={classnames(
                "text-black font-outfit text-2xl font-medium leading-31 tracking-wider capitalize",
              )}
            >
              Event Title
              <TextareaAutosize
                minRows={1}
                id="eventName"
                value={event?.title}
                className="resize-none text-[16px] w-full text-black font-outfit text-2xl font-medium leading-31 tracking-wider capitalize"
                placeholder={eventName}
                onChange={(event) => setEventName(event.target.value)}
              />
            </h3>
            <div className={classnames("mt-2")}>
              <h3
                className={classnames(
                  "text-black font-outfit text-2xl font-medium leading-31 tracking-wider capitalize",
                )}
              >Description</h3>
              <TextareaAutosize
                minRows={10}
                id="contentWidth"
                className="resize-none p-2.5 text-[13px] w-full text-justify bg-white"
                onChange={(event) => setEventContent(event.target.value)}
                placeholder={event?.description}
              />
            </div>
          </div>

          <div
            className={classnames("px-10 my-4 flex items-center justify-end")}
          >
            <h3
              className={classnames(
                "text-black font-outfit text-[17px] font-medium leading-31 tracking-wider capitalize",
              )}
            >
              -{event?.name}-
            </h3>
          </div>
        </div>

        {/* Author  */}
        <div
          className={classnames(
            "bg-white rounded-lg shadow-lg w-[50%] h-fit sticky top-0",
          )}
        >
          <div
            className={classnames(
              "flex items-center justify-center p-2 bg-gray-300 rounded-tl-lg rounded-tr-lg",
            )}
          >
            <h3
              className={classnames(
                "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize",
              )}
            >
              Author
            </h3>
          </div>
          <div
            className={classnames(
              "flex flex-col gap-1 items-center justify-center my-4",
            )}
          >
            <div className={classnames("flex items-center justify-center")}>
              <label htmlFor="avaActor">
                {avaActor && (
                  <img
                    src={avaActor}
                    alt="avatar"
                    className="w-[175px] h-[175px] rounded-full mt-5 mb-5"
                  />
                )}                
              </label>
            </div>
            <h3>Content Writer - journalist </h3>
            <h3>{event?.name}</h3>
          </div>
        </div>
      </div>

      <div className={classnames("mt-10 text-center px-6 py-3")}>
        <button
          onClick={handleClickOpen}
          className="px-6 py-3 ml-5 text-white rounded-full bg-emerald-600 hover:bg-emerald-800"
        >
          Save
        </button>
        <Dialog
          open={openSave}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Information saved successfully"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Successful
            </Button>
          </DialogActions>
        </Dialog>
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
            {"Are you sure you want to change the location of this account?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Or consider carefully before deleting them all changes when
              pressing the agree button.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleDelete} autoFocus type="submit">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
