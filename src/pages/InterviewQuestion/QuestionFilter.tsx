import React, { useState } from 'react'
import ListQuestions from './ListQuestion'
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import classNames from 'classnames';

export default function QuestionFilter() {
    const pos = ['FE', 'BE', 'Others']
    const [isActive, setIsActive] = useState(false)
    const handleActive = (e: any) => setIsActive(!isActive)
    return (
        <div className='absolute w-full '>
            <Menu.Button className='w-full h-fit p-3  mb-1 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600 
                                 active:bg-white flex items-center' onClick={handleActive}>
                <div className=' inline-flex justify-between w-full '>
                    Position <ChevronDownIcon className='w-5 h-5 pt-1' />
                </div>
            </Menu.Button>
            <Transition as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95" >
                <Menu.Items className='flex flex-col items-start rounded-md w-full h-full bg-zinc-200 bg-opacity-90 aboslute shadow-md  '>
                    <div className='w-full h-full  text-black rounded-md border border-zinc-200'>
                        {pos.map((posType, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <p  
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900 bg-opacity-80"
                                                : "text-gray-700", "p-2",
                                            "block  text-sm",
                                        )}
                                        onClick={handleActive}
                                    >
                                        {posType}
                                    </p>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items >
            </Transition>
        </div>

    )
}
