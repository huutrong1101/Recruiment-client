import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { useEffect, useState } from "react";

// Component
import { INTCandidateDetail } from "../../InterviewerPages";
import Error from "../../Error/Error";

// Function from Slice
import { fetchINTInterviewByID, fetchSkills, fetchTypes, setText, setSkill, setType } from "../../../../redux/reducer/INTInterviewsSlice";
import { selectQuestions, removeQuestions, setEmptySelectedQuestions, 
        fetchINTAssignedQuestions, assignQuestionForInterview, fetchINTQuestionData,
        deleteQuestionOfInterview} from "../../../../redux/reducer/INTQuestionsSlice";
import { fetchINTCandidatesByID } from "../../../../redux/reducer/INTCandidatesSlice";
import { formatDDMMYY } from "../../CandidateRecent/CandidateRecent";

// Icon
import { TrashIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { BsFilterLeft } from "react-icons/bs";

// Status
import { STATUS } from "../../../../utils/Status";
import Loader from "../../../../components/Loader/Loader";
import { JOB_POSITION } from "../../../../utils/Localization";
import { TYPE_alter } from "../../../../utils/Localization";

function formatHHMM(date : any) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
  
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
  
    return `${hours}:${minutes}`;
}
function truncatedString(str : any) {
    const maxLength = 50;
    if (str && str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    }
    return str;
}
export function checkCompleteMarkScore(lst : any){
    for (let i = 0; i < lst.length; i++) {
        if (lst[i]?.score === "") {
          return false;
        }
    }
    return true;
}
function calculateTotalScore(lst : any){
    let sum = 0;
    for (let i = 0; i < lst.length; i++) {
        sum += lst[i]?.score;
    }
    return sum;
}

