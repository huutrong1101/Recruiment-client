// import React,{useState,useEffect} from "react";
// import classnames from "classnames";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextareaAutosize from "react-textarea-autosize";
// import axiosInstance from "../../utils/AxiosInstance";
// import moment from "moment";
// import { toast } from "react-toastify";
// export default function AddEvent() {
      
//       //Event Content
//       const [time, setTime] =     useState('');
//       const [title, settitle] = useState('');
//       const [description, setdescription] = useState('');
//       const [location, setlocation] = useState('');
//       //Upload event avatar      
//       const [avatar, setAvatar] = useState(null); // Thay đổi giá trị của useState thành null
//       //Upload event avatar
//       const handleImageUpload = (event: any) => {
//         const file = event.target.files[0]; // Lấy file từ sự kiện chọn file
//         setAvatar(file);        
//       };
//       // SubmitButon 
//       const [startAt, setstartAt] = useState("");
//       useEffect(() => {
//         // Set the default value for "Day Start" to the current date
//         const currentDate = moment().format("HH:mm:ss YYYY-MM-DD");
//         setstartAt(currentDate);
//       }, []); 
//       const [deadline, setDeadline] = useState("");
//       const handleSubmit = (event: any) => {
//         event.preventDefault(); 
//         // Check if the avatar is null
//         if (!avatar) {
//           toast.error('Please choose an image.');
//           return;
//         }
//         // Check if the title or description is empty
//         if (title.trim() === '' || description.trim() === ''|| time.trim() === '' || location.trim() === '' || !startAt || !deadline) {
//           toast.error('Please fill in all required fields.');
//           return;
//         }
//         // Convert the selected dates to Date objects
//         const startDateObj = new Date(startAt);
//         const endDateObj = new Date(deadline);        
//         // Check if "Date Start" is earlier than "Date End"
//         if (startDateObj >= endDateObj) {
//           toast.error('Date Start must be earlier than Date End');
//           return;
//         } 
//         //        
//         const formData = new FormData();
//         const formattedValueStart = moment(startAt).format("HH:mm:ss YYYY-MM-DD");
//         const formattedValueDeadline = moment(deadline).format("HH:mm:ss YYYY-MM-DD");
//         formData.append("title", title);
//         formData.append("description", description);
//         formData.append("file", avatar);
//         formData.append("startAt", formattedValueStart);
//         formData.append("deadline", formattedValueDeadline);
//         formData.append("location", location);
//         formData.append("time",  time);       
//         // Gửi yêu cầu POST đến URL http://localhost:8080/api/v1/recruiter/events/create với FormData
//         axiosInstance.post('recruiter/events/create', formData)
//           .then((response) => {
//             toast.success(response.data.message);
//             setOpen(false);
//             window.history.back();
//           })
//           .catch((error) => {
//             // console.error('Error:', error);
//             toast.error(response.data.message);
//           });
//         setOpen(false);
//       }
//       const [open, setOpen] = React.useState(false);
//       const handleClickOpen = () => {
//         setOpen(true);
//       };
//       const handleClose = () => {
//         setOpen(false);
//       };
//   return (
//     <>
//       <form className={classnames("flex flex-col md:flex-row gap-12")} onSubmit={handleSubmit}>
//           <div className={classnames("bg-white shadow rounded-xl w-full md:w-8/12`, `flex flex-col gap-6 mt-5")}>
//              {/* Img */}
//           <div className={classnames("flex items-left px-10 mt-10 ")}>
//             <label className="text-zinc-900 text-2xl font-normal leading-7">Image here</label>
//           </div>

//             <div 
//               className=" flex items-left px-10 mt-10 justify-center">
//               <label htmlFor="avatar">
//                 {avatar ? (
//                   <div>
//                     <img src={URL.createObjectURL(avatar)} alt="blog_image" className=" rounded-xl" style={{ width: '350px', height: '350px' }}/>
//                     <div>{avatar.name.split('.').slice(0, -1).join('.')}</div>
//                   </div>
//                 ) : (
//                   <div className="flex justify-center">
//                     <span >Choose an image</span>
//                   </div>
//                 )}
//                 <input
//                   type="file"
//                   id="avatar"
//                   className={classnames("w-[50%] ig object-cover ig-center hidden")}
//                   onChange={handleImageUpload}
//                 />
//               </label>
//             </div>
          
