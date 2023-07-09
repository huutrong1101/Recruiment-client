'use client'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

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
            <form className='flex w-3/4 items-center mx-auto p-3'>
                <div className="relative w-full ">
                    <input type=" search" placeholder='Search' className='w-full p-4 rounded-full bg-gray-200 shadow' onChange={(e) => handleSearch(e)} />
                    <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4  rounded-full'>
                        <AiOutlineSearch />
                    </button>

                </div>
                <div className="flex items-center max-w-md mx-auto p-5">
                    <Link to="#">
                        <div className="w-[100px] h-[39px] relative" >
                            <button className="w-[100px] h-[39px] left-5 top-0 absolute bg-green-700 text-white rounded-lg" type="submit">+ Add Job</button>
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

            <div className="Group33 w-[736px] h-[180px] relative">
                <div className="Rectangle3884 w-[736px] h-[180px] left-0 top-0 absolute bg-white rounded-lg shadow" />
                <div className="Rectangle3890 w-[736px] h-[180px] left-0 top-0 absolute bg-white rounded-lg shadow" />
                <div className="DescriptionOneDisadvantageOfLorumIpsumIsThatInLatinCertainLettersAppearMoreFrequently w-[562px] left-[22px] top-[75px] absolute"><span className="text-black text-[10px] font-semibold capitalize leading-7 tracking-wide">description: </span><span className="text-black text-[10px] font-normal capitalize leading-7 tracking-wide">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently ....</span></div>
                <div className="Rectangle3889 w-[736px] h-[39px] left-0 top-[141px] absolute bg-neutral-100 rounded-bl-lg rounded-br-lg" />
                <div className="Group36 w-[149px] h-[26px] left-[569px] top-[147px] absolute">
                    <div className="Rectangle3892 w-[149px] h-[26px] left-0 top-0 absolute bg-slate-500 rounded-lg" />
                    <div className="CreateShedule left-[15px] top-[3px] absolute text-white text-[16px] font-semibold leading-none">Create Shedule</div>
                </div>
                <div className="Group38 w-[149px] h-[26px] left-[569px] top-[147px] absolute">
                    <div className="Rectangle3892 w-[149px] h-[26px] left-0 top-0 absolute bg-slate-500 rounded-lg" />
                    <div className="CreateShedule left-[15px] top-[3px] absolute text-white text-[16px] font-semibold leading-none">Create Shedule</div>
                </div>
                <div className="Group39 w-[149px] h-[26px] left-[569px] top-[147px] absolute">
                    <div className="Rectangle3892 w-[149px] h-[26px] left-0 top-0 absolute bg-slate-500 rounded-lg" />
                    <div className="CreateShedule left-[15px] top-[3px] absolute text-white text-[16px] font-semibold leading-none">Create Shedule</div>
                </div>
                <div className="Group37 w-[100px] h-[26px] left-[453px] top-[147px] absolute">
                    <div className="Rectangle3893 w-[100px] h-[26px] left-0 top-0 absolute bg-slate-500 rounded-lg" />
                    <div className="Edit left-[34px] top-[3px] absolute text-white text-[16px] font-semibold leading-none">Edit</div>
                </div>
                <div className="Group27 w-[346px] h-7 left-[22px] top-[108px] absolute">
                    <div className="Group25 w-14 h-7 left-[210px] top-0 absolute">
                        <div className="Rectangle3888 w-14 h-5 left-[56px] top-[4px] absolute origin-top-left rotate-180 bg-zinc-300 rounded-lg" />
                        <div className="Graphics w-[48.16px] left-[3.36px] top-0 absolute text-center text-black text-[10px] font-semibold capitalize leading-7 tracking-wide">Graphics</div>
                    </div>
                    <div className="Group26 w-[68px] h-7 left-[278px] top-0 absolute">
                        <div className="Rectangle3888 w-[66.67px] h-5 left-[68px] top-[4px] absolute origin-top-left rotate-180 bg-zinc-300 rounded-lg" />
                        <div className="Photoshop w-[68px] left-0 top-0 absolute text-center text-black text-[10px] font-semibold capitalize leading-7 tracking-wide">Photoshop</div>
                    </div>
                    <div className="Group22 w-[50px] h-7 left-0 top-0 absolute">
                        <div className="Rectangle3888 w-[50px] h-5 left-[50px] top-[4px] absolute origin-top-left rotate-180 bg-zinc-300 rounded-lg" />
                        <div className="Html left-[10px] top-0 absolute text-center text-black text-[10px] font-semibold capitalize leading-7 tracking-wide">HTML</div>
                    </div>
                    <div className="Group23 w-[50px] h-7 left-[66px] top-0 absolute">
                        <div className="Rectangle3888 w-[50px] h-5 left-[50px] top-[4px] absolute origin-top-left rotate-180 bg-zinc-300 rounded-lg" />
                        <div className="Css left-[15px] top-0 absolute text-center text-black text-[10px] font-semibold capitalize leading-7 tracking-wide">CSS</div>
                    </div>
                    <div className="Group24 w-[61px] h-7 left-[131px] top-0 absolute">
                        <div className="Rectangle3888 w-[61px] h-5 left-[61px] top-[4px] absolute origin-top-left rotate-180 bg-zinc-300 rounded-lg" />
                        <div className="Reactjs w-[52.46px] left-[3.66px] top-0 absolute text-center text-black text-[10px] font-semibold capitalize leading-7 tracking-wide">REACTJS</div>
                    </div>
                </div>
                <div className="Group30 w-[340px] h-14 left-[22px] top-[16px] absolute">
                    <div className="DaysAgo left-[191px] top-0 absolute text-center text-stone-400 text-[10px] font-semibold capitalize leading-7 tracking-wide">2 days ago</div>
                    <div className="EstTime1To3MothsHourly1620 left-[148px] top-[25px] absolute text-center text-stone-400 text-[10px] font-semibold capitalize leading-7 tracking-wide">EST. time: 1 to 3 moths  Hourly: $16 - $20</div>
                    <div className="Group29 w-14 h-14 left-0 top-0 absolute">
                        <div className="Rectangle3885 w-14 h-14 left-0 top-0 absolute bg-white rounded-lg shadow" />
                        <div className="InterfaceEssentialFacebook w-[42px] h-[42px] left-[7px] top-[7px] absolute" />
                    </div>
                    <div className="WebDesigner left-[73px] top-[4px] absolute text-black text-[16px] font-semibold leading-none">Web Designer</div>
                    <div className="Group6 w-[73px] h-5 left-[70px] top-[29.62px] absolute">
                        <div className="Rectangle20 w-[69px] h-5 left-[1.68px] top-0 absolute bg-gray-300 rounded-lg" />
                        <div className="FullTime w-[73px] h-[19.47px] left-0 top-[0.38px] absolute text-center text-emerald-600 text-[10px] font-semibold capitalize leading-7 tracking-wide">Full time</div>
                    </div>
                </div>
                <div className="Ellipse962 w-9 h-9 left-[678px] top-[8px] absolute bg-teal-50 rounded-full shadow" />
                <div className="HeroiconsOutlineBookmark w-5 h-5 left-[686px] top-[16px] absolute" />
            </div>
        </>
    )
}
