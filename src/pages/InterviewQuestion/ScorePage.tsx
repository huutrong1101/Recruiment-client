import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import AddQuestion from "./AddQuestion";
import PopUp from "./PopUp";
import { useState, useEffect } from "react"
import ListQuestions from "./ListQuestion";
import QuestionFilter from "./QuestionFilter";
import TechFilter from "./TechFilter";
import { Menu, Transition } from "@headlessui/react";

export default function ScorePage() {
   //-----------ListQuestion----------------------------------------------------
   const [showPopUp, setShowPopUp] = useState(false)
   const [questions, setQuestions] = useState(' ')
   const [addQuestion, setAddQuestion] = useState(false)
   const handleOnClick = () => setAddQuestion(false)
   const handleSubmit = () => setShowPopUp(false)
   const handleQuestionClick = (question: any) => {
      setQuestions(question);
   };
   return (
      <div>
         <div className="flex flex-col justify-center md:flex-row md:items-start md:w-full h-full my-3  drop-shadow-md">
            {/* left component */}
            <div className="w-5/12 h-full bg-white flex flex-col mx-4 my-4 relative rounded-md  ">
               <div className="  w-full  bg-white rounded-lg shadow border  border-gray-200 ">
                  <div className="w-full h-full">
                     <div className="flex flex-col ">
                        <div className="md:flex flex-row justify-center h-fit relative my-4" >
                           <div className="flex items-center">
                              <img className="rounded-full w-[150px] h-[150px] border-4 border-emerald-600  p-1
                                            md:mb-0 md:auto md:mr-4 md:rounded-full     "
                                 src="../../../../images/cover.jpg" alt="avatar" />
                           </div>
                           <div className=" lg:w-[230px] h-full md:w-[230px] flex relative ">
                              <div className="px-4 h-full w-full flex flex-nowrap flex-col absolute">
                                 <div>Name: Trinh Minh Huy</div>
                                 <div>Age: 23</div>
                                 <div >Position: Fullstack developer</div>
                                 <div>Email: </div>
                                 <div>Contact No: aaaaaaaaa</div>
                              </div>
                           </div>
                        </div>
                        <div className="lg:w-full md:h-[400px] my-2">
                           <div className=" w-full h-fit  md:bottom-0 md:my-3">
                              <div className="gap-y-8 p-4 flex flex-col flex-wrap">
                                 <div>Graduation
                                    <div className="w-fit h-fit rounded-lg border-2 border-gray-200 px-2">
                                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </div>
                                 </div>
                                 <div>Acknowlegde
                                    <div className="w-fit h-fit rounded-lg border-2 border-gray-200 px-2">
                                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </div>
                                 </div>
                                 <div>Certification
                                    <div className="w-fit h-fit rounded-lg border-2 border-gray-200 px-2">
                                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </div>
                                 </div>
                                 <div>Work Experience
                                    <div className="w-fit h-fit rounded-lg border-2 border-gray-200 px-2">
                                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* right component */}
            <div className="w-7/12 h-full  bg-white flex flex-col mx-4 my-4 relative items-center drop-shadow-md rounded-md">
               <div className="w-full h-fit bg-white rounded-lg shadow border  border-gray-200  ">
                  {/* table */}
                  <div className="flex justify-center my-2 ">
                     <div className=" rounded-lg border-gray-200 border-2 w-11/12 h-fit">
                        <div className="overflow-auto px-2">
                           <table className="w-full ">
                              <thead className="w-fit">
                                 <tr className="flex justify-between  mt-3 ml-4 ">
                                    <th className="text-lg tracking-wide text-left font-semibold basis-1/5 ">Position</th>
                                    <th className="text-lg tracking-wide text-left font-semibold basis-1/5 ">Tech</th>
                                    <th className="text-lg tracking-wide text-left font-semibold basis-3/5 ">Question</th>
                                 </tr>
                              </thead>
                              <tbody className="">
                                 <div className="grid text-left">
                                    <div>
                                       {ListQuestions.map((question) => (
                                          <tr className="flex flex-row  p-2 m-2 text-left text-md cursor-pointer 
                                       border-2 border-white hover: hover:border-emerald-600 hover:rounded-lg hover:text-black hover:transition-all duration-100"
                                             key={question.questionID}>
                                             <td className="basis-1/5" onClick={() => handleQuestionClick(question.interviewQuestions)}>{question.position}</td>
                                             <td className="basis-1/5" onClick={() => handleQuestionClick(question.interviewQuestions)}>{question.typeQuestion}</td>
                                             <td className="basis-3/5 flex-nowrap" onClick={() => handleQuestionClick(question.interviewQuestions)}>{question.interviewQuestions}</td>
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
                  {/* score */}
                  <div className="flex flex-col " >
                     <div className="flex justify-center my-2 ">
                        <div className="bg-emerald-600 h-fit w-11/12 rounded-lg p-2 pb-2 relative 
                                    drop-shadow-lg hover:bg-emerald-700 hover:transition-all ">
                           <div className="flex flex-col">
                              <div className=" inline-flex gap-3 w-full h-full ">
                                 <div className=" text-white font-semibold flex flex-col w-full justify-start">Question
                                    <div className="w-full h-[30px] bg-white rounded-md flex items-center p-2 ">
                                       <h2 className="text-black font-semibold transition-all duration-75">
                                          {questions}
                                       </h2>
                                    </div>
                                 </div>
                                 <div className="w-[10rem]">
                                    <div className="text-white text-left font-semibold rounded flex flex-col w-fit items-start">Score
                                       <div className="w-full h-[30px] bg-white rounded-md  text-black flex items-center" >
                                          <input type="number" className="w-full text-center rounded-md" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="w-full ">
                              <textarea className="flex flex-col justify-start w-full h-fit bg-white rounded-md p-2 my-2 text-black break-words resize-none"
                                 placeholder="Note..." ></textarea>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Position - technology */}
                  <div className="absolute flex top-[-20px] left-[-20px] w-5/12">
                     <div className="flex flex-row  gap-x-2.5 pl-2 w-full h-fit">
                        <div className=" w-full flex flex-col relative mt-3">
                           <Menu as="div" className="w-full h-fit">
                              <QuestionFilter />
                           </Menu>
                        </div>
                        <div className=" w-full h-[50px] flex flex-col relative mt-3 ">
                           <Menu as="div" className="w-full h-full">
                              <TechFilter />
                           </Menu>
                        </div>
                     </div>
                  </div>
                  {/* Add question */}
                  <div className=" w-2/5 h-fit absolute flex right-[-15px] top-[-20px] justify-end ">
                     <button className="Text text-white p-2.5 mt-3 bg-emerald-600 rounded-lg shadow-md
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 hover:transition-all duration-200 " onClick={() => setAddQuestion(true)} >
                        <PlusCircleIcon className="w-5 inline-flex" /> Add Question
                     </button>
                  </div>
                  <div className=" h-fit flex flex-row w-11/12 mx-8 justify-between mb-3">
                     {/* Prev - Next */}
                     <div className="inline-flex items-start relative w-fit gap-x-2 ">
                        <div className="flex ">
                           <button className="text-white px-10 py-2.5  bg-emerald-600 rounded-lg drop-shadow-lg mb-2 transition-all duration-200
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 w-fit flex justify-center bottom-0 ">
                              PREV
                           </button>
                        </div>
                        <div className="flex ">
                           <button className="text-white px-10 py-2.5  bg-emerald-600 rounded-lg drop-shadow-lg mb-2 transition-all duration-200
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 w-fit flex justify-center bottom-0 ">
                              NEXT
                           </button>
                        </div>
                     </div>
                     {/* send */}
                     <div className="flex items-end">
                        <button className="text-white px-10 py-2.5  bg-emerald-600 rounded-lg drop-shadow-lg  mb-2 transition-all duration-200
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 w-fit flex justify-center bottom-0 "
                           onClick={() => setShowPopUp(true)}>    SEND
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <PopUp onClose={handleSubmit} visible={showPopUp} />
            <AddQuestion onClick={handleOnClick} observation={addQuestion} />
         </div>
      </div>
   )

}