//                 {/* Title and content */}
//                 <div className={classnames("flex items-left px-10 mt-10")}>
//                     <label className="text-zinc-900 text-2xl font-normal leading-7 ">
//                         Event Title:
//                     </label>
//                 </div>
//                 <div className={classnames("flex items-left px-10 mt-10 ")}>
//                 <TextareaAutosize
//                     minRows={1}
//                     id="title"
//                     value={title}
//                     className="resize-none p-2.5 text-[13px] w-full text-justify bg-white border rounded-xl" 
//                     placeholder="Event title input here"
//                     onChange={(event) => settitle(event.target.value)}
//                   />
//                 </div>
//                 <div className={classnames("flex items-left px-10 mt-10")}>
//                     <label className="text-zinc-900 text-2xl font-normal leading-7">
//                         Description:
//                     </label>
//                 </div>
//                 <div className={classnames("flex items-left px-10 mt-10")}>
//                     <TextareaAutosize
//                           minRows={10}
//                           id="contentWidth"
//                           className="resize-none p-2.5 text-[13px] w-full text-justify bg-white border rounded-xl"
//                           onChange={(event) => setdescription(event.target.value)}
//                           placeholder="Please enter your content in the box below to create a perfect event. We look forward to introducing it to everyone!"
//                         />
//                 </div>
//                 {/* Creact */}
//                 <div className={classnames("mt-10 mb-10 text-center ")}>
//                   <Button  
//                     sx={{
//                       backgroundColor: "#059669",
//                       '&:hover': {
//                         backgroundColor: "#289972",
//                       },
//                     }}
//                     variant="contained" onClick={handleClickOpen}>
//                       Create
//                   </Button>
//                   <Dialog
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                   >
//                     <DialogTitle id="alert-dialog-title" className='text-center'>
//                       {"Are you sure you want to create this event?"}
//                     </DialogTitle>
//                     <DialogContent>
//                       <DialogContentText id="alert-dialog-description">
//                               Or consider carefully before deleting them all changes when pressing the agree button.
//                       </DialogContentText>
//                     </DialogContent>
//                     <DialogActions>
//                       <Button onClick={handleClose}>Disagree</Button>
//                       <Button onClick={handleSubmit} autoFocus type="submit">
//                         Agree
//                       </Button>
//                     </DialogActions>
//                   </Dialog>
//                 </div>
//           </div>
//           <div  className={classnames( "w-full md:w-3/12 flex-1 relativ bg-white mt-5 " )} >
//             {/* Lien he */}
//             {/* Set Time  */}
//             <div className="border-[2px] rounded-xl">
//             <div className="flex items-center gap-1 justify-between px-10 mt-4">
//               <label className="">Day Start :
//                 <input
//                   type="datetime-local"
//                   id="startAt"
//                   className="text-emerald-600 border ml-2 text-sm font-medium leading-tight"
//                   value={startAt}
//                   onChange={(event) => setstartAt(event.target.value)}
//                   />
//               </label>
//             </div>
//             <div className="flex items-center gap-1 justify-between px-10 mb-5 mt-5">
//               <label className="">Day End :
//                 <input
//                   type="datetime-local"
//                   id="deadline"
//                   className="text-emerald-600 ml-2 border text-sm font-medium leading-tight"
//                   value={deadline}
//                   onChange={(event) => setDeadline(event.target.value)}
//                   />
//               </label>
//             </div> 
//             <div className={classnames("flex items-center gap-1 justify-between px-10 mb-5 mt-5")}>
//                 <label className="">Time:
//                   <input
//                     type="text"
//                     id="time"
//                     className="text-emerald-600 border text-sm font-medium leading-tight"
//                     value={time}
//                     onChange={(event) => setTime(event.target.value)}
//                   />
//                 </label>
//             </div>
//             <div className={classnames("flex items-center gap-1 rounded-xl justify-between px-10 mb-10 mt-5")}>
//                 <label className="">Location:
//                   <input
//                     type="text"
//                     id="location"
//                     className="text-emerald-600 border text-sm font-medium leading-tight"
//                     value={location}
//                     onChange={(event) => setlocation(event.target.value)}
//                   />
//                 </label>
//             </div>                         
//           </div>            
//           </div>

