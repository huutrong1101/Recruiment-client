import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import RecJobInformationCard from "../../../components/RecJob/ReccerJobInformationCard";
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from "@mui/material";
import Select from "react-select";
import { JobInterface } from "../../../services/services";
import axiosInstance from "../../../utils/AxiosInstance";
import moment from "moment";
import { JOB_POSITION } from "../../../utils/Localization";
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner";
import EditJobWidget from "../../../components/RecJob/EditJobWidget";
import { fetchRecInterviewerSkill } from "../../../redux/reducer/RecInterviewerSilce";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

export default function ReccerJobDetail() {
  //############## Handle Get ##############
  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "" },
    { icon: <MapPinIcon />, name: "Location", value: "" },
    {
      icon: <ComputerDesktopIcon />,
      name: "Job Type",
      value: "Back-end Developer",
    },
    { icon: <BriefcaseIcon />, name: "Experience", value: "" },
    { icon: <AcademicCapIcon />, name: "Qualification", value: "" },
    {
      icon: <CurrencyDollarIcon />,
      name: "Salary",
      value: "",
    },
    {
      icon: <ClockIcon />,
      name: "Posted at",
      value: "",
    },
  ]);
  const { jobId } = useParams();
  const [job, setJob] = useState<JobInterface | null>(null);
  useEffect(() => {
    const getJobDetail = async () => {
      const response = await axiosInstance.get(`recruiter/jobs/${jobId}`); //Viết API cho BE viết lấy 1 job trong list job của reccer
      setJob(response.data.result);
    };
    getJobDetail();
  }, [jobId]);

  useEffect(() => {
    if (job) {
      setJobInformation([
        {
          icon: <UserIcon />,
          name: "Employee Type",
          value: JOB_POSITION[job.jobType],
        },
        {
          icon: <MapPinIcon />,
          name: "Location",
          value: JOB_POSITION[job.location],
        },
        {
          icon: <ComputerDesktopIcon />,
          name: "Job Type",
          value: JOB_POSITION[job.position.name],
        },
        {
          icon: <CurrencyDollarIcon />,
          name: "Salary",
          value: job.salaryRange,
        },
        {
          icon: <ClockIcon />,
          name: "End At",
          value: moment(job.deadline).format("Do MMM, YYYY"),
        },
      ]);
    }
  }, [job]);

  const navigate = useNavigate();
  const deleteJob = async () => {
    const response = await axiosInstance.delete(`/recruiter/job/${jobId}`);
    await axiosInstance.delete(`/recruiter/job/${jobId}`);
    alert(response.data.message); // In ra thông tin phản hồi từ máy chủ
    navigate({
      pathname: "/recruiter/jobs",
    });
  };
  const routeChange = () => {
    let path = `./edit`;
    navigate(path);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const skills = job?.skills.map((item) => item.name);
  // ############## Handle Put ##############
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecInterviewerSkill());
  }, []);
  // console.log(showSkill)
  const listSkills = useAppSelector((state) => state.RecInterviewerList.skill);

  const listSkillsData = listSkills.map((skill: any) => ({
    value: skill.skillId,
    label: `${skill.name}`,
  }));

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [benefit, setBenefit] = useState("");
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [positionName, setPositionName] = useState([]);
  const [location, setLocation] = useState([]);
  const [jobType, setjobType] = useState([]);
  const [salaryRange, setSalaryRange] = useState("");
  const [deadline, setDeadline] = useState("");
  const selectedValues = skillsRequired.map((option) => option.label);
  const handleSelectChange = (selectedOptions: any) => {
    setSkillsRequired(selectedOptions);
  };
  const handleSubmit = (event: any) => {
    // navigate({
    //   pathname: `/recruiter/jobs/`
    // });
    event.preventDefault();
    const data = {
      name: name,
      jobType: jobType,
      quantity: quantity,
      benefit: benefit,
      salaryRange: salaryRange,
      requirement: requirement,
      location: location,
      description: description,
      deadline: deadline,
      positionName: positionName,
      skillsRequired: selectedValues,
    };
    navigate({
      pathname: "/recruiter/jobs",
    });
    // Gửi yêu cầu POST đến URL http://localhost:8080/api/v1/recruiter/job
    axiosInstance
      .post("recruiter/job", data)
      .then((response) => {
        alert("Successful");
        // Xử lý phản hồi từ server (nếu cần)
        console.log(response.data); // In ra thông tin phản hồi từ máy chủ
        // In tất cả thông tin từ FormData
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className={classNames(`job-detail`, `flex flex-col gap-6`)}>
        {job ? (
          <>
            <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
              {/* Left side description */}
              <div
                className={classNames(
                  `w-full md:w-8/12`,
                  `flex flex-col gap-6 mt-2`,
                )}
              >
                {/* Widgets */}
                <EditJobWidget
                  nameData={job?.name}
                  setNameData={setName}
                  quantityData={quantity}
                  setQuantityData={setQuantity}
                />
                {/* Details */}
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Job description</h1>
                    <TextareaAutosize
                      minRows={4}
                      value={job?.description}
                      className="resize-none p-2.5 w-full text-justify bg-white border"
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </div>
                </div>

                {/* Requirement */}
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Requirement</h1>
                    <TextareaAutosize
                      minRows={4}
                      value={job?.requirement}
                      className="resize-none p-2.5 w-full text-justify bg-white border"
                      onChange={(event) => setRequirement(event.target.value)}
                    />
                  </div>
                </div>

                {/* Benefit */}
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Benefit</h1>
                    <TextareaAutosize
                      minRows={4}
                      value={job?.benefit}
                      className="resize-none p-2.5 w-full text-justify bg-white border"
                      onChange={(event) => setBenefit(event.target.value)}
                    />
                  </div>
                </div>

                {/* Skill */}
                {/* <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Skills Require</h1>
                    <div className="flex flex-wrap p-4">
                      {job?.skills.map((item, index) => (
                        <div key={index}>
                          <span
                            key={index}
                            className="rounded-lg bg-[#78AF9A] bg-opacity-40 p-2 mx-2 my-1 text-[#218F6E]"
                          >
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
                <div
                  className={classNames(
                    `border bg-white shadow-sm rounded-xl`,
                    `px-8 py-8`,
                    `text-justify`,
                  )}
                >
                  <div>
                    <h1 className="text-2xl font-semibold">Skills Require</h1>
                    <Select
                      // defaultValue={listSkillsData[1]}
                      options={listSkillsData}
                      isMulti
                      value={skillsRequired}
                      onChange={handleSelectChange}
                    />
                  </div>
                </div>
                {/* /Skill */}
                <div className={classNames(`flex`)}>
                  <div className={classNames(`px-8 py-8`, `text-justify`)}>
                    <button
                      onClick={handleSubmit}
                      className="rounded-lg bg-[#059669] hover:bg-green-900 px-4 py-2 mx-2 my-1 text-white"
                      // onClick={routeChange}
                    >
                      Save
                    </button>
                  </div>
                  <div className={classNames(`py-8`, `text-justify`)}>
                    <button
                      className="rounded-lg bg-red-700 hover:bg-red-900 px-4 py-2 mx-2 my-1 text-white"
                      // onClick={deleteJob}
                      onClick={handleClickOpen}
                    >
                      Delete Job
                    </button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        className="text-center"
                      >
                        <p className="font-extrabold pt-4">Delete Job</p>
                      </DialogTitle>
                      <DialogContent className="text-center">
                        <div className="text-center px-6">
                          <DialogContent className="font-semibold text-lg mb-2">
                            Are you sure you want to delete "{job.name}"?
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
                        <button
                          className="rounded-lg bg-[#059669] hover:bg-green-900 px-4 py-2 mx-1 my-1 text-white"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                        <button
                          className="rounded-lg bg-red-700 hover:bg-red-900 px-4 py-2 mx-1 my-1 text-white"
                          onClick={deleteJob}
                          autoFocus
                        >
                          Delete
                        </button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
              {/* Right side description */}
              <div className={classNames(`w-full md:w-3/12 flex-1 relative`)}>
                <RecJobInformationCard cardData={jobInformation} />
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center mt-5">
            <LoadSpinner className="text-3xl" />
          </div>
        )}
      </div>
    </>
  );
}
