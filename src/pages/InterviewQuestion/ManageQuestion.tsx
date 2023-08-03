import {
  PlusCircleIcon, TrashIcon, PencilIcon, ChevronDownIcon
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import qs from "query-string";
import { omit, isEqual } from "lodash";
import useQuerParams from "../../hooks/useQueryParams";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import axiosInstance from "../../utils/AxiosInstance";
import { omitBy, isUndefined } from "lodash";
import { QuestionListConfig, QuestionListInterface, SkillListInterface, TypeListInterface } from "../../services/services";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import PaginationInterview from "./PaginationInterview";
import classNames from 'classnames';
import  {TYPE_alter}  from "../../utils/Localization";
import UpdateQuestion from "./UpdateQuestion";

export type QueryConfig = {
  [key in keyof QuestionListConfig]: string;
};

export default function QuestionInterview() {

  const [dataSearch, setDataSearch] = useState({
    skill: "",
    type: "",
  });

  const queryParams: QueryConfig = useQuerParams();

  const queryConfig: QueryConfig = omitBy({
    page: queryParams.page || "1",
    size: queryParams.size || 5,
    skill: queryParams.skill,
    type: queryParams.type,
    note: queryParams.note,
    content: queryParams.content
  },
    isUndefined,
  );

  const navigate = useNavigate()

  const [addQuestion, setAddQuestion] = useState(false)
  const handleOnClick = () => setAddQuestion(false)

  const [updateQuestion, setUpdateQuestion] = useState(false)
  const handleUpdateClick = () => setUpdateQuestion(false)

  const [isActive, setIsActive] = useState(false)
  const handleActive = (e: any) => setIsActive(!isActive)

  const [prevQueryConfig, setPrevQueryConfig] = useState<QueryConfig>(queryConfig);
  const { totalQuestions }: any = useAppSelector((state) => state.questionList.questionList);
  const questions: QuestionListInterface[] = useAppSelector((state) => state.questionList.questionList,);
  const skills: QuestionListInterface[] = useAppSelector((state) => state.questionList.skills);
  const types: QuestionListInterface[] = useAppSelector((state) => state.questionList.types);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalQuestions / Number(queryParams.size || 5)),
  );

  const [isLoading, setIsLoading] = useState(false);

  const [showQuestion, setShowQuestion] = useState(questions)
  const [showSkills, setShowSkills] = useState(skills)
  const [showTypes, setShowTypes] = useState(types)

  const [questionID, setQuestionID] = useState([])
  // const handleSearch = () => {
  //   try {
  //     setIsLoading(true);
  //     navigate({
  //       pathname: "/interviewer/question",
  //       search: createSearchParams({
  //         ...queryConfig,
  //         type: dataSearch.type,
  //         skill: dataSearch.skill,
  //         page: "1",
  //       }).toString(),
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  useEffect(() => {
    const fetchQuesList = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`interviewer/question?${query}`);
          setShowQuestion(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuesList();
  }, []);

  useEffect(() => {
    const fetchSkillType = async () => {
      setIsLoading(true)
      const resSkill = await axiosInstance(`interviewer/skills`);
      const resType = await axiosInstance(`interviewer/type-questions`)
      setShowTypes(resType.data.result)
      setShowSkills(resSkill.data.result);
      // setDataSearch({
      //   ...dataSearch,
      //   skill: queryConfig.skill || "",
      //   type: queryConfig.type || "",
      // });
    };
    fetchSkillType();
  }, []);


  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchQuestionPagination = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`interviewer/question?${query}`);
          setShowQuestion(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchQuestionPagination();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  function DeleteQuestion(id) {
    const conf = window.confirm('Do you make sure delete this question')
    if (conf) {
      console.log(id)
      return (
        axiosInstance.delete(`interviewer/question/${id}`)
          .then(res => {
            alert('Question has deleted')
            navigate('interviewer/interview-question')
            // setShowQuestion(res.data.result.content)
            window.history.back()
          }).catch(err => console.log(err))
      )
    }
  }

  console.log(showTypes)


  return (
    <div className="my-4 ">
      <div className="bg-white border border-gray-200 rounded-md drop-shadow-md min-h-[calc(100vh-72px-2rem)] ">
        <div className="flex flex-col">
          <div className="my-4 flex justify-center">
            <div className="inline-flex w-11/12 justify-between">
              <div className="flex items-center ">
                <div className=" w-fit h-fit font-semibold text-2xl ">Interview Questions</div>
              </div>
              <div className="w-fit h-fit ">
                <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-lg drop-shadow-xl
                                  text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                  border-transparent border hover:border-emerald-600 hover:transition-all duration-200"
                  onClick={() => setAddQuestion(true)} >
                  <PlusCircleIcon className="w-5 inline-flex" /> Add Question
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full">
            <div className="w-full h-fit   ">
              <div className=" gap-x-4 flex w-full h-full">
                <div className="flex gap-x-6 ml-20 mb-4 cursor-pointer w-full">
                  {/* Skill */}
                  <div className=" relative flex flex-col w-40  h-fit  ">
                    <Menu as="div" className=" h-fit">
                      {/* <TechFilter setDataSearch={setDataSearch} dataSearch={dataSearch} skills={skills} /> */}
                      <div className='absolute w-full'>
                        <div className='w-full h-full  '>
                          <Menu.Button className='w-full p-1.5 mb-1 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600 
                                 active:bg-white flex items-center' onClick={handleActive}>
                            <div className=' inline-flex justify-between w-full '>
                              {dataSearch.skill || "Skill"}
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
                            <Menu.Items className='flex flex-col items-start rounded-md w-full h-full bg-gray-200 aboslute bg-opacity-90 shadow-md '>
                              <div className='w-full h-full  text-black rounded-md border border-zinc-200'>
                                {showSkills.map((skill: any) => (
                                  <Menu.Item key={skill.skillId}>
                                    {({ active }) => (
                                      <Link
                                        to={{
                                          pathname: "/interviewer/question",
                                          search: createSearchParams({
                                            ...queryConfig,
                                            skill: skill.name,
                                          }).toString(),
                                        }}
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900 bg-opacity-80"
                                            : "text-gray-700", "p-2",
                                          "block  text-sm",
                                        )}
                                        // // onClick={() => handleSetTech(type)}
                                        onClick={() => {
                                          // handleActive
                                          setDataSearch({
                                            ...dataSearch,
                                            skill: skill.name
                                          })
                                        }
                                        }
                                      >
                                        {skill.name}
                                      </Link>
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

                  {/* Type */}
                  <div className=" relative flex flex-col w-40 h-fit  ">
                    <Menu as="div" className=" w-full h-fit ">
                      {/* <QuestionFilter setDataSearch={setDataSearch} dataSearch={dataSearch} types={types} /> */}
                      <div className='absolute w-full '>
                        <Menu.Button className='w-full h-fit p-1.5 mb-1 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600 
                                 active:bg-white flex items-center' onClick={handleActive}>
                          <div className=' inline-flex justify-between w-full '>
                            {TYPE_alter[dataSearch.type] || "Type"}
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
                          <Menu.Items className='flex flex-col items-start rounded-md w-full h-full bg-gray-200 bg-opacity-80 aboslute shadow-md  '>
                            <div className='w-full h-full  text-black rounded-md border border-zinc-200'>
                              {showTypes.map((type: any, index: any) => (
                                <Menu.Item key={index}>
                                  {({ active }) => (
                                    <Link
                                      to={{
                                        pathname: "/interviewer/question",
                                        search: createSearchParams({
                                          ...queryConfig,
                                          type: type,
                                        }).toString(),
                                      }}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900 bg-opacity-80"
                                          : "text-gray-700", "p-2",
                                        "block  text-sm",
                                      )}
                                      onClick={() => {
                                        setDataSearch({
                                          ...dataSearch,
                                          type: type
                                        })

                                      }}
                                    >
                                      {TYPE_alter[type]}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items >
                        </Transition>
                      </div>
                    </Menu>
                  </div>
                </div>
                <div className="flex justify-self-end mr-12">
                  {/* <SearchBar></SearchBar> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-2 ">
              <div className=" rounded-lg border-gray-200 border-2 w-11/12 ">
                <div className="overflow-auto px-2 min-h-[60vh] max-h-[60vh]">
                  <table className="w-full ">
                    <thead className="w-fit">
                      <tr className="flex justify-center px-4 mt-3">
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/6 mx-3 ">Skill</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/6 mx-3 ">Type</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-2/6 mx-3 ">Question</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-2/6 mx-3 ">Note</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/6 flex justify-center ">Edit</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <div className="grid text-left">
                        {isLoading ? (
                          <div className="flex justify-center mb-10">
                            <LoadSpinner className="text-3xl" />
                          </div>
                        ) : (
                          <div className="px-4">
                            {showQuestion.length > 0 ? (
                              showQuestion.map((question: any) => (
                                <tr className="flex flex-row py-2 my-2 text-left text-md cursor-pointer items-center
                                              border-2 border-white hover: hover:border-emerald-600 hover:rounded-lg hover:text-black hover:transition-all "
                                  key={question.questionId}>
                                  <td className="basis-1/6 mx-3">{question.skill}</td>
                                  <td className="basis-1/6 mx-3">{question.typeQuestion}</td>
                                  <td className="basis-2/6 mx-3 flex-nowrap">{question.content}</td>
                                  <td className="basis-2/6 mx-3 flex-nowrap">{question.note}</td>
                                  <td className="inline-flex gap-x-2 basis-1/6 justify-center">
                                    <button className="p-2 hover:bg-zinc-300 hover:rounded-md "
                                      onClick={() => {
                                        setUpdateQuestion(true)
                                        setQuestionID(question.questionId)
                                      }}>
                                      
                                      <PencilIcon className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 hover:bg-zinc-300 hover:rounded-md "
                                      onClick={() => DeleteQuestion(question.questionId)}
                                    >
                                      <TrashIcon className="w-5 h-5" />
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <div className="flex justify-center w-full mb-10">
                                <span>Không tìm thấy kết quả</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </tbody>
                  </table>
                </div>
                {/* pagination */}
                <div className="flex justify-end m-4">
                  <PaginationInterview queryConfig={queryConfig} pageSize={pageSize} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddQuestion onClick={handleOnClick} observation={addQuestion} />
      <UpdateQuestion onClick={handleUpdateClick} observation={updateQuestion} questionID={questionID} />{/* questionID={question.questionId*/}
      
    </div>
  );
}
