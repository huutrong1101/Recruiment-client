import React, {useState, useEffect} from 'react';
import './ManagementAppLayOut.scss';
import { Link, Outlet } from 'react-router-dom';
import classnames from 'classnames';
import { Bars3Icon, XMarkIcon, PencilSquareIcon, UserIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import RecFooter from "../../RecFooter/DashboardFooter"
const ManagementAppLayOut = () => {
    const [leftActive, setLeftActive] = useState<boolean>(false);
    const [rightActive, setRightActive] = useState<boolean>(false);
    return (
        <div className="ManagementAppLayOut">
            <div className='navbar'>
                <div className={classnames('navbar-content flex items-center justify-between', {'minimize-content': leftActive})}>
                    <div className='navbar-content-left flex justify-between'>
                        <button type="button" onClick={() => setLeftActive(!leftActive)}>
                            <Bars3Icon className="w-5 h-5 mr-2" />
                        </button>
                        <div>
                            Breadcrumbs
                        </div>
                    </div>
                    <div className='navbar-content-right'>
                        <button type="button" onClick={() => setRightActive(true)}>
                            <Bars3Icon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className={classnames('navbar-left', {'minimize-left' : leftActive})}>
                        <div className='flex mt-3 ml-3 mb-6'>
                            <div className='avt flex'>
                                <img src='https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg'
                                    alt='' className='avt-img' />
                                <div className='avt-act'></div>
                            </div>
                            <div className={classnames('mt-2 ml-2', {'hidden' : leftActive})}>Justin Bieber</div>
                        </div>
                            {/* gach ngang */}
                        <div>
                            <div className={classnames('ml-3 text-xl text-gray-300',{'hidden' : leftActive})}>Interviewer</div>
                            <ul>
                                <li>
                                    <Link to="/interviewer/interview-recent" className='flex'>
                                        <ClipboardDocumentListIcon className="w-5 h-5 mr-2"/>
                                        <div className={classnames({'hidden' : leftActive})}>Interview Recent</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/interviewer/candidate-recent" className='flex'>
                                        <UserIcon className="w-5 h-5 mr-2" />
                                        <div className={classnames({'hidden' : leftActive})}>Candidate Recent</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/interviewer/interview-question" className='flex'>
                                        <PencilSquareIcon className="w-5 h-5 mr-2" />
                                        <div className={classnames({'hidden' : leftActive})}>Interview Question</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                            {/* gach ngang */}
                        <div>
                            <div className={classnames('ml-3 text-xl text-gray-300',{'hidden' : leftActive})}>Interviewer</div>
                            <ul>
                                <li>
                                    <Link to="/interviewer/interview-recent" className='flex'>
                                        <ClipboardDocumentListIcon className="w-5 h-5 mr-2"/>
                                        <div className={classnames({'hidden' : leftActive})}>Interview Recent</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/interviewer/candidate-recent" className='flex'>
                                        <UserIcon className="w-5 h-5 mr-2" />
                                        <div className={classnames({'hidden' : leftActive})}>Candidate Recent</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/interviewer/interview-question" className='flex'>
                                        <PencilSquareIcon className="w-5 h-5 mr-2" />
                                        <div className={classnames({'hidden' : leftActive})}>Interview Question</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={classnames('ml-3 text-xl text-gray-300',{'hidden' : leftActive})}>Interviewer</div>
                            <ul>
                                <li>
                                    <Link to="/interviewer/interview-recent" className='flex'>
                                        <ClipboardDocumentListIcon className="w-5 h-5 mr-2"/>
                                        <div className={classnames({'hidden' : leftActive})}>Interview Recent</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/interviewer/candidate-recent" className='flex'>
                                        <UserIcon className="w-5 h-5 mr-2" />
                                        <div className={classnames({'hidden' : leftActive})}>Candidate Recent</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/interviewer/interview-question" className='flex'>
                                        <PencilSquareIcon className="w-5 h-5 mr-2" />
                                        <div className={classnames({'hidden' : leftActive})}>Interview Question</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className={classnames('navbar-right', {'show-right' : rightActive})}>
                    <div className=''>Activites</div>
                    <ul className='side-links'>
                        <button type="button" className="right-hide-btn" onClick={() => setRightActive(false)}>
                            <XMarkIcon className="w-5 h-5 text-white"/>
                        </button>
                    </ul>
                </div>
            </div>
            <div className={`${leftActive?'small':'large'}`}>
                <div className='mt-5 mx-[2rem]'><Outlet/></div>
                <RecFooter check={leftActive?true:false}/>
            </div>
        </div>
    );
}

export default ManagementAppLayOut;