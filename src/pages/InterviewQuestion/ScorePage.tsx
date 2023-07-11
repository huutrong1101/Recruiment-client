import {
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import ListQuestions from "./ListQuestion";
export default function ScorePage() {
    return (
        <div className="flex flex-row justify-center">
            <div className="w-5/12 h-full bg-white flex flex-col mx-4 my-4 relative ">
                <div className="Table absolute w-full  bg-white rounded-lg shadow border border border border border-gray-200 pt-4">
                    <div className="relative h-full">
                        <div className="h-[200px]"></div>


                    </div>
                </div>
            </div>
            <div className="w-6/12 h-full  bg-white flex flex-col mx-4 my-4 relative">
                <div className="Table absolute w-full  bg-white rounded-lg shadow border border border border border-gray-200 pt-4">
                    <div className="relative h-1/2 flex flex-col mx-2 gap-y-2">
                        {/* list question */}
                        <div className="bg-gray-100 h-[200px] w-full rounded-lg border-black px-2 py-2 relative ">
                            {/* table */}
                            <div className=" rounded-lg border border border border border-gray-300 border-2 w-full h-full">
                                <div className="overflow-auto px-2">
                                    <table className="w-full ">
                                        <thead className="">
                                            <tr className="flex flex-row gap-x-2 ">
                                                <th className="text-sm tracking-wide text-left font-semibold pt-4 basis-1/5 ">Position</th>
                                                <th className="text-sm tracking-wide text-left font-semibold pt-4 basis-1/5 ">Tech</th>
                                                <th className="text-sm tracking-wide text-left font-semibold pt-4 basis-3/5 ">Question</th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <div className="grid text-left">
                                                <tr className="flex flex-row gap-x-2 text-left text-sm">
                                                    <td className="basis-1/5">BE</td>
                                                    <td className="basis-1/5">Java</td>
                                                    <td className="basis-3/5 flex-nowrap">How create API?</td>
                                                </tr>
                                                <tr className="flex flex-row gap-x-2 text-left text-sm ">
                                                    <td className="basis-1/5">FE</td>
                                                    <td className="basis-1/5">ReactJS</td>
                                                    <td className="basis-3/5 flex-nowrap">What is React, ReactDOM?</td>
                                                </tr>
                                                <tr className="flex flex-row gap-x-2 text-left text-sm ">
                                                    <td className="basis-1/5">BE</td>
                                                    <td className="basis-1/5">.NET</td>
                                                    <td className="basis-3/5 flex-nowrap">What is .NET</td>
                                                </tr>
                                                <tr className="flex flex-row gap-x-2 text-left text-sm ">
                                                    <td className="basis-1/5">FE</td>
                                                    <td className="basis-1/5">VueJS</td>
                                                    <td className="basis-3/5 flex-nowrap">How to get API</td>
                                                </tr>
                                            </div>

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            {/* button */}
                            <div className="absolute  flex top-[-10px] left-[-10px]">
                                <div className="flex flex-row  gap-x-10 pl-2 ">
                                    <div className=" w-1/5 ">
                                        <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-s-lg drop-shadow-lg mr-4  
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                hover: border-solid hover: border-gray-600 hover:transition-all   ">
                                            Position
                                        </button>
                                    </div>
                                    <div className=" w-1/5 h-[50px] ">
                                        <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-e-lg drop-shadow-lg mr-4  
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                hover: border-solid hover: border-gray-600 hover:transition-all  " >
                                            Technology
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* score */}
                        <div className="bg-emerald-600 h-1/2 w-full rounded-lg border-black px-2 py-2 pb-2 relative flex flex-col">
                            <div className="flex flex-row justify-between mx-4 gap-x-6 ">
                                <div className="text-white font-semibold flex flex-col w-full items-center">Question
                                    <div className="w-full h-[30px] bg-white rounded-md relative "></div>
                                    <input type="text" className="flex flex-col w-full h-[50px] bg-white rounded-md py-2 m-2 text-black break-words" placeholder="    Note..." ></input>
                                </div>
                                <div>
                                    <div className="text-white text-left font-semibold mr-4 flex flex-col w-full items-center">Score
                                        <input type="text" className="w-2/3 h-[30px] bg-white rounded-md px-2 py-2 text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* send */}
                        <div className="flex justify-center items-center ">
                            <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-lg drop-shadow-lg mx-4 mb-2 transition-all
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                hover: border-solid hover: border-gray-600 w-1/5 flex justify-center bottom-0  w-">
                                SEND
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
        // <div className="">
        //     <div className="w-full h-1/2 bg-emerald-600 flex flex-row gap-3 relative">
        //         <div className="w-full h-1/2">
        //             <div className="Rectangle2 w-1/3 h-[713px] left-0 top-0 absolute bg-white rounded-[15px] border border-zinc-300 m-4" >

        //             </div>
        //             <div className="Rectangle2 w-2/3 h-[713px] right-0 top-0 absolute bg-white rounded-[15px] border border-zinc-300 m-4" >

        //             </div>
        //         </div>
        //     </div>
        //     <DashBoardFooter />
        // </div>
    )
}