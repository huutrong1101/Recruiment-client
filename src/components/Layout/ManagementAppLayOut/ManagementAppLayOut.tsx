import React, { useState, useEffect } from 'react';
import './ManagementAppLayOut.scss';
import { Link, Outlet, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline';
import { HiOutlineFolder, HiOutlineCalendarDays, HiOutlineUser, HiOutlineChartPie, HiOutlineDocumentDuplicate, HiOutlineClipboardDocument, HiOutlineClipboardDocumentList } from "react-icons/hi2"
import { MdOutlineEventAvailable, MdOutlineManageAccounts } from "react-icons/md";
import RecFooter from "../../RecFooter/DashboardFooter"
export const links = [
    {
        title: 'ADMIN',
        links: [
            {
                name: 'Default',
                icon: <HiOutlineChartPie />,
                mylink: '#',
            },
            {
                name: 'Profile',
                icon: <HiOutlineDocumentDuplicate />,
                mylink: '#',
            },
            {
                name: 'Manager Job',
                icon: <HiOutlineCalendarDays />,
                mylink: '#',
            },
        ],
    },
    {
        title: 'RECRUITER',
        links: [
            {
                name: 'Default',
                icon: <HiOutlineChartPie />,
                mylink: 'recruiter/dashboard',
            },
            {
                name: 'Calender',
                icon: <HiOutlineCalendarDays />,
                mylink: 'recruiter/calender',
            },
            {
                name: 'Interviewer',
                icon: <MdOutlineManageAccounts />,
                mylink: 'recruiter/interviewer',
            },
            {
                name: 'Candidate',
                icon: <HiOutlineUser />,
                mylink: 'recruiter/candidatelist',
            },
            {
                name: 'Job',
                icon: <HiOutlineFolder />,
                mylink: 'recruiter/job-management',
            },
            {
                name: 'Event',
                icon: <MdOutlineEventAvailable />,
                mylink: 'recruiter/event',
            },

        ],
    },
    {
        title: 'INTERVIEWER',
        links: [
            {
                name: 'Interview Recent',
                icon: <HiOutlineClipboardDocumentList />,
                mylink: 'interviewer/interview-recent',
            },
            {
                name: 'Candidate Recent',
                icon: <HiOutlineCalendarDays />,
                mylink: 'interviewer/candidate-recent',
            },
            {
                name: 'Interview Question',
                icon: <HiOutlineClipboardDocument />,
                mylink: 'interviewer/interview-question',
            },
        ],
    },
];
const ManagementAppLayOut = () => {
    const [leftActive, setLeftActive] = useState<boolean>(false);
    const [rightActive, setRightActive] = useState<boolean>(false);
    const activeLink = 'flex items-center gap-3 pl-4 py-1 rounded-lg text-black text-md  bg-gray-200 mt-1 mx-3'
    const normalLink = ' flex items-center gap-3 pl-4 py-1 rounded-lg text-black text-md text-gray-700 hover:bg-gray-200 mt-1 mx-3'

    return (
        <div className="ManagementAppLayOut">
            <div className='navbar '>
                <div className='fixed w-[100vw] z-10 bg-white top-0'>
                    <div className={classnames('navbar-content flex items-center justify-between', { 'minimize-content': leftActive })}>
                        <div className='navbar-content-left  flex justify-between'>
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
                </div>
                <div className={classnames('navbar-left ', { 'minimize-left': leftActive })}>
                    <div className='flex mt-3 ml-3 mb-6'>
                        <div className='avt flex'>
                            <img src='https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg'
                                alt='' className='avt-img' />
                            <div className='avt-act'></div>
                        </div>
                        <div className={classnames('mt-2 ml-2', { 'hidden': leftActive })}>Justin Bieber</div>
                    </div>
                    <div className=''>
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className={classnames('text-gray-400 mx-3 mt-4 text-x font-semibold', { 'hidden': leftActive })}>{item.title}</p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.mylink}`}
                                        key={link.name}
                                        onClick={() => { }}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink}
                                    >
                                        <span className='text-black ml-1 text-2xl'>{link.icon}</span>
                                        <div className={classnames({ 'text-black flex, hidden': leftActive })}>{link.name}</div>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classnames('navbar-right', { 'show-right': rightActive })}>
                    <div className=''>Activites</div>
                    <ul className='side-links'>
                        <button type="button" className="right-hide-btn" onClick={() => setRightActive(false)}>
                            <XMarkIcon className="w-5 h-5 text-white" />
                        </button>
                    </ul>
                </div>
            </div>
            <div className={`${leftActive ? 'small' : 'large'} mt-[72px]`}>
                <div className='mx-[2rem] min-h-[calc(100vh-72px-2rem)]'><Outlet /></div>
                <RecFooter check={leftActive ? true : false} />
            </div>
        </div>
    );
}

export default ManagementAppLayOut;