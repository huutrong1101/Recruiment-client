import React from 'react'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { STATUS } from '../../utils/Status'
import Loader from '../../components/Loader/Loader'
import { fetchCandidateInfo } from '../../redux/reducer/CandidateInfoSlice'

export default function CandidateCV() {
   const  candidateInfo  = useAppSelector((state: any) => state.candidateInfo)
   const dispatch = useAppDispatch()


   useEffect(() => {
      dispatch(fetchCandidateInfo())
   }, []);



   return (
      <div>
         {candidateInfo.map((candidate: any) => (
            <div className='flex flex-col m-2'>
               <div className='text-left text-md flex-wrap'>Name{`: ${candidate.fullname}`}</div>
               <div className='text-left text-md flex-wrap'>Gender{`: ${candidate.gender}`}</div>
               <div className='text-left text-md flex-wrap'>Email{`: ${candidate.email}`}</div>
               <div className='text-left text-md flex-wrap'>Phone{`: ${candidate.phone}`}</div>
            </div>
         ))}
      </div>
   )

}
