import { TrashIcon, BriefcaseIcon, AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

import { fetchINTCandidatesByID } from "../../redux/reducer/INTCandidatesSlice";
import { fetchINTAssignedQuestions,deleteQuestionOfInterview, setScore, setNote, markScore} from "../../redux/reducer/INTQuestionsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams, useNavigate } from "react-router-dom";

import { checkCompleteMarkScore } from "../Interviewer/InterviewRecent/Detail/InterviewDetail";

export default function ScorePage() {

   const {id} = useParams();
   const navigate = useNavigate();
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
      if(question.score) setScoreForm(question.score);
      else setScoreForm("");
      if(question.note) setNoteForm(question.note)
      else setNoteForm("");
   }

   const [scoreForm, setScoreForm] = useState("");
   const [noteForm, setNoteForm] = useState("");
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
      if(checkCompleteMarkScore(assignedQuestions)){
         navigate(`/interviewer/interview-recent/${ID}`)
      }
   }, [])

   return (
      <div>
         <div className="flex mt-8 min-h-[500px]">
            <div className="w-5/12 border-2 shadow-xl px-6 py-6 rounded-xl mr-6">
               <div className="flex items-center"> 
                     <div className="">
                        <div className="">
                           <img src={INTSingleCandidate?.avatar} className=" w-[80px] h-[80px] border-4 rounded-full border-green"/>
                        </div>
                     </div>
                     <div className="text-xl ml-6 font-medium">
                           {INTSingleCandidate?.name} 
                     </div>
               </div>
               <div className="">
                  <div className="text-gray-400 mt-5 text-sm">
                     CONTACTS
                  </div>
                  <div className="">
                     <div className="mt-2 text-base">Phone: <span className="text-sm ml-2">{INTSingleCandidate?.phone}</span></div>
                     <div className="text-base">Address: <span className="text-sm ml-2">{INTSingleCandidate?.address}</span></div>
                     <div className="text-base">Birtday: <span className="text-sm ml-2">{INTSingleCandidate?.dateOfBirth}</span></div>
                     <div className="text-base">Email: <span className="text-sm ml-2">{INTSingleCandidate?.email}</span></div>
                  </div>
               </div>
               <hr className="my-5"/>
               <div className="">
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
            <div className="w-7/12 border-2 shadow-xl px-6 py-6 rounded-xl" >
               <div style={{ height: '200px', overflowY: 'scroll' }}>
               <table className="w-full border border-gray-300" >
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
                        <tr onClick={() => {
                              handleClick(item)
                           }} 
                           key={item.questionId} 
                           className={clickedQuestion?.questionId === item.questionId ? 'bg-zinc-100' : 'bg-white'}>
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
               </div>
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
               <div className="flex justify-end mt-4">
                  <Link to={`/interviewer/interview-recent/${ID}`}>
                     <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleMarkScore}>
                           Mark Score
                     </button>
                  </Link>
               </div>
            </div>
      </div>
   </div>
   )
}
