import React from 'react'
import InterviewerRecent from '../../pages/Interviewer/InterviewRecent/InterviewRecent'
import { data } from "../../data/RecInterviewerDetailData"
import RecInterviewerDetailCard from '../../components/RecInterviewerManageCard/RecInterviewerDetailCard'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function InterviewerDetail() {
    const { id } = useParams();
    const {candidatesRecent} = useSelector((state:any) => state.candidateRecent);
    const candidate = candidatesRecent.find((candidate:any) => candidate.id === parseInt(id || ''));
    return (
      <div>
        <div className='bg-white'>
          {/* <!-- Card --> */
          }
          {
            data.map((items, index) => (
              <div key={index} className=''>
                <RecInterviewerDetailCard userinfor={items.userinfor} listSkills={items.listSkills} personalDetails={items.personalDetails} candidate={candidate}/>
              </div>
            ))}
        </div>
        <div className='pb-10'><InterviewerRecent /></div>

    </div>
  )
}
