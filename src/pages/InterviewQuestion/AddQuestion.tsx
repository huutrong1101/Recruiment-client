import React, { useState } from 'react'
import ScorePage from './ScorePage'
import DashboardFooter from '../../components/RecFooter/DashboardFooter'
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AddQuestion({ observation, onClick }) {
    const handleOnClick = (event : any) => {
        if (event.target.id === 'container' || event.target.id === 'add') onClick()
    }
    if (!observation) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center rounded-lg z-20 '
            id='add' onClick={handleOnClick}>
            <div className='w-1/3 h-2/3 rounded-lg bg-white drop-shadow-md flex flex-col relative'>
                <div className='flex justify-start m-5 font-medium text-lg'>
                    Add Question
                </div>
                <div className='mx-5 font-normal text-md my-3'>Content</div>
                <div className='flex flex-col gap-y-5 w-full items-center'>
                    <div className='w-11/12 p-2 h-fit mx-5 border-2 border-emerald-600 rounded-md'>
                        <textarea className='resize-none w-full flex outline-none' placeholder='Question here'></textarea>
                    </div>
                </div>
                <div className='flex h-full'>
                    <div className='flex flex-col w-3/5 h-[83%] '>
                        <div className='mx-5 font-normal text-md my-1'>Note</div>
                        <div className='w-11/12 p-2 h-full mx-5 border-2 border-emerald-600 rounded-md'>
                            <textarea className='w-full resize-none outline-none h-full' placeholder='Answer'></textarea>
                        </div>
                    </div>
                    <div className='flex flex-col w-2/5 p-2 relative'>
                        <div className='font-normal text-md'>Position</div>
                        <div className='w-11/12 h-1/5 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600  
                                 active:bg-white flex items-center'>
                            <div className='px-2 inline-flex  justify-between w-full'>
                                Pos <ChevronDownIcon className='w-5 h-5 pt-1' />
                            </div>
                        </div>
                        <div className=' font-normal text-md'>Type</div>
                        <div className='w-11/12 h-1/5 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600  
                                 active:bg-white flex items-center'>
                            <div className='px-2 inline-flex justify-between w-full'>
                                Technology <ChevronDownIcon className='w-5 h-5 pt-1' />
                            </div>
                        </div>
                        <div className='w-full h-1/5 font-normal text-md my-6 flex justify-end px-3'>
                            <div className='w-2/3 h-full '>
                                <button className=' w-full h-full bg-emerald-600 rounded-md text-white border border-transparent
                                hover:border-emerald-600  hover:text-emerald-600 
                                hover:transition-all hover:bg-white active:bg-zinc-200 active:border-emerald-600 active:drop-shadow-md' 
                                id='add' onClick={handleOnClick}>
                                    Add
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
