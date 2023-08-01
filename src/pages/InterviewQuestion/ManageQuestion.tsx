import {
  PlusCircleIcon, TrashIcon, PencilIcon, ChevronDownIcon
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import QuestionFilter from "./QuestionFilter";
import TechFilter from "./TechFilter";
import ListQuestions from "./ListQuestion";
import { useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { STATUS } from '../../utils/Status';
import Loader from '../../components/Loader/Loader';
import DeleteQuestion from "./DeleteQuestion";
import qs from "query-string";
import { omit, isEqual } from "lodash";
import useQuerParams from "../../hooks/useQueryParams";
import Pagination from "../../components/Pagination/Pagination";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import axiosInstance from "../../utils/AxiosInstance";
import { omitBy, isUndefined } from "lodash";
import { QuestionListConfig, QuestionListInterface } from "../../services/services";
import { useNavigate } from "react-router-dom";
import PaginationInterview from "./PaginationInterview";

export type QueryConfig = {
  [key in keyof QuestionListConfig]: string;
};

export default function QuestionInterview() {
  const queryParams: QueryConfig = useQuerParams();

  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || "1",
      size:  queryParams.size || 3,
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
  const [prevQueryConfig, setPrevQueryConfig] = useState<QueryConfig>(queryConfig);

  const questions: QuestionListInterface[] = useAppSelector((state) => state.questionList.questionList,);

  const { totalQuestions }: any = useAppSelector((state) => state.questionList.questionList);

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalQuestions / Number(queryParams.size || 3)),
  );
  const [isLoading, setIsLoading] = useState(false);

  const [showQuestion, setShowQuestion] = useState(questions)

  const [dataSearch, setDataSearch] = useState({
    key: "",
    skill: "",
    type: "",
  });

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
        // setDataSearch({
        //   ...dataSearch,
        //   skill: queryConfig.skill || "",
        //   type: queryConfig.type || "",
        // });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuesList();
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

  function DeleteQuestion({ id }: any) {
    const conf = window.confirm('Do you make sure delete this question')
    if (conf) {
      return (
        axiosInstance.delete('interviewer/question/' + id)
          .then(res => {
            alert('Question has deleted')
            navigate('interviewer/interview-question')
          }).catch(err => console.log(err))
      )
    }
  }

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
                  {/* Position */}
                  <div className=" relative flex flex-col w-40  h-fit  ">
                    <Menu as="div" className=" h-fit">
                      <TechFilter setDataSearch={setDataSearch} dataSearch={dataSearch} />
                    </Menu>
                  </div>

                  {/* Technology */}
                  <div className=" relative flex flex-col w-40 h-fit  ">
                    <Menu as="div" className=" w-full h-fit ">
                      <QuestionFilter />
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
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/6  ">Skill</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/6  ">Type</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-2/6  ">Question</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-2/6  ">Note</th>
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
                                  <td className="basis-1/6">{question.skill}</td>
                                  <td className="basis-1/6">{question.typeQuestion}</td>
                                  <td className="basis-2/6 flex-nowrap">{question.content}</td>
                                  <td className="basis-2/6 flex-nowrap">{question.note}</td>
                                  <td className="inline-flex gap-x-2 basis-1/6 justify-center">
                                    <button className="p-2 hover:bg-zinc-300 hover:rounded-md ">
                                      <PencilIcon className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 hover:bg-zinc-300 hover:rounded-md "
                                    // onClick={e => DeleteQuestion(question.questionId)}
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
                  <PaginationInterview queryConfig={queryConfig} pageSize={pageSize}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddQuestion onClick={handleOnClick} observation={addQuestion} />
      {/* <DeleteQuestion id={} /> */}

    </div>
  );

}
