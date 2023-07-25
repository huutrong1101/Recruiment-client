import React, {useEffect} from 'react'
import { data } from "../../data/RecInterviewerManagementData";
import RecInterviewerCard from "../../components/RecInterviewerManageCard/RecInterviewerManageCard";
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { fetchCandidateRecent } from '../../redux/reducer/CandidateRecentSlice';
import { STATUS } from '../../utils/Status';
import Loader from '../../components/Loader/Loader';

const ReccerInterviewerManagement = () => {
  const {candidatesRecent, candidatesRecentStatus} = useAppSelector((state: any) => state.candidateRecent);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCandidateRecent())
  }, []);

  if(candidatesRecentStatus === STATUS.LOADING){
    return <Loader/>
  }else if(candidatesRecentStatus === STATUS.IDLE){
    return (
      <>
        <form className="flex w-3/4 items-center mx-auto p-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
              </svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full pl-10 p-2.5   " placeholder="Search Name" required />
          </div>
  
        </form>
        <div className="flex flex-wrap justify-center items-center mt-[20px] ">
          {/* <!-- Card --> */}
          {candidatesRecent.map( (candidate: any)=> (
            <div key={candidate.id} className=" px-3 mb-8 lg:w-1/4 md:w-1/3 sm:w-3/4">
              <RecInterviewerCard interviewer={candidate} />
            </div>
          ))}
        </div>
        <div className='grid md:grid-cols-12 grid-cols-1 mt-1 mb-4'>
                  <div className='md:col-span-12 text-center justify-center'>
                      <ul className='inline-flex items-center -space-x-px'>
                          <li><a href='#' className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-s-3xl hover:text-white border border-gray-300  hover:border-emerald-600  hover:bg-emerald-600 '>1</a></li>
                          <li>
                              <a href='#' className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-300  hover:border-emerald-600 hover:bg-emerald-600 '>2
                              </a>
                          </li>
                          <li><a href='#' className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-300  hover:border-emerald-600  hover:bg-emerald-600 '>3</a></li>
                          <li><a href='#' className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-300  hover:border-emerald-600  hover:bg-emerald-600 '>4</a></li>
                          <li><a href='#' className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-e-3xl hover:text-white border border-gray-300  hover:border-emerald-600 hover:bg-emerald-600 '>5</a></li>
                      </ul>
  
                  </div>
  
              </div>
      </>
    )
  }
  
}

export default ReccerInterviewerManagement
