import React from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import { data } from "../../data/RecDashboardData";
import RecCard from "../../components/RecDashboardCard/RecDashboardCard";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Reccer_dashboard() {
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
                        data.listJobs.map((job,index) => (
                            <div key={index} className=" px-4 mb-8 lg:w-1/4 md:w-1/2 ">
                                <RecCard job={job} index={index}/>
                            </div>
                        ))}
                </div>
                <div className=" justify-center items-center">
                    <div className="Block w-[892px] h-80 px-4 pt-5 pb-6 bg-slate-50 rounded-2xl justify-start items-center flex-col gap-3 inline-flex">
                        <div className="Container self-stretch justify-start items-center gap-2 inline-flex">
                            <div className="Blocktab justify-start items-center gap-4 flex">
                                <div className="Tab justify-start items-start gap-1 flex">
                                    <div className="Tab1 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="Tab text-zinc-900 text-[14px] font-semibold leading-tight">Total Users</div>
                                    </div>
                                    <div className="Tab2 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="Tab text-black text-opacity-40 text-[14px] font-normal leading-tight">Total Projects</div>
                                    </div>
                                    <div className="Tab3 px-2 py-1 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="Tab text-black text-opacity-40 text-[14px] font-normal leading-tight">Operating Status</div>
                                    </div>
                                </div>
                                <div className="Line225 w-5 h-[0px] origin-top-left rotate-90 border border-black border-opacity-20"></div>
                                <div className="BadgeTag w-[100px] pl-0.5 pr-1 py-[1px] rounded justify-center items-center flex">
                                    <div className="Dot2 w-4 h-4 relative" />
                                    <div className="Text text-zinc-900 text-[12px] font-normal leading-none">Current Week</div>
                                </div>
                                <div className="BadgeTag w-[106px] pl-0.5 pr-1 py-[1px] rounded justify-center items-center flex">
                                    <div className="Dot2 w-4 h-4 relative" />
                                    <div className="Text text-zinc-900 text-[12px] font-normal leading-none">Previous Week</div>
                                </div>
                            </div>
                            <div className="Button w-7 h-7 p-1 rounded-lg justify-end items-center gap-1 flex">
                                <div className="DotsthreeoutlineverticalS w-5 h-5 relative" />
                            </div>
                        </div>
                        <div className="Chart w-[844px] h-[236px] relative flex-col justify-start items-start flex">
                            <div className="Chartscale w-[844px] h-[232px] justify-start items-start gap-4 inline-flex">
                                <div className="Left self-stretch flex-col justify-start items-end gap-3 inline-flex">
                                    <div className="Scale w-6 grow shrink basis-0 flex-col justify-between items-end gap-7 flex">
                                        <div className="M text-right text-black text-opacity-40 text-[12px] font-normal leading-none">15M</div>
                                        <div className="M text-right text-black text-opacity-40 text-[12px] font-normal leading-none">10M</div>
                                        <div className="M text-right text-black text-opacity-40 text-[12px] font-normal leading-none">5M</div>
                                        <div className="M text-right text-black text-opacity-40 text-[12px] font-normal leading-none">1M</div>
                                        <div className=" text-right text-black text-opacity-40 text-[12px] font-normal leading-none">0</div>
                                    </div>
                                    <div className="Hide flex-col justify-start items-start flex">
                                        <div className="Hide text-right text-black text-opacity-40 text-[12px] font-normal leading-none">  </div>
                                    </div>
                                </div>
                                <div className="Right grow shrink basis-0 self-stretch flex-col justify-start items-start gap-3 inline-flex">
                                    <div className="Line self-stretch grow shrink basis-0 pt-4 flex-col justify-between items-start gap-[46px] flex">
                                        <div className="Line204 self-stretch h-[0px] border border-black border-opacity-5"></div>
                                        <div className="Line203 self-stretch h-[0px] border border-black border-opacity-5"></div>
                                        <div className="Line202 self-stretch h-[0px] border border-black border-opacity-5"></div>
                                        <div className="Line201 self-stretch h-[0px] border border-black border-opacity-5"></div>
                                        <div className="Line200 self-stretch h-[0px] border border-black border-opacity-20"></div>
                                    </div>
                                    <div className="Project self-stretch h-[18px] justify-start items-start inline-flex">
                                        <div className="Mon grow shrink basis-0 text-center text-black text-opacity-40 text-[12px] font-normal leading-none">Mon</div>
                                        <div className="Tue grow shrink basis-0 text-center text-black text-opacity-40 text-[12px] font-normal leading-none">Tue</div>
                                        <div className="Wed grow shrink basis-0 text-center text-black text-opacity-40 text-[12px] font-normal leading-none">Wed</div>
                                        <div className="Thu grow shrink basis-0 text-center text-black text-opacity-40 text-[12px] font-normal leading-none">Thu</div>
                                        <div className="Fri grow shrink basis-0 text-center text-black text-opacity-40 text-[12px] font-normal leading-none">Fri</div>
                                        <div className="Sat grow shrink basis-0 text-center text-black text-opacity-40 text-[12px] font-normal leading-none">Sat</div>
                                        <div className="Sun grow shrink basis-0 text-center text-black text-opacity-40 text-[12px] font-normal leading-none">Sun</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Chartdot w-3 h-3 relative shadow">
                                <div className="Ellipse960 w-1.5 h-1.5 left-[9px] top-[3px] absolute origin-top-left rotate-180 bg-indigo-300 rounded-full border border-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