const InterviewDetail = () => {

    const { id } = useParams(); 
    const ID : string = id!;
    const {INTSingleInterview, INTSingleInterviewStatus,
        skills, types, text, skill, type} = useAppSelector((state: any) => state.INTInterviews);

    const { searchQuestions, searchQuestionsStatus, 
            selectedQuestions,
            assignedQuestions, assignedQuestionsStatus} = useAppSelector((state: any) => state.INTQuestions);

    const dispatch = useAppDispatch();
    
    const [view, setView] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (event : any) => {
        const textFilter = event.target.value;
        dispatch(setText(textFilter)); 
        dispatch(fetchINTQuestionData(`?content=${textFilter}&skill=${skill}&typeQuestion=${type}`));
        setTimeout(() => {
            setShowDropdown(true);
        }, 300);
        console.log(textFilter, skill, type)
    }
    const handleClickType = (event : any) => {
        const typeFilter = event.target.value;
        dispatch(setType(typeFilter))
        dispatch(fetchINTQuestionData(`?content=${text}&skill=${skill}&typeQuestion=${typeFilter}`));
        setTimeout(() => {
            setShowDropdown(true);
        }, 300);
        console.log(text, skill, typeFilter)
    }
    const handleClickSkill = (event : any) => {
        const skillFilter = event.target.value;
        dispatch(setSkill(skillFilter))
        dispatch(fetchINTQuestionData(`?content=${text}&skill=${skillFilter}&typeQuestion=${type}`));
        setTimeout(() => {
            setShowDropdown(true);
        }, 300);
        console.log(text, skillFilter, type)
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

    const showCandidate = () => {
        dispatch(fetchINTCandidatesByID(ID))
        setView(true);
    }

    useEffect(() => {
        dispatch(fetchINTInterviewByID(id));
        dispatch(fetchINTAssignedQuestions(id));
        dispatch(fetchSkills());
        dispatch(fetchTypes());
    }, []);

    if(INTSingleInterviewStatus === STATUS.IDLE || INTSingleInterviewStatus === STATUS.LOADING){
        return (
            <div className="InterviewDetail ">
                <div className="mt-8 border-2 shadow-xl px-6 py-6 rounded-xl">
                    <div className='text-2xl font-semibold'>Interview Information</div>
                    <div className="text-base mt-2">Position Recruiment: <span className="text-sm ml-2">
                        {JOB_POSITION[INTSingleInterview?.position]}</span>
                    </div>
                    <div className="text-base">Date: <span className="text-sm ml-2">
                        {formatHHMM(INTSingleInterview?.time) + " " + formatDDMMYY(INTSingleInterview?.time)}</span>
                    </div>
                    <div className="text-base">Link Meeting: 
                        <Link to={INTSingleInterview?.interviewLink} >
                            <span className="text-sm ml-2 text-blue-600 hover:text-blue-900 
                            decoration-solid drop-shadow-lg">
                                {truncatedString(INTSingleInterview?.interviewLink)}
                            </span>
                        </Link>
                    </div>
                </div>
                {!checkCompleteMarkScore(assignedQuestions) &&
                    (<div className="mt-14 border-2 shadow-xl px-6 py-6 rounded-xl">
                        <div className='text-2xl font-semibold'>Assign Questions For Interview</div>
                        <form className="relative flex justify-center mt-2">
                            <div className="flex items-center my-2 px-4 py-2 border rounded-l-xl border-e-0">
                                <BsFilterLeft className="h-[25px] w-[25px]" />
                                <select className="ml-2 px-2 py-1" id="dropdown1"
                                        onChange={handleClickSkill}
                                        onFocus={() => setShowDropdown(true)}
                                        onBlur={handleDropdownBlur} >
                                    <option value="">Type: None</option>
                                    {skills.map((skill: any) =>(
                                        <option key={skill.skillId} value={skill.name} 
                                                >{skill.name}</option>
                                    ))}
                                </select>
                                <select className="ml-2 px-2 py-1" id="dropdown2"
                                        onChange={handleClickType} 
                                        onFocus={() => setShowDropdown(true)}
                                        onBlur={handleDropdownBlur}>
                                    <option value="">Skill: None</option>
                                    {types.map((type: any, index: any) => (
                                        <option key={index} value={type} >{TYPE_alter[type]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center my-2 px-4 py-2 border rounded-r-xl">
                                <label  htmlFor="simple-search">
                                    <MagnifyingGlassIcon className="w-5 h-5"/>
                                </label>
                                <input type="text" id="simple-search" className="ml-2 w-[30vw]"
                                        value={text} placeholder="Search Name" 
                                        onChange={handleChange}
                                        onFocus={() => setShowDropdown(true)}
                                        onBlur={handleDropdownBlur} 
                                        required />
                            </div>     
                            {showDropdown && (
                                <ul className="absolute bg-white border border-gray-300 top-[65px] ml-6
                                                rounded-lg custom-scroll min-w-[700px]
                                                max-h-[200px] overflow-y-auto">
                                    {
                                        searchQuestionsStatus === STATUS.LOADING && <Loader/>
                                    }

                                    {searchQuestionsStatus === STATUS.IDLE && searchQuestions?.map((question : any) => (
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
                        <div className="mx-auto mt-8 mb-8">
                            <div>
                                <table className="w-full table-auto border-collapse border border-gray-300 rounded">
                                    <thead>
                                    <tr className="bg-gray-200">
                                        <th className="px-4 py-2 w-7/12">Question</th>
                                        <th className="px-4 py-2 w-2/12">Type</th>
                                        <th className="px-4 py-2 w-2/12">Skill</th>
                                        <th className="px-4 py-2 w-1/12">Button</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {assignedQuestions?.map((item: any) => (
                                        <tr key={item.questionId} className="bg-white">
                                        <td className="border px-4 py-2">{item.content}</td>
                                        <td className="border px-4 py-2 text-center">{item.typeQuestion}</td>
                                        <td className="border px-4 py-2 text-center">{item.skill}</td>
                                        <td className="border px-4 py-2 text-center">
                                            <TrashIcon onClick={() => {handleDelete(item)}}  className="ml-3 cursor-pointer w-5 h-5 text-gray-500"/>
                                        </td>
                                        </tr>
                                    ))}

                                    {selectedQuestions[ID]?.map((item : any) => (
                                        <tr key={item.questionId} className="bg-white">
                                            <td className="border px-4 py-2">{item.content}</td>
                                            <td className="border px-4 py-2">{item.typeQuestion}</td>
                                            <td className="border px-4 py-2">{item.skill.name}</td>
                                            <td className="border px-4 py-2">
                                                    <TrashIcon onClick={() => {handleRemove(item)}}  className="ml-3 cursor-pointer w-5 h-5 text-gray-500"/>
                                            </td>
                                        </tr>
                                    ))} 
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
                                    Save Questions
                                </button>
                            </div>
                        </div>
                    </div>)
                }
                {checkCompleteMarkScore(assignedQuestions) && 
                    (<div className="mt-14 border-2 shadow-xl px-6 py-6 rounded-xl">
                        <div className='text-2xl font-semibold'>Result of Interview</div>
                        <table className="w-full border-collapse border border-gray-300 rounded mt-4">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 w-6/12">Question</th>
                                <th className="px-4 py-2 w-5/12">Note</th>
                                <th className="px-4 py-2 w-1/12">Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            {assignedQuestions?.map((item: any) => (
                                <tr key={item.questionId} className="bg-white">
                                    <td className="border px-4 py-2">{item.content}</td>
                                    <td className="border px-4 py-2">{item.note}</td>
                                    <td className="border px-4 py-2 text-center">
                                        {item.score}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="flex justify-end text-xl font-medium mt-4">
                            Total Score: {calculateTotalScore(assignedQuestions)}/{10*assignedQuestions.length}</div>
                    </div>)
                }

                {   view?
                    (
                        <div className="mt-14"><INTCandidateDetail /></div>
                    )
                    :
                    (
                        <div className="flex justify-between mt-8">
                            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={showCandidate}>
                                Show More Candidate Information
                            </button>
                            {!checkCompleteMarkScore(assignedQuestions) &&
                                (<Link to={`/interviewer/interview-recent/${id}/score-page`}>
                                    <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
                                        Start Interview
                                    </button>      
                                </Link>)
                            }
                        </div>
                    )
                }      
                    {
                        view && !checkCompleteMarkScore(assignedQuestions) &&
                        <div className="flex justify-end mt-8">
                            <Link to={`/interviewer/interview-recent/${id}/score-page`}>
                                <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
                                    Start Interview
                                </button>      
                            </Link>
                        </div>
                    }
            </div>
        )
    }
    else if(INTSingleInterviewStatus === STATUS.ERROR500 || assignedQuestionsStatus === STATUS.ERROR500){
        return (
            <Error errorCode={ STATUS.ERROR500} />
        )
    }else if(INTSingleInterviewStatus === STATUS.ERROR404){
        return (
            <Error errorCode={ STATUS.ERROR404} />
        )
    }
}

export default InterviewDetail;
