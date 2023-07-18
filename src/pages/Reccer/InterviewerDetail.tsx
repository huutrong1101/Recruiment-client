import React from 'react'
import InterviewerRecent from '../../pages/Interviewer/InterviewRecent/InterviewRecent'
import { data } from "../../data/RecInterviewerDetailData"
import RecInterviewerDetailCard from '../../components/RecInterviewerManageCard/RecInterviewerDetailCard'
export default function InterviewerDetail() {
  return (
    <div>
      <div className='bg-white'>
        {/* <!-- Card --> */}
        {
          data.map((items, index) => (
            <div key={index} className=''>
              <RecInterviewerDetailCard userinfor={items.userinfor} listSkills={items.listSkills} personalDetails={items.personalDetails} />
            </div>
          ))}
      </div>
      <div className='pb-10'><InterviewerRecent /></div>

    </div>
  )
}
