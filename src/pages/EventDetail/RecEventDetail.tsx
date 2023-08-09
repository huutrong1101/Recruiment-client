import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import classnames from "classnames";
import React, { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoGitlab,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import TextareaAutosize from "react-textarea-autosize";
export default function RecEventDetail() {
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
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };

  const handleImageUploadActor = (event) => {
    const file = event.target.files[0];
    setavarActor(URL.createObjectURL(file));
  };
  const [avatar, setAvatar] = useState("../../../images/blog_image.png");
  const [dayend, setDayend] = useState("2023-04-23T08:30");
  const [daystar, setDaystar] = useState("2023-07-23T08:30");
  const [eventName, setEventName] = useState(
    "DigitalOcean launches first Canadian data centre in Toront",
  );
  const [eventContent, setEventContent] = useState(
    "The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
  );
  const [avaActor, setavarActor] = useState("../../../images/ava.jpg");
  return (
    <>
      <div className={classnames("flex gap-5")}>
        <div className={classnames("bg-white rounded-lg shadow-lg w-50%")}>
          <div className="">
            <label htmlFor="avatar">
              {avatar && (
                <div>
                  <img
                    src={avatar}
                    alt="avatar"
                    className={classnames("w-full object-cover")}
                  />
                </div>
              )}
              <input
                type="file"
                id="avatar"
                accept="image/*"
                className={classnames(
                  "w-full object-cover ig ig-center hidden",
                )}
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
              <label className="">
                Start:
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
              <label className="">
                End:
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
            <h3
              className={classnames(
                "text-black font-outfit text-2xl font-medium leading-31 tracking-wider capitalize",
              )}
            >
              <TextareaAutosize
                minRows={1}
                id="eventName"
                value={eventName}
                className="resize-none text-[16px] w-full text-black font-outfit text-2xl font-medium leading-31 tracking-wider capitalize"
                placeholder={eventName}
                onChange={(event) => setEventName(event.target.value)}
              />
            </h3>
            <div className={classnames("mt-2")}>
              <ul className={classnames("flex flex-col gap-2")}>
                <TextareaAutosize
                  minRows={10}
                  id="contentWidth"
                  className="resize-none p-2.5 text-[13px] w-full text-justify bg-white"
                  onChange={(event) => setEventContent(event.target.value)}
                  placeholder={eventContent}
                />
              </ul>
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
              -Cristina Romsey-
            </h3>
          </div>
        </div>

        {/* Author  */}
        <div
          className={classnames(
            "bg-white rounded-lg shadow-lg w-[30%] h-fit sticky top-0",
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
                <input
                  type="file"
                  id="avaActor"
                  accept="image/*"
                  className={classnames(
                    "w-full ig object-cover ig-center hidden rounded-xl",
                  )}
                  onChange={handleImageUploadActor}
                />
              </label>
            </div>
            <h3>Content Writer - journalist </h3>
            <h3>Cristina Romsey</h3>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-300">
            <h3
              className={classnames(
                "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize",
              )}
            >
              Contract
            </h3>
          </div>
          <div className={classnames("my-3")}>
            <ul
              className={classnames("flex items-center justify-center gap-3")}
            >
              <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                <BiLogoFacebook size={20} />
              </li>
              <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                <BiLogoInstagram size={20} />
              </li>
              <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                <BiLogoLinkedin size={20} />
              </li>
              <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                <BiLogoGitlab size={20} />
              </li>
              <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                <BiLogoTwitter size={20} />
              </li>
            </ul>
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
            <Button onClick={handleClose} autoFocus type="submit">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
