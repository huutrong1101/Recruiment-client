import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/20/solid";
import { fetchINTInterviewByID } from "../../../../redux/reducer/INTInterviewsSlice";
import { useEffect, useState } from "react";
import { INTCandidateDetail } from "../../InterviewerPages";

const data = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Mike Johnson', age: 28, city: 'Chicago' },
    { id: 4, name: 'Sarah Brown', age: 32, city: 'San Francisco' },
  ];

const InterviewDetail = () => {

    const { id } = useParams(); 
    const {INTSingleInterview, INTSingleInterviewStatus} = useAppSelector((state: any) => state.INTInterviews);
    const dispatch = useAppDispatch();
    
    const [view, setView] = useState(false);

    useEffect(() => {
        dispatch(fetchINTInterviewByID(id))
    }, []);

    return (
        <div className="InterviewDetail ">
            <div className='text-2xl mt-4'>Interview Information</div>
            <div className="mb-8 flex mt-4">
                <div className="w-3/12">
                    <div className="">
                        <div className="text-base">Position Recruiment: <span className="text-sm ml-2">{INTSingleInterview.position}</span></div>
                        <div className="text-base">Date: <span className="text-sm ml-2">{INTSingleInterview.time}</span></div>
                        <div className="text-base">Link Meeting: <span className="text-sm ml-2">{INTSingleInterview.link}</span></div>
                    </div>
                </div>
                <div className="w-9/12">
                    <div className="max-w-2xl mx-auto">
                        <div>
                            <table className="w-full table-auto border-collapse border border-gray-300 rounded">
                                <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Age</th>
                                    <th className="px-4 py-2">City</th>
                                    <th className="px-4 py-2"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((item) => (
                                    <tr key={item.id} className="bg-white">
                                    <td className="border px-4 py-2">{item.id}</td>
                                    <td className="border px-4 py-2">{item.name}</td>
                                    <td className="border px-4 py-2">{item.age}</td>
                                    <td className="border px-4 py-2 border-e-0">{item.city}</td>
                                    <td className="border px-4 py-2 border-s-0">icon</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                                Show More Candidate Information
                            </button>
                        </div>
                    </div>
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
                        <Link to="/interviewer/score-page">
                        <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                            Start Interview
                        </button>      
                        </Link>
                    </div>
                )
            }      
                {
                    view && 
                    <div className="flex justify-end">
                        <Link to="/interviewer/score-page">
                            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                                Start Interview
                            </button>      
                        </Link>
                    </div>
                }
        </div>
    );
}

export default InterviewDetail;