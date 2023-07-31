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
import { fetchQuestionList } from "../../redux/reducer/QuestionListSlice";
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
import { QuestionListConfig } from "../../services/services";

export type QueryConfig = {
  [key in keyof QuestionListConfig]: string;
};

export default function QuestionInterview() {
  const queryParams: QueryConfig = useQuerParams();
  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "1",
      size: queryParams.size || 3,
      skill: queryParams.skill,
      type: queryParams.type,
      questionsId: queryParams.questionId
    },
    isUndefined,
  );
  const [addQuestion, setAddQuestion] = useState(false)
  const handleOnClick = () => setAddQuestion(false)
  const [prevQueryConfig, setPrevQueryConfig] = useState<QueryConfig>(queryConfig);

  const questions: QuestionListConfig[] = useAppSelector(
    (state) => state.questionList.questionList,
  );

  const { totalQuestions }: any = useAppSelector((state) => state.questionList.questionList);

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalQuestions / Number(queryParams.size ?? 10)),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showQuestion, setShowQuestion] = useState(questions)
  const [dataSearch, setDataSearch] = useState({
    key: "",
    skill: "",
    type: "",
  });

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchQuestion = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance.get(`interviewer/question`);

          // console.log(response.data.result.content)
          setShowQuestion(response.data.result);
          // setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchQuestion();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  // const { questionList, questionListStatus } = useAppSelector((state: any) => state.questionList)
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(fetchQuestionList())
  // }, [])

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
                      <TechFilter />
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
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/5  ">Skill</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/5  ">Type</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-2/5  ">Question</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/5 flex justify-center ">Edit</th>
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
                                  <td className="basis-1/5">{question.skill}</td>
                                  <td className="basis-1/5">{question.typeQuestion}</td>
                                  <td className="basis-2/5 flex-nowrap">{question.content}</td>
                                  <td className="inline-flex gap-x-2 basis-1/5 justify-center">
                                    <button className="p-2 hover:bg-zinc-300 hover:rounded-md ">
                                      <PencilIcon className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 hover:bg-zinc-300 hover:rounded-md "
                                      onClick={e => DeleteQuestion(question.questionId)}
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
                <div className="flex justify-end">
                  <ul className="inline-flex gap-x-2 p-3 ">
                    <li className="px-2 cursor-pointer hover:bg-emerald-100 hover:rounded-md hover:text-black ">
                      <a href="#"></a>
                      Prev
                    </li>
                    <li className="px-2 cursor-pointer hover:bg-emerald-100 hover:rounded-md hover:text-black ">
                      <a href="#"></a>
                      1
                    </li>
                    <li className="px-2 cursor-pointer hover:bg-emerald-100 hover:rounded-md hover:text-black ">
                      <a href="#"></a>
                      2
                    </li>
                    <li className="px-2 cursor-pointer hover:bg-emerald-100 hover:rounded-md hover:text-black ">
                      <a href="#"></a>
                      3
                    </li>
                    <li className="px-2 cursor-pointer hover:bg-emerald-100 hover:rounded-md hover:text-black ">
                      <a href="#"></a>
                      Next
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddQuestion onClick={handleOnClick} observation={addQuestion} />
      {/* <DeleteQuestion id /> */}
    </div>
  );

}
