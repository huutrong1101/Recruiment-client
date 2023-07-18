import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import DashBoardFooter from "../../components/RecFooter/DashboardFooter";
import PopUp from "./PopUp";
import { useState, useEffect } from "react"
import ListQuestions from "./ListQuestion";
import CandidateResume from "./CandidateResume"
import { InterviewQuestion } from "../Interviewer/InterviewerPages";

type Record = {
   questionID: number;
   interviewQuestions: string;
   typeQuestion: string;
   position: string;
};

export default function ScorePage() {
   //-----------ListQuestion----------------------------------------------------
   const [showPopUp, setShowPopUp] = useState(false)
   const [questions, setQuestions] = useState(' ')

   const handleOnClose = () => setShowPopUp(false)
   const handleQuestionClick = (question: any) => {
      setQuestions(question);
   };
   //----------------------------------------------------------------------------
   //------------Pagination------------------------------------------------------
   // const [curPage, setCurPage] = useState(1)
   // const recordsPerPage = 5
   // const lastIndex = curPage * recordsPerPage
   // const firstIndex = lastIndex - recordsPerPage
   // const records = ListQuestions.slice(firstIndex, lastIndex)
   // const numPage = Math.ceil(ListQuestions.length / recordsPerPage)
   // const numbers = [...Array(numPage + 1).keys()].slice(1)
   // const nextPage = () => {
   //     if (curPage !== firstIndex) setCurPage(curPage - 1)
   // }
   // const changeCurPage = (id: any) => {
   //     setCurPage(id)
   // }
   // const prePage = () => {
   //     if (curPage !== lastIndex) setCurPage(curPage + 1)
   // }
   //----------------------------------------------------------------------------- 
   return (
      <div className="flex flex-col justify-center md:flex-row md:items-start md:w-full h-full my-4">
         <div className="w-5/12 h-full bg-white flex flex-col mx-4 my-4 relative ">
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
                     <div className="lg:w-full md:h-[400px] my-4">
                        <div className=" w-full h-fit  md:bottom-0 md:my-3">
                           <div className="gap-y-8 p-4 flex flex-col flex-wrap">
                              <div>Graduation
                                 <div className="w-fit h-fit rounded-lg border-2 border-gray-200">
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                 </div>
                              </div>
                              <div>Acknowlegde
                                 <div className="w-fit h-fit rounded-lg border-2 border-gray-200">
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                 </div>
                              </div>
                              <div>Certification
                                 <div className="w-fit h-fit rounded-lg border-2 border-gray-200">
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                 </div>
                              </div>
                              <div>Work Experience
                                 <div className="w-fit h-fit rounded-lg border-2 border-gray-200">
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
         <div className="w-7/12 h-full  bg-white flex flex-col mx-4 my-4 relative items-center">
            <div className="w-full h-fit bg-white rounded-lg shadow border  border-gray-200 pt-4 ">
               {/* score */}
               {
                  ListQuestions.map((question) => (
                     <div className="flex flex-col " >
                        <div className="flex justify-center my-4" key={question.questionID}>
                           <div className="bg-emerald-600 h-fit w-11/12 rounded-lg p-2 pb-2 relative 
                                    drop-shadow-lg hover:bg-emerald-700 hover:transition-all duration-150 ">
                              <div className="flex flex-col">
                                 <div className=" inline-flex gap-3 w-full h-full ">
                                    <div className=" text-white font-semibold flex flex-col w-full justify-start">Question
                                       <div className="w-full h-[30px] bg-white rounded-md flex items-center p-2 ">
                                          <h2 className="text-black font-semibold">
                                             {question.interviewQuestions}
                                          </h2>
                                       </div>
                                    </div>
                                    <div className="w-[10rem]">
                                       <div className="text-white text-left font-semibold rounded flex flex-col w-fit items-start">Score
                                          <div className="w-full h-[30px] bg-white rounded-md  text-black flex items-center" >
                                             <input type="text" className="w-full text-center rounded-md" />
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
                  ))
               }
               {/* button */}
               <div className="absolute flex top-[-20px] left-[-20px]">
                  <div className="flex flex-row  gap-x-10 pl-2 ">
                     <div className=" w-1/5 ">
                        <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-s-lg drop-shadow-xl mr-4  
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 hover:transition-all duration-150  ">
                           Position
                        </button>
                     </div>
                     <div className=" w-1/5 h-[50px] ">
                        <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-e-lg drop-shadow-xl mr-4  
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 hover:transition-all duration-150  " >
                           Technology
                        </button>
                     </div>
                  </div>
               </div>
               {/* Add question */}
               <div className=" w-2/5 h-fit absolute flex right-[-15px] top-[-20px] justify-end">
                  <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-lg drop-shadow-xl 
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 hover:transition-all duration-150  " >
                     <PlusCircleIcon className="w-5 inline-flex" /> Add Question
                  </button>
               </div>
               <div className="relative h-fit flex flex-row justify-between mx-2 gap-y-2">
                  <div>
                     <ul className="inline-flex gap-x-2 p-3 ">
                        <li className="">
                           <a href="#"></a>
                           Prev
                        </li>
                        <li>
                           <a href="#"></a>
                           1
                        </li>
                        <li>
                           <a href="#"></a>
                           2
                        </li>
                        <li>
                           <a href="#"></a>
                           3
                        </li>
                        <li>
                           <a href="#"></a>
                           Next
                        </li>
                     </ul>
                  </div>
                  {/* send */}
                  <div className="flex flex-row justify-end">
                     <button className="text-white px-10 py-2.5  bg-emerald-600 rounded-lg drop-shadow-lg mx-4 mb-2 transition-all
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 w-1/5 flex justify-center bottom-0 "
                        onClick={() => setShowPopUp(true)}>
                        SEND
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <PopUp onClose={handleOnClose} visible={showPopUp} />
      </div>
   )

}
