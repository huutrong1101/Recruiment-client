import { ChevronDownIcon } from "@heroicons/react/24/outline";
import QuestionFilter from './QuestionFilter';
import { Menu, Transition } from "@headlessui/react";
import { postCreateQuestion } from "../../redux/reducer/CreateQuestion";
import { Fragment, useEffect, useState } from "react";
import qs from "query-string";
import { omit, isEqual } from "lodash";
import useQuerParams from "../../hooks/useQueryParams";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import axiosInstance from "../../utils/AxiosInstance";
import { omitBy, isUndefined } from "lodash";
import { QuestionListConfig, QuestionListInterface, SkillListInterface, TypeListInterface } from "../../services/services";
import { createSearchParams, useNavigate } from "react-router-dom";
import classNames from 'classnames';
import { TYPE_alter } from "../../utils/Localization";
import { useAppSelector } from '../../hooks/hooks';
import { input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { InterviewService } from "../../services/InterviewService";

interface Skill {
  skillId: string;
  name: string;
}

export default function AddQuestion({ observation, onClick }: any) {
  const [addQuestion, setAddQuestion] = useState('')

  const [dataSearch, setDataSearch] = useState({
    skill: "",
    type: "",
  });

  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const skills: QuestionListInterface[] = useAppSelector((state) => state.questionList.skills);
  const types: QuestionListInterface[] = useAppSelector((state) => state.questionList.types);

  const [showSkills, setShowSkills] = useState(skills)
  const [showTypes, setShowTypes] = useState(types)

  const [triggeredSkill, setTriggeredSkill] = useState(false)
  const [triggeredType, setTriggeredType] = useState(false)

  const handleTriggerSkill = (e: any) => {
    setTriggeredSkill(!triggeredSkill)
  }
  const handleTriggerType = (e: any) => {
    setTriggeredType(!triggeredType)
  }


  const [inputData, setInputData] = useState({ note: " ", content: " ", type: "", skill: "" })

  useEffect(() => {
    const fetchSkillType = async () => {
      const response = await axiosInstance(`interviewer/skills`);
      const res = await axiosInstance(`interviewer/type-questions`)
      setShowTypes(res.data.result)
      setShowSkills(response.data.result);
      setDataSearch({
        ...dataSearch,
        // skill: queryConfig.skill || "",
        // type: queryConfig.type || "",
      });

    };
    fetchSkillType();
  }, []);

  const [isActive, setIsActive] = useState(false)
  const handleActive = (e: any) => setIsActive(!isActive)

  const handleOnClick = (event: any) => {
    if (event.target.id === 'container' || event.target.id === 'Submit') onClick()
  }


  const handleSubmitAdd = (e: any) => {
    e.preventDefault()
    const foundSkill: any = showSkills.find((skill) => skill.name === inputData.skill);

    const data = {
      "content": inputData.content,
      "note": inputData.note,
      "typeQuestion": inputData.type,
      "skillId": foundSkill.skillId 
    };

    // data.content === ' ' && data.note === ' ' ? alert('Please fill your full content and note') : (navigate(""))


    if (data.content === " ") {
      toast
        .promise(InterviewService.error(data.content), {
          error: "Please fill full question information and reload page"
        })
    }
    // data.typeQuestion === " " || data.skillId === " "
    else if (!triggeredType) {
      toast
        .promise(InterviewService.error(data.typeQuestion), {
          error: "Please select Type "
        })
    }
    else if (!triggeredSkill) {
      toast
        .promise(InterviewService.error(data.skillId), {
          error: "Please select Skill "
        })
    }
    
    else {
      toast
        .promise(InterviewService.createQuestion(data), {
          pending: "Adding the question",
          success: "The question was added. Please RELOAD page",
          error: "Please fill full question information"
        })
    }
  }



  if (!observation) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center rounded-lg z-20 '
      id='Submit' onClick={handleOnClick}>
      <div className='w-1/2 h-3/4 rounded-lg bg-white drop-shadow-md flex flex-col relative'>
        <div className='flex justify-start m-5 font-medium text-lg'>
          Add Question
        </div>
        <div className='mx-5 font-normal text-md my-3'>Content</div>
        <div className='flex flex-col gap-y-5 w-full items-center'>
          <div className='w-11/12 p-2 h-fit mx-5 border-2 border-emerald-600 rounded-md'>
            <textarea className='resize-none w-full flex outline-none h-[20vh]'
              placeholder='Question here' onChange={e => setInputData({ ...inputData, content: e.target.value })}
            >
            </textarea>
          </div>
        </div>
        <div className='flex h-full'>
          <div className='flex flex-col w-3/5 h-[83%] '>
            <div className='mx-5 font-normal text-md my-1'>Note</div>
            <div className="w-full h-full flex justify-center">
              <div className='w-11/12 h-full ml-6 border-2 border-emerald-600 rounded-md  p-2 '>
                <textarea className='w-full resize-none outline-none h-full ' placeholder='Answer'
                  onChange={e => setInputData({ ...inputData, note: e.target.value })}
                ></textarea>
              </div>
            </div>

          </div>
          {/* skill button */}
          <div className='flex flex-col w-2/5 p-2 relative'>
            <div className=' font-normal text-md'>Skill</div>
            <Menu as='div' className='w-full h-[25%] relative flex flex-col z-10'>
              <div className=" relative flex flex-col  ">
                <Menu as="div" className=" h-fit">
                  <div className='absolute w-2/3  '>
                    <div className='w-full h-full  '>
                      <Menu.Button className='w-full p-3  bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600 
                                 active:bg-white flex items-center' onClick={handleActive}>
                        <div className=' inline-flex justify-between w-full '>
                          {inputData.skill || "Skill"}
                          <ChevronDownIcon className='w-5 h-5 pt-1' />
                        </div>
                      </Menu.Button>
                      <Transition as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95" >
                        <Menu.Items className='flex flex-col items-start rounded-md w-full h-full bg-gray-200 aboslute bg-opacity-90 shadow-md cursor-pointer'>
                          <div className='w-full h-full  text-black rounded-md border border-zinc-200'>
                            {showSkills.map((skill: any) => (
                              <Menu.Item key={skill.skillId}>
                                {({ active }) => (
                                  <p
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900 bg-opacity-80 "
                                        : "text-gray-700", "p-2",
                                      "block  text-sm",
                                    )}
                                    // onClick={() => handleSetTech(type)}

                                    onClick={() => {
                                      // handleActive
                                      setTriggeredSkill(true)
                                      setInputData({ ...inputData, skill: skill.name })
                                    }}
                                  >
                                    {skill.name}
                                  </p>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items >
                      </Transition>
                    </div>
                  </div>
                </Menu>
              </div>
            </Menu>
            {/* Type button */}
            <div className=' font-normal text-md mt-2'>Type</div>
            <Menu as='div' className='w-full h-[25%] relative flex flex-col'>
              <div className='absolute w-2/3  '>
                <Menu.Button className='w-full h-fit p-3 my-1 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600 
                                 active:bg-white flex items-center' onClick={handleActive}>
                  <div className=' inline-flex justify-between w-full '>
                    {TYPE_alter[inputData.type] || "Type"}
                    <ChevronDownIcon className='w-5 h-5 pt-1' />
                  </div>
                </Menu.Button>
                <Transition as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95" >
                  <Menu.Items className='flex flex-col items-start rounded-md w-full h-full bg-gray-200 bg-opacity-80 aboslute shadow-md cursor-pointer '>
                    <div className='w-full h-full  text-black rounded-md border border-zinc-200'>
                      {showTypes.map((type: any, index: any) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900 bg-opacity-80 "
                                  : "text-gray-700", "p-2",
                                "block  text-sm",
                              )}
                              onClick={() => {
                                // handleActive
                                setTriggeredType(true)
                                setInputData({ ...inputData, type: type })
                              }}
                            >
                              {TYPE_alter[type]}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items >
                </Transition>
              </div>
            </Menu>
            <div className='w-full h-1/5 font-normal text-md my-6  px-3'>
              <div className='w-full h-full flex justify-end items-end '>
                <button className=' w-fit h-fit px-6 py-2 bg-emerald-600 rounded-md text-white border border-transparent
                                hover:border-emerald-600  hover:text-emerald-600 
                                hover:transition-all hover:bg-white active:bg-zinc-200 active:border-emerald-600 active:drop-shadow-md'
                  id='Submit' onClick={handleSubmitAdd}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
