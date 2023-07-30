import React, { useEffect } from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import { data } from "../../data/RecDashboardData";
import RecCard from "../../components/RecDashboardCard/RecDashboardCard";
import LineChart from './Recchart';
import { useAppDispatch } from "../../hooks/hooks";
import { fetchRecJobList } from "../../redux/reducer/RecJobSlice";
import { fetchRecInterviewerList } from "../../redux/reducer/RecInterviewerSilce";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Reccer_dashboard() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRecJobList())
        dispatch(fetchRecInterviewerList())
    }, []);
    return (
        <>
            <div className="mx-[3%] h-full">
                <Menu as="div" className="relative inline-block text-left pt-4">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Today
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100 "
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute left-30 z-10 mt-2 w-30 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Yesterday
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Week
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Month
                                        </a>
                                    )}
                                </Menu.Item>

                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <div className="flex flex-wrap justify-center items-center mt-[20px] ">
                    {/* <!-- Card --> */}
                    {data.listJobs &&
                        data.listJobs.map((job, index) => (
                            <div key={index} className=" px-3 mb-8 lg:w-1/4 md:w-1/2">
                                <RecCard job={job} index={index} />
                            </div>
                        ))}
                </div>
                <div className=' bg-white drop-shadow-md rounded-2xl mb-5'>
                    <p className='px-[5%] pt-[3%] font-semibold text-2xl'>Today DashBoard</p>

                    <div className='h-[400px]'>
                        <LineChart />
                    </div>

                </div>


            </div>

        </>
    )
}
