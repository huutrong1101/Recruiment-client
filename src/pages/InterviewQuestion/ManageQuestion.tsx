import {
  PlusCircleIcon, TrashIcon, PencilIcon, ChevronDownIcon
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import QuestionFilter from "./QuestionFilter";
import TechFilter from "./TechFilter";
import SearchBar from "../../components/Search/Search";
import ListQuestions from "./ListQuestion";
import { useState } from "react";
import AddQuestion from "./AddQuestion";
export default function QuestionInterview() {
  const [addQuestion, setAddQuestion] = useState(false)
  const handleOnClick = () => setAddQuestion(false)
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
            <div className="w-full h-fit  ">
              <div className=" gap-x-4 flex justify-between ">
                <div className="flex gap-x-4 ml-12 cursor-pointer w-full">
                  {/* Position */}
                  <div className=" relative flex flex-col w-1/5 h-fit px-2 ">
                    <Menu as="div" className="w-full h-full">
                      <QuestionFilter/>
                    </Menu>
                  </div>

                  {/* Technology */}
                  <div className=" relative flex flex-col w-1/5 h-fit px-2 ">
                    <Menu as="div" className=" w-full h-full ">
                      <TechFilter/>
                    </Menu>
                  </div>
                </div>
                <div className="flex justify-self-end mr-12">
                  <SearchBar></SearchBar>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-2 ">
              <div className=" rounded-lg border-gray-200 border-2 w-11/12 h-fit">
                <div className="overflow-auto px-2">
                  <table className="w-full ">
                    <thead className="w-fit">
                      <tr className="flex justify-between  mt-3 px-6">
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/5 ">Position</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/5 ">Tech</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-2/5 ">Question</th>
                        <th className="text-lg tracking-wide text-left font-semibold basis-1/5 flex justify-center ">Edit</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <div className="grid text-left">
                        <div className="px-4">
                          {ListQuestions.map((question) => (
                            <tr className="flex flex-row  p-2 my-2 text-left text-md cursor-pointer items-center
                                       border-2 border-white hover: hover:border-emerald-600 hover:rounded-lg hover:text-black hover:transition-all "
                              key={question.questionID}>
                              <td className="basis-1/5">{question.position}</td>
                              <td className="basis-1/5">{question.typeQuestion}</td>
                              <td className="basis-2/5 flex-nowrap">{question.interviewQuestions}</td>
                              <td className="inline-flex gap-x-2 basis-1/5 justify-center">
                                <div className="p-2 hover:bg-zinc-300 hover:rounded-md ">
                                  <PencilIcon className="w-5 h-5" />
                                </div>
                                <div className="p-2 hover:bg-zinc-300 hover:rounded-md ">
                                  <TrashIcon className="w-5 h-5" />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </div>
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
    </div>
  );
}
