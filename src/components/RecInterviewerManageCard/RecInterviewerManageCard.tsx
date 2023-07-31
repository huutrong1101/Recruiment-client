import React from 'react'
import AvatarInterviewer from "../../components/Candidate/Avatar"
import { useAppSelector } from '../../hooks/hooks'
import { Link } from 'react-router-dom'
import blog_image from "../../../images/blog_image.png";


const skills = ['Java', 'Python', 'React'];

const RecInterviewerManageCard = (props : any) => {  

    // console.log(props)
    const interviewer = props.interviewer;  
    return (
            <div className='grid grid-cols-1'>
                <div className='group bg-white relative overflow-hidden rounded-md shadow dark:shadow-gray-500 text-center p-6 hover:shadow-gray-950'>
                    <img src={blog_image} className='h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto' />
                    <div className='mt-2'>
                        <a href='#' className='hover:text-emerald-600 font-semibold text-lg'>{interviewer.fullName}</a>
                    </div>
                    <ul className='mt-2 list-none'>
                        <li className='inline'>
                            {skills.map((skill:any, index:any) => (
                                <p
                                    key={index}
                                    className="bg-[#C6DED5] ml-2 inline-block text-[#218F6E] text-xs px-2.5 py-0.5 font-semibold rounded-full"
                                >
                                    {skill}
                                </p>
                            ))}
                        </li>
                    </ul>
                    <div className='flex justify-center mt-2 gap-2'>
                            <p className='text-slate-400'>Experience:</p>
                            <p className=' font-semibold'>10 Years</p>
                    </div>
                    <div className='pt-4'>
                        <Link to={`../interviewers/${interviewer.interviewerId}`}>
                            <button className='px-4 py-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md'>Profile</button>   
                        </Link>
                    </div>
                </div>

            </div>
    )
}

export default RecInterviewerManageCard