//       </form>
//     </>
//   );
// }



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
      // SubmitButon 
      const [startAt, setstartAt] = useState("");
      useEffect(() => {
        // Set the default value for "Day Start" to the current date
        const currentDate = moment().format("HH:mm:ss YYYY-MM-DD");
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
        const formattedValueStart = moment(startAt).format("HH:mm:ss YYYY-MM-DD");
        const formattedValueDeadline = moment(deadline).format("HH:mm:ss YYYY-MM-DD");
        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", avatar);
        formData.append("startAt", formattedValueStart);
        formData.append("deadline", formattedValueDeadline);
        formData.append("location", location);
        formData.append("time",  time);       
        // Gửi yêu cầu POST đến URL http://localhost:8080/api/v1/recruiter/events/create với FormData
        axiosInstance.post('recruiter/events/create', formData)
          .then((response) => {
            toast.success(response.data.message);
            setOpen(false);
            window.history.back();
          })
          .catch((error) => {
            // console.error('Error:', error);
            toast.error(response.data.message);
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
        <div className={classNames(`job-detail`, `flex flex-col gap-6`)}>
          <form className={classnames("flex gap-10 md:flex-row")} onSubmit={handleSubmit}>
            <div className={classnames("bg-white shadow rounded-xl w-full md:w-8/12 `, `flex flex-col gap-6 mt-5")}>
                {/* Img */}
              <div className={classnames("flex items-left px-10 mt-10 ")}>
                <label className="text-zinc-900 text-2xl font-normal leading-7">Image here</label>
              </div>

                <div 
                  className=" flex items-left px-10 mt-10 justify-center">
                  <label htmlFor="avatar">
                    {avatar ? (
                      <div>
                        <img src={URL.createObjectURL(avatar)} alt="blog_image" className=" rounded-xl" style={{ width: '350px', height: '350px' }}/>
                        <div>{avatar.name.split('.').slice(0, -1).join('.')}</div>
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
                        className="resize-none p-2.5 text-[13px] w-full text-justify bg-white border rounded-xl" 
                        placeholder="Event title input here"
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
              <div  className={classnames( "w-full md:w-3/12 flex-1 relativ bg-white mt-5 border-[2px] rounded-xl" )} >
                {/* Lien he */}
                {/* Set Time  */}
                <div className="flex items-center gap-1 justify-between px-10 mt-4">
                  <label className="">Day Start :
                    <input
                      type="datetime-local"
                      id="startAt"
                      className="text-emerald-600 border ml-2 text-sm font-medium leading-tight"
                      value={startAt}
                      onChange={(event) => setstartAt(event.target.value)}
                      />
                  </label>
                </div>
                <div className="flex items-center gap-1 justify-between px-10 mb-5 mt-5">
                  <label className="">Day End :
                    <input
                      type="datetime-local"
                      id="deadline"
                      className="text-emerald-600 ml-2 border text-sm font-medium leading-tight"
                      value={deadline}
                      onChange={(event) => setDeadline(event.target.value)}
                      />
                  </label>
                </div> 
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
                <div className={classnames("flex items-center gap-1 rounded-xl justify-between px-10 mb-10 mt-5")}>
                    <label className="">Location:
                      <input
                        type="text"
                        id="location"
                        className="text-emerald-600 border text-sm font-medium leading-tight"
                        value={location}
                        onChange={(event) => setlocation(event.target.value)}
                      />
                    </label>
                </div>                         
              </div>
          </form>
        </div>
    </>
  );
}
