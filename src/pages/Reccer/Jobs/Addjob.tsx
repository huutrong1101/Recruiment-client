import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Select from "react-select";
import { Fragment, useEffect, useState } from "react";
import AddJobWidget from "../../../components/RecJob/AddJobWidget";
import Logo from "../../../../images/logo_FPT.png";
import AddJobCard from "../../../components/RecJob/AddJobCard";
import TextareaAutosize from "react-textarea-autosize";
import axiosInstance from "../../../utils/AxiosInstance";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { fetchRecInterviewerSkill } from "../../../redux/reducer/RecInterviewerSilce";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { JobInterface } from "../../../services/services";
import { toast } from "react-toastify";
import { JobService } from "../../../services/JobService";

export default function Addjob() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecInterviewerSkill())
  }, []);
  // console.log(showSkill)
  const listSkills = useAppSelector((state) => state.RecInterviewerList.skill);


  const listSkillsData = listSkills.map((skill) => ({
    value: skill.skillId,
    label: `${skill.name}`,
  }));


  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "" },
    { icon: <MapPinIcon />, name: "Location", value: "" },
    {
      icon: <ComputerDesktopIcon />,
      name: "Position",
      value: "",
    },

  ]);

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number>(0);
  const [description, setDescription] = useState('')
  const [requirement, setRequirement] = useState('')
  const [benefit, setBenefit] = useState('')
  const [skillsRequired, setSkillsRequired] = useState([])
  const [positionName, setPositionName] = useState([])
  const [location, setLocation] = useState([])
  const [jobType, setjobType] = useState([])
  const [salaryRange, setSalaryRange] = useState('')
  const [deadline, setDeadline] = useState('')

  const selectedValues = skillsRequired.map((option) => option.label);

  const handleSelectChange = (selectedOptions: any) => {
    setSkillsRequired(selectedOptions)
  };

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (name === "") {
      toast.error('Please enter Job Name');
      return
    }
    else if (jobType?.length === 0) {
      toast.error('Please select Job Type');
      return
    }
    else if (quantity === 0) {
      toast.error('Please enter Quantity');
      return
    }
    else if (description === "") {
      toast.error('Please enter Description');
      return
    }
    else if (requirement === "") {
      toast.error('Please enter Requirement');
      return
    }
    else if (positionName.length === 0) {
      toast.error('Please select Employee Type');
      return
    }
    else if (benefit === "") {
      toast.error('Please enter Benefit');
      return
    }
    else if (selectedValues.length === 0) {
      toast.error('Please select Skills');
      return
    }
    else if (salaryRange === "") {
      toast.error('Please enter Salary');
      return
    }
    else if (location.length === 0) {
      toast.error('Please select location');
      return
    }
    else if (deadline === "") {
      toast.error('Please enter end day');
      return
    }
    else {
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
      console.log(data)
      navigate({
        pathname: "/recruiter/jobs",
      });
      // Gửi yêu cầu POST đến URL http://localhost:8080/api/v1/recruiter/job
      toast
        .promise(JobService.createJob(data), {
          pending: `Creating Job`,
          success: `Job was created`,
        })
    }
  }

  return (
    <div className={classNames(`job-detail`, `flex flex-col gap-6`)}>
      <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
        {/* Left side description */}
        <form className={classNames(`w-full md:w-8/12`, `flex flex-col gap-6 mt-5`)}>
          {/* Widgets */}
          <AddJobWidget nameData={name} setNameData={setName} quantityData={quantity} setQuantityData={setQuantity} />
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
                id="description"
                minRows={4}
                value={description}
                className="resize-none p-2.5 w-full text-justify bg-white border"
                placeholder="Job description here..."
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
              <h1 className="text-2xl font-semibold">
                Requirement
              </h1>
              <TextareaAutosize
                id="requirement"
                minRows={4}
                value={requirement}
                className="resize-none p-2.5 w-full text-justify bg-white border"
                placeholder="Requirement here..."
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
              <h1 className="text-2xl font-semibold">
                Benefit
              </h1>
              <TextareaAutosize
                id="requirement"
                minRows={4}
                value={benefit}
                className="resize-none p-2.5 w-full text-justify bg-white border"
                placeholder="Requirement here..."
                onChange={(event) => setBenefit(event.target.value)}
              />
            </div>
          </div>

          {/* Skill */}
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
                options={listSkillsData}
                isMulti
                value={skillsRequired}
                onChange={handleSelectChange}
              />
            </div>
          </div>

          <div className={classNames(`px-8 py-8`, `text-justify`)}>
            <button onClick={handleSubmit}
              className="rounded-lg bg-[#059669] hover:bg-green-900 px-4 py-2 mx-2 my-1 text-white"
            // onClick={routeChange}
            >
              Add Job
            </button>
          </div>
        </form>
        {/* Right side description */}
        <div className={classNames(`w-full md:w-3/12 flex-1 relative`)}>
          <AddJobCard
            cardData={jobInformation}
            setCardData={setJobInformation}
            setpositionId={setPositionName}
            setLocation={setLocation}
            setjobType={setjobType}
            salary={salaryRange}
            setSalary={setSalaryRange}
            deadline={deadline}
            setDeadline={setDeadline}
          />
        </div>
      </div>
    </div>
  );
}
