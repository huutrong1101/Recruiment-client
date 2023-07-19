import React from 'react'
import InterviewerRecent from '../../pages/Interviewer/InterviewRecent/InterviewRecent'
import { data } from "../../data/RecInterviewerDetailData"
import RecInterviewerDetailCard from '../../components/RecInterviewerManageCard/RecInterviewerDetailCard'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
export default function InterviewerDetail() {
  const {id} = useParams();
  const {candidatesRecent} = useAppSelector((state:any) => state.candidateRecent);
  const interviewer = candidatesRecent.find((interviewer : any) => interviewer.id === parseInt(id || ''));
  return (
    <div>
      <div className='bg-white'>
        {/* <!-- Card --> */}
{/*               <RecInterviewerDetailCard userinfor={items.userinfor} listSkills={items.listSkills} personalDetails={items.personalDetails} />
 */}    <RecInterviewerDetailCard interviewer={interviewer} />

      </div>
      <div className='pb-10'><InterviewerRecent /></div>

    </div>
  )
}
