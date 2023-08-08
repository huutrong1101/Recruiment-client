import React, { useState } from "react";
import axiosInstance from "../../utils/AxiosInstance";
import classnames from "classnames";
import { toast } from "react-toastify";
import image from "../../../images/sprite.png";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
export default function AdminChangePosition() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };
  const isValidEmail = (email) => {
    // Regular expression to match email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression to match Gmail email format
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    // Regular expression to match company email format
    const companyPattern = /^[a-zA-Z0-9._%+-]+@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;  
    return emailPattern.test(email) && (gmailPattern.test(email) || companyPattern.test(email));
  };
   const [isPending, setIsPending] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true); // Thiết lập trạng thái pending khi bắt đầu gửi yêu cầu
    setOpen(false);
    // CHeckphone
    const inputPhone = phone;
    const isValidPhone = /^\d{10,11}$/.test(inputPhone);
    if (!isValidPhone) {
      toast.error('Please enter a valid phone number with 10 or 11 digits.');
      return;
    } else {
      setPhone(inputPhone);
    }
    // Check email đúng đinh dang hay không
    if (!isValidEmail(email)) {
      // Invalid email format
      toast.error("Invalid email format. Please enter a valid email address.");
      return;
    }
    // Check if the title or description is empty
    if (
      name.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      role.trim() === ""
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }    

    if (role !== undefined) {
      const userData = {
        fullName: name,
        phone: phone,
        email: email,
        password: password,
        role: role,
      };
            // Make the API request to create the user
      axiosInstance.post(`admin/usercreate`, userData)
        .then((response) => {
          // Handle success
          toast.success(response.data.message);
        })
        .catch((error) => {
          // Handle error
          toast.error(error.response.data.result);
        })
        .finally(() => {
          setIsPending(false); // Thiết lập trạng thái pending về false khi kết thúc yêu cầu (bất kể thành công hoặc lỗi)
        });;
    } else {
      toast.error("Error:");
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[50px] text-[15px] mt-5 mb-5 l-16flex items-center ">
          <LoadSpinner className="text-2xl text-[#059669] " />
        </div>
      ) : (
        <div className="flex gap-5">
          {/* Information */}
          <div className="bg-white rounded-lg shadow-lg mt-5 border w-1/2 ">
            <div className="grid md:grid-cols-1 text-sm self-stretch px-5 py-5 ">
              {/* Title */}
              <div className="flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
                <span className="tracking-wide text-center text-emerald-600 text-[30px] ">
                  Recruiter & Interview Account
                </span>
              </div>
              <div
                className="flex-1 flex flex-col gap-2"
              >
                {/* Name */}
                <div className="grid grid-cols-1">
                  <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide ">
                    FullName
                  </div>
                  <input
                    className="px-3 py-3 self-stretch bg-white bg-opacity-0 rounded-lg border   "
                    value={name}
                    placeholder="Input full name account here..."
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    id="name"
                  />
                </div>
                {/* Phone */}
                <div className="grid grid-cols-1">
                  <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide">
                    Phone
                  </div>
                  <input
                    className="px-3 py-3 self-stretch  bg-white bg-opacity-0 rounded-lg border   "
                    value={phone}
                    type="number"
                    placeholder="Input phone account here..."
                    onChange={(event) => setPhone(event.target.value)}
                    id="phone"
                  />
                </div>
                {/* Email */}
                <div className="grid grid-cols-1">
                  <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide">
                    Email.
                  </div>
                  <input
                    className="px-3 py-3 self-stretch  bg-white bg-opacity-0 rounded-lg border   "
                    value={email}
                    type="email"
                    placeholder="Input email account here..."
                    onChange={(event) => setEmail(event.target.value)}
                    id="email"
                  />
                </div>
                {/* Password */}
                <div className="grid grid-cols-1 borded mt-1 b-1">
                  <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide">
                    Password
                  </div>
                  <input
                    className="px-3 py-3 self-stretch  bg-white bg-opacity-0 rounded-lg border   "
                    value={password}
                    placeholder="Input password account here..."
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    id="password"
                  />
                </div>
                {/*  */}
                <div className="grid grid-cols-1">
                  <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide">
                    Choossen Role for account:                 </div>

                  <select
                    value={role}
                    onChange={handleDropdownChange}
                    className="lp ti adp afq bbi bmg bnl chy px-3 py-3 self-stretch  bg-white bg-opacity-0 rounded-lg border-2    "
                  >
                    <option value="" disabled>
                      Choose Role for account
                    </option>
                    <option value="RECRUITER">Recruiter</option>
                    <option value="INTERVIEWER">Interviewer</option>
                    {/* <option value="CANDIDATE">Candidate</option> */}
                  </select>
                  {/* Submit button */}
                  <div className="flex justify-center mt-5 text-center px-3 py-3">
                    <button
                      type="button"
                      className="text-white rounded-xl bg-red-600 py-2 px-4 mr-5 hover:bg-red-800 font-bold"
                    >
                      <NavLink to={`/admin/users`}>
                      Cancel
                      </NavLink>
                    </button>
                    <button
                      onClick={handleClickOpen}
                      className="bg-emerald-600 rounded-xl hover:bg-emerald-700 text-white font-bold py-2 px-4 "
                    >
                      Save
                    </button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <div className="text-center px-6">
                        <DialogContent className="font-semibold text-lg">
                          <p className="mb-3">  Are you sure you want to create account ?</p>
                          <div className="border rounded-lg p-4 text-justify">
                            <h2 className="text-e-justify">Name: {name}</h2>
                            <h2 className="text-e-justify">Email: {email}</h2>
                            <h2 className="text-e-justify">Password: {password}</h2>
                            <h2 className="text-e-justify">Role: {role}</h2>
                          </div>                        
                        </DialogContent>
                        <DialogContentText
                            id="alert-dialog-description"
                            className="bg-orange-50"
                        >
                            <div className="flex border rounded-lg p-4 text-justify">
                              <ExclamationTriangleIcon className="w-6 h-6 text-red-800" />
                              <p className="flex text-red-800 font-semibold px-2">
                                  WARNING: You definitely want to continue
                              </p>
                            </div>                           
                        </DialogContentText>
                    </div>
                        <DialogActions style={{ justifyContent: 'center' }}>
                        <button
                            className="rounded-lg bg-red-700 px-3 py-3 mx-1 my-1 text-white hover:bg-red-900"
                            onClick={handleClose}
                            >
                            Cancel
                            </button>
                            <button
                              className="rounded-lg bg-[#059669] hover:bg-green-900  px-3 py-3 mx-1 my-1 text-white"
                              onClick = {handleSubmit}
                              type="submit"
                            >
                            Agree
                        </button>
                        </DialogActions>
                    </Dialog>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-2/5 md:block hidden">
            <div className="grid md:grid-cols-1 text-sm self-stretch px-2 mt-5">
              {/* Title */}
              <div
                className={classnames(
                  `bg-[#176A4B] rounded-3xl px-6 py-4`,
                  `shadow-md`,
                  `relative flex-1 flex flex-col gap-6`,
                )}
              >
                <h1
                  className={classnames(
                    `text-white`,
                    `font-bold text-3xl leading-6 mt-5 mb-5`,
                  )}
                >
                  Be a conscientious admin
                </h1>
                <p
                  className={classnames(
                    `text-[#89EFC9] text-[18px]`,
                    `leading-[1.25em]`,
                    `text-justify`,
                    `italic`,
                  )}
                >
                  This page allows the admin to create new accounts for recruiters and interviewers, 
                  providing them with necessary access. Admins can easily manage user details, set roles, 
                  and ensure smooth onboarding. Streamlining the process, the admin takes charge of maintaining 
                  an efficient platform for all users.
                </p>
                {/* <Loader/> */}
                <img
                  alt="Authenticate block decoration"
                  src={image}
                  className={classnames(
                    `right-0 bottom-[-310px] `,
                    `absolute`,
                    `w-[200px]`,
                    "right-5 bottom-[-230px] absolute w-[150px]",
                    "animate-spin-vertical"
                   )}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
