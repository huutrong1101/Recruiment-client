import {
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
export default function QuestionInterview() {
    return (
        <div>
            <div className="w-full h-1/2 bg-white flex justify-center">
                <div className="Table relative w-11/12 min-h-full  bg-white rounded-lg shadow border border border border border-gray-200 pt-4">
                    <div className="relative">
                        {/* interviewQuestion */}
                        <div className=" w-full Content self-stretch px-6 pt-5 pb-[19px] justify-start items-start inline-flex">
                            <div className="TextAndBadge w-4/5 [534px] self-stretch justify-start items-center gap-2 flex">
                                <div className="Text text-gray-900 text-[22px] font-medium leading-7">Interview Question</div>
                                <div className="Badge justify-start items-start flex">
                                    <div className="BadgeBase px-2 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center flex">
                                        <div className="Text text-center text-emerald-600 text-[12px] font-medium leading-none">22 vendors</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Actions justify-start items-center gap-3 flex right auto ">
                                <div className="Actions justify-start items-center gap-3 flex ">
                                    <div className="Button01 rounded-lg justify-start items-start flex ">
                                        {/* <div className="ButtonBase  px-4 py-2.5 bg-emerald-600 hover:bg-white rounded-lg shadow-lg border border border border border-gray-500 justify-center items-center gap-2 flex"> */}
                                            {/* <div className="Plus w-5 h-5 relative" /> */}
                                            {/* <button className="Text text-white text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white" >Add question</button> */}
                                        {/* </div> */}
                                            <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-lg shadow-lg  
                                                               text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                               hover: border-solid hover: border-gray-600 transition-all" >
                                                                Add question
                                            </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* filter */}
                        <div className="FiltersBar w-full h-[68px] bg-white flex-col justify-start items-start inline-flex">
                            <div className="Content w-full px-4 py-3 rounded-xl justify-between items-start gap-4 inline-flex absolute ">
                                <div className="ButtonGroup rounded-lg shadow border border border border border-gray-300 justify-start items-start flex">
                                    <div className="ButtonGroupBase px-4 py-2.5 bg-gray-50 border border-gray-300 justify-center items-center gap-2 flex">
                                        <div className="Text text-slate-800 text-[14px] font-medium leading-tight">View all</div>
                                    </div>
                                    <div className="ButtonGroupBase px-4 py-2.5 bg-white border border-gray-300 justify-center items-center gap-2 flex">
                                        <div className="Text text-slate-700 text-[14px] font-medium leading-tight">Monitored</div>
                                    </div>
                                    <div className="ButtonGroupBase px-4 py-2.5 bg-white border border-gray-300 justify-center items-center gap-2 flex">
                                        <div className="Text text-slate-700 text-[14px] font-medium leading-tight">Text</div>
                                    </div>
                                </div>
                                <div className="Actions justify-start items-center gap-3 flex">
                                    <div>
                                        <label className="relative block">
                                            <span className="sr-only">Search</span>
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                                <svg className=" MagnifyingGlassIcon h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                                            </span>
                                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                                                    border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
                                                      focus:outline-none focus:border-sky-500 focus:ring-sky-500 
                                                      focus:ring-1 sm:text-sm"
                                                placeholder="Search for anything..." type="text" name="search"
                                            />
                                        </label>
                                    </div>
                                    <div className="Button rounded-lg justify-start items-start flex">
                                        <div className="ButtonBase px-4 py-2.5 bg-white rounded-lg shadow border border border border border-gray-300 justify-center items-center gap-2 flex">
                                            <div className="FiltersLines w-5 h-5 relative" />
                                            <div className="Text text-slate-700 text-[14px] font-medium leading-tight">Filters</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* table */}
                        <div className=" overflow-x-auto ">
                            <table className="w-full text-sm text-left ">
                                <thead className="text-xs uppercase px-6 py-3">
                                    <tr>
                                        <th scope="col" className="flex flex-col justify-center pl-6">
                                            Content
                                        </th>
                                        <th scope="col">
                                            Type
                                        </th>
                                        <th scope="col">
                                            Weight
                                        </th>
                                        <th scope="col">
                                            Note
                                        </th>
                                        <th scope="col">
                                            ....................
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="px-6 py-4 ">
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium flex-wrap text-black">
                                            What is JSX, how to implement JSX 
                                        </th>
                                        <td >
                                            Technical
                                        </td>
                                        <td>
                                            0.2
                                        </td>
                                        <td>
                                            ...
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-black">
                                            What is REACT, REACT-DOM 
                                        </th>
                                        <td>
                                            Technical
                                        </td>
                                        <td>
                                            0.2
                                        </td>
                                        <td>
                                            ...
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                            Framework for CSS
                                        </th>
                                        <td>
                                            Technical
                                        </td>
                                        <td >
                                            0.2
                                        </td>
                                        <td>
                                            ...
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-black">
                                            API? How to get API
                                        </th>
                                        <td>
                                            Technical
                                        </td>
                                        <td>
                                            0.2
                                        </td>
                                        <td>
                                            ...
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                            What is SPA and MPA? What is different between them?
                                        </th>
                                        <td>
                                            Technical
                                        </td>
                                        <td >
                                            0.2
                                        </td>
                                        <td>
                                            ...
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="Pagination w-full h-20 px-6 pb-4  border-gray-200 justify-between  inline-flex ">
                        <div className="Details text-slate-700 text-[14px] font-medium leading-tight flex flex-col justify-center">Page 1 of 10</div>
                        <div className="Actions justify-center items-center gap-3 flex">
                            <div className="Button rounded-lg justify-start items-start flex">
                                <div className="ButtonBase px-3.5 py-2 bg-white rounded-lg shadow border border border border border-gray-300 justify-center items-center gap-2 flex">
                                    <div className="Text text-slate-700 text-[14px] font-medium leading-tight">Previous</div>
                                </div>
                            </div>
                            <div className="Button rounded-lg justify-start items-start flex">
                                <div className="ButtonBase px-3.5 py-2 bg-white rounded-lg shadow border border border border border-gray-300 justify-center items-center gap-2 flex">
                                    <div className="Text text-slate-700 text-[14px] font-medium leading-tight">Next</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}