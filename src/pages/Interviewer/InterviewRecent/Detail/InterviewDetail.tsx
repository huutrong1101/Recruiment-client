import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { TrashIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { fetchINTInterviewByID } from "../../../../redux/reducer/INTInterviewsSlice";
import { useEffect, useState } from "react";
import { INTCandidateDetail } from "../../InterviewerPages";
import { selectQuestions, removeQuestions, setEmptySelectedQuestions,
        fetchINTQuestionData, fetchINTAssignedQuestions, assignQuestionForInterview,
        deleteQuestionOfInterview} from "../../../../redux/reducer/INTQuestionsSlice";
import { STATUS } from "../../../../utils/Status";
import Loader from "../../../../components/Loader/Loader";

const InterviewDetail = () => {

    const { id } = useParams(); 
    const ID : string = id!;
    const {INTSingleInterview, INTSingleInterviewStatus} = useAppSelector((state: any) => state.INTInterviews);
    const {searchQuestions, searchQuestionsStatus, 
            selectedQuestions,
            assignedQuestions, assignedQuestionsStatus} = useAppSelector((state: any) => state.INTQuestions);

    const dispatch = useAppDispatch();
    
    const [view, setView] = useState(false);
    const [text, setText] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (event : any) => {
        const textFilter = event.target.value;
        setText(textFilter);
        dispatch(fetchINTQuestionData(textFilter));
    }

    const handleAdd = (question : any) => {
        dispatch(selectQuestions({ ID, question }))
    }
    const handleRemove = (question : any) => {
        dispatch(removeQuestions({ID, question}));
    }
    const handleSave = () => {
        dispatch(assignQuestionForInterview({ID, selectedQuestions}));
        dispatch(setEmptySelectedQuestions({ID}));
        dispatch(fetchINTAssignedQuestions(id));
        dispatch(fetchINTAssignedQuestions(id));
    }
    const handleDelete = (question : any) => {
        dispatch(deleteQuestionOfInterview({ID, question}));
        dispatch(fetchINTAssignedQuestions(id));
        dispatch(fetchINTAssignedQuestions(id));
    }

    const handleDropdownBlur = () => {
        setTimeout(() => {
            setShowDropdown(false);
        }, 200);
    };

    useEffect(() => {
        dispatch(fetchINTInterviewByID(id));
        dispatch(fetchINTAssignedQuestions(id));
    }, []);

    if(INTSingleInterviewStatus === STATUS.IDLE || INTSingleInterviewStatus === STATUS.LOADING){
        return (
            <div className="InterviewDetail ">
                <div className='text-2xl mt-4'>Interview Information</div>
                <div className="mt-4">
                            <div className="text-base">Position Recruiment: <span className="text-sm ml-2">{INTSingleInterview?.position}</span></div>
                            <div className="text-base">Date: <span className="text-sm ml-2">{INTSingleInterview?.time}</span></div>
                            <div className="text-base">Link Meeting: <span className="text-sm ml-2">{INTSingleInterview?.link}</span></div>
                </div>
                <div className="flex justify-center mt-8">
                    <form className="w-[40vw]">
                        <div className="relative">
                        <MagnifyingGlassIcon className="absolute mt-[0.9rem] ml-[0.75rem] w-5 h-5"/>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-base rounded-lg w-full pl-10 p-2.5"
                                value={text} placeholder="Search Name" 
                                onChange={handleChange}
                                onFocus={() => setShowDropdown(true)}
                                onBlur={handleDropdownBlur} 
                                required />
                        </div>

                        {showDropdown && (
                            <ul className="absolute bg-white border border-gray-300 mt-2 rounded-lg w-[30vw]">
                                {
                                    searchQuestionsStatus === STATUS.LOADING && <Loader/>
                                }

                                {searchQuestionsStatus === STATUS.IDLE && searchQuestions.map((question : any) => (
                                <li
                                    key={question.questionId}
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setShowDropdown(false); 
                                        handleAdd(question);
                                    }}
                                >
                                    {question.content}
                                </li>
                                ))}
                                {
                                    searchQuestionsStatus === STATUS.IDLE && searchQuestions.length === 0 && 
                                        <li className="px-5 py-3">Không có kết quả tìm kiếm</li>                    
                                }
                            </ul>
                        )}
                    </form>
                </div>
                <div className="mx-auto mt-8 mb-8">
                    <div>
                        <table className="w-full table-auto border-collapse border border-gray-300 rounded">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">Question</th>
                                <th className="px-4 py-2">Type</th>
                                <th className="px-4 py-2">Skill</th>
                                <th className="px-4 py-2">Button</th>
                            </tr>
                            </thead>
                            <tbody>
                            {assignedQuestions?.map((item: any) => (
                                <tr key={item.questionId} className="bg-white">
                                <td className="border px-4 py-2">{item.content}</td>
                                <td className="border px-4 py-2">{item.typeQuestion}</td>
                                <td className="border px-4 py-2">{item.skill}</td>
                                <td className="border px-4 py-2">
                                    <TrashIcon onClick={() => {handleDelete(item)}}  className="ml-3 cursor-pointer w-5 h-5 text-gray-500"/>
                                </td>
                                </tr>
                            ))}

                            {selectedQuestions[ID]?selectedQuestions[ID].map((item : any) => (
                                <tr key={item.questionId} className="bg-white">
                                <td className="border px-4 py-2">{item.content}</td>
                                <td className="border px-4 py-2">{item.typeQuestion}</td>
                                <td className="border px-4 py-2">{item.skill}</td>
                                <td className="border px-4 py-2">
                                        <TrashIcon onClick={() => {handleRemove(item)}}  className="ml-3 cursor-pointer w-5 h-5 text-gray-500"/>
                                </td>
                                </tr>
                            )) : ""} 
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
                            Save Questions
                        </button>
                    </div>
                </div>
                <hr />
                {   view?
                    (
                        <INTCandidateDetail />
                    )
                    :
                    (
                        <div className="flex justify-between mt-5">
                            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => setView(true)}>
                                Show More Candidate Information
                            </button>
                            <Link to={`/interviewer/candidate-recent/${id}/score-page`}>
                            <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
                                Start Interview
                            </button>      
                            </Link>
                        </div>
                    )
                }      
                    {
                        view && 
                        <div className="flex justify-end">
                            <Link to={`/interviewer/candidate-recent/${id}/score-page`}>
                                <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
                                    Start Interview
                                </button>      
                            </Link>
                        </div>
                    }
            </div>
        )
    }
    else if(INTSingleInterviewStatus === STATUS.ERROR){
        return <div>ERROR</div>
    }
}

export default InterviewDetail;