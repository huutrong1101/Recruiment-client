import {
    ChevronLeftIcon, ChevronRightIcon
} from "@heroicons/react/24/outline";
import DashBoardFooter from "../../components/RecFooter/DashboardFooter";
import PopUp from "./PopUp";
import { useState, useEffect } from "react"
import ListQuestions from "./ListQuestion";
import CandidateResume from "./CandidateResume"
import { InterviewQuestion } from "../Interviewer/InterviewerPages";

type Record = {
    questionID: number;
    interviewQuestions: string;
    typeQuestion: string;
    position: string;
};

export default function ScorePage() {
    //-----------ListQuestion----------------------------------------------------
    const [showPopUp, setShowPopUp] = useState(false)
    const [questions, setQuestions] = useState(' ')

    const handleOnClose = () => setShowPopUp(false)
    const handleQuestionClick = (question: any) => {
        setQuestions(question);
    };
    //----------------------------------------------------------------------------
    //------------Pagination------------------------------------------------------
    const [curPage, setCurPage] = useState(1)
    const recordsPerPage = 5
    const lastIndex= curPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = ListQuestions.slice(firstIndex, lastIndex)
    const numPage = Math.ceil(ListQuestions.length /recordsPerPage)
    const numbers = [...Array( numPage+1 ).keys()].slice(1)
    const nextPage = ()=>{
        if(curPage !== firstIndex) setCurPage( curPage - 1)
    }
    const changeCurPage = (id:any)=>{
        setCurPage(id)
    }
    const prePage = ()=> {
        if (curPage !== lastIndex) setCurPage( curPage +1 )
    }
    //----------------------------------------------------------------------------- 
    return (
        <div className="flex flex-col justify-center md:flex-row md:items-start md:w-full">
            <div className="w-5/12 h-full bg-white flex flex-col mx-4 my-4 relative ">
                <div className="  w-full  bg-white rounded-lg shadow border  border-gray-200 ">
                    <div className="w-full h-full">
                        <div className="h-[500px] w-full flex md:flex-wrap justify-center ">
                            <div className="rounded-full w-[150px] h-[150px] border-2 border-emerald-600 justify-start my-4
                            md:mb-0 md:auto md:mr-4 md:rounded-full">

                            </div>
                            <div className=" lg:w-[230px] h-[150px] border border-gray-200 my-4 md:my-4 md:w-[230px]
                            sm:my-0 ">

                            </div>
                            <div className="lg:w-full md:h-1/2 border border-gray-200 md:bottom-0 md:mx-4 ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-7/12 h-full  bg-white flex flex-col mx-4 my-4 relative items-center">
                <div className="Table absolute w-full  bg-white rounded-lg shadow border  border-gray-200 pt-4">
                    <div className="relative h-1/2 flex flex-col mx-2 gap-y-2">
                        {/* list question */}
                        <div className="bg-gray-100 h-1/2 w-full rounded-lg border-black px-2 py-2 relative ">
                            {/* table */}
                            <div className=" rounded-lg border-gray-300 border-2 w-full h-full relative">
                                <div className="overflow-auto px-2">
                                    <table className="table-auto w-full">
                                        <thead className="">
                                            <tr className="flex flex-row ">
                                                <th className="text-sm tracking-wide text-left font-semibold pt-4 basis-1/5 ">Position</th>
                                                <th className="text-sm tracking-wide text-left font-semibold pt-4 basis-1/5 ">Tech</th>
                                                <th className="text-sm tracking-wide text-left font-semibold pt-4 basis-3/5 ">Question</th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <div className="grid text-left">
                                                {
                                                    records.map((question) => (
                                                        <tr className="flex flex-row text-left text-sm cursor-pointer border-y border-gray-300" >
                                                            <td className="basis-1/5 p-y-2 " key={question.questionID} onClick={() => handleQuestionClick(question.interviewQuestions)}>
                                                                {question.position}
                                                            </td>
                                                            <td className="basis-1/5 p-y-2 " key={question.questionID} onClick={() => handleQuestionClick(question.interviewQuestions)}>
                                                                {question.typeQuestion}
                                                            </td>
                                                            <td className="basis-3/5 p-y-2 " key={question.questionID} onClick={() => handleQuestionClick(question.interviewQuestions)}>
                                                                {question.interviewQuestions}
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Pagination */}
                                {/* <section className="flex justify-end absolute">
                                    <ul className="inline-flex gap-x-2">
                                        <li className=" ">
                                            <a href="#" className=" inline-flex justify-center" onClick={prePage}>
                                                <div className="w-[20px] h-[20px] relative"> <ChevronLeftIcon /> </div>
                                                Prev
                                            </a>
                                        </li>
                                        {
                                            numbers.map((n, i) => (
                                                <li className={` ${curPage === n ? 'active' : ' '}`} key={i}>
                                                    <a href="#" className="" onClick={() => changeCurPage(n)}> {n}  </a>
                                                </li>
                                            ))
                                        }
                                        <li className=" ">
                                            <a href="#" className=" inline-flex justify-center" onClick={nextPage}> Next
                                                <div className="w-[20px] h-[20px]"><ChevronRightIcon /></div>
                                            </a>
                                        </li>
                                    </ul>
                                </section> */}
                            </div>
                            {/* button */}
                            <div className="absolute  flex top-[-10px] left-[-10px]">
                                <div className="flex flex-row  gap-x-10 pl-2 ">
                                    <div className=" w-1/5 ">
                                        <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-s-lg drop-shadow-lg mr-4  
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 hover:transition-all  ">
                                            Position
                                        </button>
                                    </div>
                                    <div className=" w-1/5 h-[50px] ">
                                        <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-e-lg drop-shadow-lg mr-4  
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 hover:transition-all  " >
                                            Technology
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* score */}
                        <div className="bg-emerald-600 h-1/2 w-full rounded-lg p-2 pb-2 relative ">
                            <div className=" inline-flex justify-between gap-x-2 w-full h-full ml-4">
                                <div className=" text-white font-semibold flex flex-col w-full items-center">Question
                                    <div className="w-full h-[30px] bg-white rounded-md flex items-center p-2 ">
                                        <h2 className="text-black font-semibold">
                                            {`${questions}`}
                                        </h2>
                                    </div>
                                    <textarea className="flex flex-col w-full h-[150px] bg-white rounded-md p-2 m-2 text-black break-words resize-none"
                                        placeholder="Note..." ></textarea>
                                </div>
                                <div className="w-[10rem]">
                                    <div className="text-white text-left font-semibold rounded flex flex-col w-2/3 items-center">Score
                                        <div className="w-full h-[30px] bg-white rounded-md  text-black flex items-center" >
                                            <input type="text" className="w-full text-center rounded-md" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* send */}
                        <div className="flex justify-center items-center ">
                            <button className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-lg drop-shadow-lg mx-4 mb-2 transition-all
                                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                                border-transparent border hover:border-emerald-600 w-1/5 flex justify-center bottom-0 "
                                onClick={() => setShowPopUp(true)}>
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PopUp onClose={handleOnClose} visible={showPopUp} />
        </div>
    )

}