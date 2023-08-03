import { TrashIcon, BriefcaseIcon, AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

import { useState, useEffect } from "react"
import { Menu, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchQuestionList } from "../../redux/reducer/QuestionListSlice";
import { STATUS } from '../../utils/Status';
import Loader from '../../components/Loader/Loader';
import qs from "query-string";
import { omit, isEqual } from "lodash";
import useQuerParams from "../../hooks/useQueryParams";
import Pagination from "../../components/Pagination/Pagination";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { omitBy, isUndefined } from "lodash";
import { QuestionListConfig, QuestionListInterface } from "../../services/services";
import axiosInstance from "../../utils/AxiosInstance";

export type QueryConfig = {
   [key in keyof QuestionListConfig]: string;
};

import { fetchINTCandidatesByID } from "../../redux/reducer/INTCandidatesSlice";
import { fetchINTAssignedQuestions,deleteQuestionOfInterview, setScore, setNote, markScore} from "../../redux/reducer/INTQuestionsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams } from "react-router-dom";

export default function ScorePage() {

   const {id} = useParams();
   const ID : string = id!;

   const [clickedQuestion, setClickedQuestion] = useState<any>();

   const {INTSingleCandidate, INTSingleCandidateStatus} = useAppSelector((state:any) => state.INTCandidates)
   const dispatch = useAppDispatch();
   const {assignedQuestions, assignedQuestionsStatus} = useAppSelector((state: any) => state.INTQuestions);

   const handleDelete = (question : any) => {
      dispatch(deleteQuestionOfInterview({ID, question}));
  }
   const handleClick = (question : any) => {
      setClickedQuestion(question);
      setScoreForm(question.score);
      setNoteForm(question.note)
   }

   const [scoreForm, setScoreForm] = useState();
   const [noteForm, setNoteForm] = useState();
   const handleChangeScore = (questionId: any, event : any) =>{
      const value = event.target.value;
      setScoreForm(value); 
      dispatch(setScore({questionId, value}))
   }
   const handleChangeNote = (questionId: any, event : any) =>{
      const value = event.target.value;
      setNoteForm(value);
      dispatch(setNote({questionId, value}))
   }

   const handleMarkScore = () => {
      dispatch(markScore({ID, assignedQuestions}))
   }

   useEffect(() => {
      dispatch(fetchINTCandidatesByID(id));
      dispatch(fetchINTAssignedQuestions(id));
   }, [])

   return (
      <div>
         <div className="flex mt-8 min-h-[500px]">
            <div className="w-5/12 border-2 px-4 rounded-xl mr-10">
               <div className="flex"> 
                     <div className="w-4/12 flex items-center">
                        <div className=" pt-[2rem]">
                           <img src={INTSingleCandidate?.avatar} className=" w-[120px] h-[120px] border-4 rounded-full border-green"/>
                        </div>
                     </div>
                     <div className="w-8/12 ml-2">
                        <div className="flex pt-[2rem]">
                           <div className="text-2xl mr-4">
                                 {INTSingleCandidate?.fullName} 
                           </div>
                        </div>
                        <div className="text-gray-400 mt-5 text-sm">
                           contacts___________________________
                        </div>
                        <div className="ml-4">
                           <div className="mt-2 text-base">Phone: <span className="text-sm ml-2">{INTSingleCandidate?.phone}</span></div>
                           <div className="text-base">Address: <span className="text-sm ml-2">{INTSingleCandidate?.address}</span></div>
                           <div className="text-base">Birtday: <span className="text-sm ml-2">{INTSingleCandidate?.dateOfBirth}</span></div>
                           <div className="text-base">Email: <span className="text-sm ml-2">{INTSingleCandidate?.email}</span></div>
                        </div>
                     </div>
               </div>
               <hr className="my-5"/>
               <div className="pl-[2rem]">
                  <div className="text-gray-400">
                     Educations
                  </div>
    
                  {
                     INTSingleCandidate.educations?.map((item : any) => (
                        <div className="ml-4">
                              <div className="mt-2 text-sm">{item.schoolName}</div>
                              <div className="text-gray-500 text-xs flex ml-2">
                                 <AcademicCapIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> {item.certificate}
                              </div>
                        </div>
                     ))
                  }
    
                  <div className="text-gray-400 mt-3 mb-2">
                     Experiences
                  </div>
    
                  {
                     INTSingleCandidate.experiences?.map((item : any) => (
                        <div className="ml-4">
                              <div className="mt-2 text-sm">{item.companyName}</div>
                              <div className="text-gray-500 text-xs flex ml-2">
                                 <BriefcaseIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> {item.position}
                              </div>
                              <div className="text-gray-500 text-xs flex ml-2">
                                 <CheckBadgeIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> {item.time}
                              </div>
                        </div>
                     ))
                  }

                  <div className="text-gray-400 mt-3 mb-2">
                     Skills
                  </div>
                  <div className="flex">
                     { 
                        INTSingleCandidate.jobSkills?.map((item : any) => (
                              <div className="text-white text-sm mr-2 bg-green-600 hover:bg-green-800 px-2 py-1 rounded-xl">{item.name}</div>
                        ))
                     }
                  </div>
               </div>
            </div>
            <div className="w-7/12 border-2 px-4 rounded-xl">
               <table className="w-full table-auto border-collapse border border-gray-300 rounded mt-5">
                  <thead>
                  <tr className="bg-gray-200">
                     <th className="px-4 py-2">Question</th>
                     <th className="px-4 py-2">Type</th>
                     <th className="px-4 py-2">Skill</th>
                     <th className="px-4 py-2">Button</th>
                  </tr>
                  </thead>
                  <tbody>
                     {assignedQuestions?.map((item: any) => (
                        <tr onClick={() => {handleClick(item)}} key={item.questionId} className="bg-white">
                        <td className="px-4 py-2">{item.content}</td>
                        <td className="px-4 py-2">{item.typeQuestion}</td>
                        <td className="px-4 py-2">{item.skill}</td>
                        <td className="px-4 py-2">
                          <TrashIcon onClick={() => {handleDelete(item)}}  className="ml-3 cursor-pointer w-5 h-5 text-gray-500"/>
                        </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="bg-green-600 px-5 py-5 mt-4 rounded-xl">
                  <div className="flex">
                     <div className="w-9/12 bg-white rounded-xl px-2 py-2">
                        {clickedQuestion?.content}
                     </div>
                     <div className="w-3/12 ml-4">
                        <div><label htmlFor="score" className="text-white text-xl">Score: </label></div>
                        <input value={scoreForm} type="number" id="score" className="bg-white rounded-xl px-2 py-2 mt-1" 
                         onChange={(event) => handleChangeScore(clickedQuestion?.questionId, event)}
                         required min="0" max="10"></input>
                     </div>
                  </div>
                  <div>
                     <div><label htmlFor="note" className="text-white text-xl mt-2">Note: </label></div>
                     <textarea value={noteForm} id="note" onChange={(event) => handleChangeNote(clickedQuestion?.questionId, event)}
                     className="w-full bg-white rounded-xl px-2 py-2 min-h-[100px] mt-1"></textarea> 
                  </div>
               </div>
               <div className="flex justify-end mt-4 mb-4">
                  <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleMarkScore}>
                        Mark Score
                  </button>
               </div>
            </div>
      </div>
   </div>
   )
}
