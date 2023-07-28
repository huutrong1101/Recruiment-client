import React, { useEffect, useState } from 'react'
import InterviewerRecent from '../../pages/Interviewer/InterviewRecent/InterviewRecent'
import { data } from "../../data/RecInterviewerDetailData"
import RecInterviewerDetailCard from '../../components/RecInterviewerManageCard/RecInterviewerDetailCard'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { RecInterviewerInterface } from '../../services/services'
import axiosInstance from '../../utils/AxiosInstance'
export default function InterviewerDetail() {
  return (
    <div>
      <div className='bg-white'>
        <RecInterviewerDetailCard/>
      </div>
      <div className='pb-10'><InterviewerRecent /></div>
    </div>
  );
}
