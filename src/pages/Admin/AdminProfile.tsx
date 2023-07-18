
import React, {useState, useRef }from 'react'
import classnames from "classnames";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import blog_image from "../../../images/blog_image.png";
export default function AdminProfile() {
    const [avatar, setAvatar] = useState(blog_image);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [adress, setadress] = useState('');
    const fileInputRef = useRef(null);
    const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        setAvatar(URL.createObjectURL(file));
    }
    };
    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };
    const [AdminProfile] = useState([
    {
        name:   "Nguyen Van Admin",
        email:  "nguyenvanadmin@gmail.com",
        phone:  "0988123xxx",
        adress: "Day la dia chi admin",
        avatarUrl: avatar,
    }
    ]);
    const handleSubmit = (event) => {
        event.preventDefault();
        let object = { avatar,name, email, phone, adress};
        console.log(object);
        setOpen(false);
    }
    return (
    AdminProfile.map((item) => (
        <div className="flex gap-5">
            <div className="bg-white rounded-lg shadow-lg w-[40%] flex justify-center items-center">
            <div onClick={handleImageClick}>
                {avatar ? (
                <img src={avatar} className="w-[175px] h-[175px] rounded-full" alt="avatar" />
                ) : (
                <div className="upload-placeholder">
                    <span>Choose Image</span>
                </div>
                )}
            </div>
            <input
                type="file"
                id="avatar"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageUpload}
            />
            </div>
            <div className="bg-white rounded-lg shadow-lg w-[50%] h-fit sticky">
                <div className="flex items-center justify-center text-center space-x-2 font-semibold text-green-500">
                    <span className="tracking-wide text-bold-center flex text-emerald-600 text-[30px]">Information</span>
                </div>
                <form  className = "text-gray-700 " onSubmit={handleSubmit}>
                    <div className = "grid md:grid-cols-1 text-sm self-stretch px-2 pt-[13px] pb-[13px]">
                        {/* Name */}
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide "> FullName</div>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                className="px-4 py-2 self-stretch pt-[13px] pb-[13px] bg-white bg-opacity-0 rounded-lg border border-zinc-900" placeholder={item.name}
                                onChange={(event) => setname(event.target.value)}
                            />
                        </div>
                        {/* Phone */}
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Contact No.</div>
                            <input
                                type="text"
                                id="phone"
                                value={phone}
                                className="px-4 py-2 self-stretch pt-[13px] pb-[13px] bg-white bg-opacity-0 rounded-lg border border-zinc-900" placeholder={item.phone}
                                onChange={(event) => setphone(event.target.value)}
                            />
                        </div>
                        {/* Adress */}
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Current Address</div>
                            <input 
                                type="text" 
                                id="adress"
                                value={adress}
                                className="px-4 py-2 self-stretch pt-[13px] pb-[13px] bg-white bg-opacity-0 rounded-lg border border-zinc-900" placeholder={item.adress}
                                onChange={(event) => setadress(event.target.value)}
                            />
                        </div>
                        {/* Email */}
                        <div className = "grid grid-cols-1">
                            <div className = "px-4 py-2 font-semibold text-black capitalize leading-7 tracking-wide">Email.</div>
                            <input 
                                type="email" 
                                id="email"
                                value={email}
                                className="px-4 py-2 self-stretch pt-[13px] pb-[13px] bg-white bg-opacity-0 rounded-lg border border-zinc-900" placeholder= {item.email}
                                onChange={(event) => setemail(event.target.value)}
                            />
                        </div>
                        {/* Save Buton */}
                        <div className={classnames("text-center px-5 py-4")}>
                        <Button  
                            sx={{
                                backgroundColor: "#059669",
                                '&:hover': {
                                backgroundColor: "#289972",
                                },
                            }}
                            variant="contained" onClick={handleClickOpen}>
                                Creact
                        </Button>
                            <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            >
                            <DialogTitle id="alert-dialog-title">
                            {" Are you sure you want to change the location of this account?"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Or consider carefully before deleting them all changes when pressing the agree button.                        </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="error" variant="contained">Disagree</Button>
                            <Button onClick={handleClose} autoFocus type='submit' variant="contained" sx={{
                                    backgroundColor: "#059669",'&:hover': { backgroundColor: "#289972", },
                                }}>
                                Agree
                            </Button>
                            </DialogActions>
                        </Dialog>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )))
}
