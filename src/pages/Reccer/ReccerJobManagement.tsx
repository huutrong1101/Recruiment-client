import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { data } from "../../data/RecJobManagementData";
import RecCard from "../../components/RecJobManagementCard/RecJobManagementCard";
export default function Reccer_JobManagement() {
    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8))
    }
    return (
        <>
            <form className='flex w-3/4 items-center mx-auto p-2'>
                <div className="relative w-full">
                    <input type=" search" placeholder='Search' className='w-full p-2 rounded-lg bg-gray-200 shadow' onChange={(e) => handleSearch(e)} />
                    <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4'>
                        <AiOutlineSearch />
                    </button>

                </div>
                <div className="flex items-center max-w-md mx-auto p-5">
                    <Link to="#">
                        <div className="w-[100px] h-[50px] relative" >
                            <button className="w-full h-full left-5 top-0 absolute bg-[#48A280] hover:bg-emerald-700 text-white rounded-lg" type="submit">+ Add Job</button>
                        </div>
                    </Link>
                </div>
                {
                    activeSearch.length > 0 && (
                        <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                            {
                                activeSearch.map(s => (
                                    <span>{s}</span>
                                ))
                            }
                        </div>
                    )
                }
            </form>
            <div className="flex flex-wrap justify-center items-center mt-[10px] ">
                {/* <!-- Card --> */}
                {data.listJobs &&
                    data.listJobs.map((job) => (
                        <div key={job.jobId} className=" px-4 mb-8 md:w-5/6 ">
                            <RecCard job={job} />
                        </div>
                    ))}
            </div>
            <div className='grid md:grid-cols-12 grid-cols-1 mt-1'>
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
