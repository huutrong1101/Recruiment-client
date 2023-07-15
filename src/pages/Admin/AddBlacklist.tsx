import React,{useState} from 'react'
import classnames from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function AddBlacklist() {
    const [Info] = useState([{
        avatar:"../../../images/blog_image.png",
        name: "Nguyen Van A",
        email: "ngan@example.com",
        phone: "012367xxx",
        address: "123 Main St Ba Ria Vung Tau St",
        positon: "Candidate",
    }]);
    const goBack = () => {
        window.history.back();
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };
return (
    Info.map((item) => (
        <>
          {/* Information */}
          <div className="flex gap-5">
            {/* Avarta */}
            <div className="bg-white rounded-lg shadow-lg w-[30%] h-fit sticky">
                {/* Avatar */}
                <div className=''>
                    <div className='flex justify-center'> <img src={item.avatar} className='w-[150px] h-[150px] justify-center rounded-full' alt="blog_image" /></div>
                    <div className = "mt-10 text-center px-5 py-4 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg">{item.name}</div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-[70%] top-4 ">
              <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[13px] pb-[11px]">
                {/* Title */}
                <div className = "flex items-center text-center space-x-2 font-semibold text-green-500">
                    <span className = "tracking-wide text-center  text-emerald-600 text-[28px] ">Information</span>
                </div>
                {/* Name */}
                <div className = "grid grid-cols-1">
                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide "> FullName</div>
                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.name}</div>
                </div>
                {/* Phone */}
                <div className = "grid grid-cols-1">
                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.phone}</div>
                </div>
                {/* Address */}
                <div className = "grid grid-cols-1">
                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.address}</div>
                </div>
                {/* Email */}
                <div className = "grid grid-cols-1">
                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                    <div className = "px-4 py-2 self-stretch pt-[13px] pb-[11px] bg-white bg-opacity-0 rounded-lg border border-zinc-900 border-opacity-50">{item.email} </div>
                </div>
                {/* Reasion */}
                <div className = "grid grid-cols-1">
                    <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide"> Reasion </div>
                    <TextareaAutosize
                        id="description"
                        minRows={4}
                        className="resize-none p-2.5 w-full text-justify bg-white border"
                        placeholder="Job description here..."
                    />
                </div>
                {/* AdBacklist */}
                <div className={classnames("mt-10 text-center px-5 py-4")} >
                    <NavLink to="#" onClick={goBack}>
                        <button type="submit" className="px-6 py-3 text-white rounded-full bg-red-600     hover:bg-red-800">  Cancel   </button>
                    </NavLink>
                   <button type="submit" className="px-6 py-3 text-white rounded-full bg-emerald-600 hover:bg-emerald-800 ml-5" variant="outlined" onClick={handleClickOpen}>  Save   </button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to change the location of this account?"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Or consider carefully before deleting them all changes when pressing the agree button.
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus type='submit'>
                            Agree
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
              </div>
            </div>
          </div>
        </>
    )))
}
